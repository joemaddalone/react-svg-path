import React from 'react';
import { render } from '@testing-library/react';
import { expect, describe, beforeEach, afterEach, it, vi } from "vitest";
import * as Shapes from './index';
import docs, { basicShapes } from '../../docs/docs.mjs';
import Path from '../path/Path';

const basicShapeTest = (Component: React.ReactNode) => {
  return render(<svg>{Component}</svg>);
};

// Basic Shape Props
const BSP = {
  cx: 10,
  cy: 10,
  size: 100,
  points: 6,
  sides: 6,
  startAngle: 0,
  endAngle: 270,
  relative: false,
  sx: 0,
  sy: 0,
  ex: 100,
  ey: 100,
  width: 100,
  height: 300,
  dh: 100,
  innerSize: 50,
  outerSize: 100,
  radius: 10,
  rx: 50,
  ry: 85,
  rotation: 0,
  arc: 0,
  sweep: 1,
  cx1: 10,
  cy1: 10,
  cx2: 10,
  cy2: 10,
  'point-array': [
    [0, 0],
    [10, 10],
    [100, 100]
  ],
  shape: [
    [1, 1],
    [1, 1],
    [1, 1, 1]
  ]
};



describe('Basic Shapes', () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    // Spy on globalThis.console.error and replace its implementation with an empty function
    // This prevents actual error messages from being logged during the test
    consoleErrorSpy = vi.spyOn(globalThis.console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore the original globalThis.console.error implementation after each test
    consoleErrorSpy.mockRestore();
  });
  Object.keys(basicShapes)
    .filter((k) => k !== 'line')
    .forEach((k) => {
      const doc = docs[k as keyof typeof docs];
      const { args, command, props: componentProps, Component } = doc;
      const props = Object.keys(componentProps)
        .filter((c) => (componentProps[c as keyof typeof componentProps] as { isRequired: boolean }).isRequired)
        .reduce((accum, cur) => {
          const propType = (componentProps[cur as keyof typeof componentProps] as { type: keyof typeof BSP }).type;
          return { ...accum, [cur]: BSP[propType as keyof typeof BSP] || BSP[cur as keyof typeof BSP] };
        }, {});
      const pathArgs = args.map((k) => props[k as keyof typeof props]);
      const C = Shapes[Component as keyof typeof Shapes];

      it(`${k} should contain correct path commands`, () => {
        const { getByTestId } = basicShapeTest(
          <C {...props} data-testid='c' />
        );
        const path = getByTestId('c');
        // @ts-expect-error - pathArgs is not a valid prop for the component
        const p = new Path()[command as keyof Path](...pathArgs);
        expect(path.getAttribute('d')).toEqual(p.toString());
      });
      it(`${k} should throw an error`, () => {
        // @ts-expect-error - cy is not a valid prop for the component
        delete props.cy;
        expect(() =>
          basicShapeTest(
            <C
              {...props}
              cx={null}
              sx='Q'
              relative={123}
              points='notanarray'
              data-testid='c'
            />
          )
        ).toThrow();
      });
    });
});

describe('Cursor-derived nesting', () => {
  it('attaches children to resolved start and end points of a relative Line', () => {
    const { getByTestId } = basicShapeTest(
      <Shapes.Line sx={10} sy={20} ex={50} ey={30} relative>
        <Shapes.Circle size={10} attach='start' data-testid='start-dot' />
        <Shapes.Circle size={10} attach='end' data-testid='end-dot' />
      </Shapes.Line>
    );
    expect(getByTestId('start-dot').getAttribute('d')).toEqual(
      new Path().circle(10, 10, 20).toString()
    );
    expect(getByTestId('end-dot').getAttribute('d')).toEqual(
      new Path().circle(10, 60, 50).toString()
    );
  });

  it('attaches children to resolved endpoint of Cubic with S smooth continuation', () => {
    const { getByTestId } = basicShapeTest(
      <Shapes.Cubic
        sx={0}
        sy={0}
        cx1={10}
        cy1={20}
        cx2={30}
        cy2={40}
        ex={50}
        ey={60}
        S={[[70, 80, 120, 140]]}
      >
        <Shapes.Circle size={10} attach='end' data-testid='end-dot' />
      </Shapes.Cubic>
    );
    expect(getByTestId('end-dot').getAttribute('d')).toEqual(
      new Path().circle(10, 120, 140).toString()
    );
  });

  it('attaches children to resolved endpoint of relative Polyline', () => {
    const { getByTestId } = basicShapeTest(
      <Shapes.Polyline points={[[10, 10], [20, 30], [5, -10]]} relative>
        <Shapes.Circle size={10} attach='start' data-testid='start-dot' />
        <Shapes.Circle size={10} attach='end' data-testid='end-dot' />
      </Shapes.Polyline>
    );
    expect(getByTestId('start-dot').getAttribute('d')).toEqual(
      new Path().circle(10, 10, 10).toString()
    );
    expect(getByTestId('end-dot').getAttribute('d')).toEqual(
      new Path().circle(10, 35, 30).toString()
    );
  });
});

describe('1:1 Path transform and manipulation props', () => {
  it('bakes rotate, scale, translate, reverse, and coordinateMode into d without leaking DOM attributes', () => {
    const { getByTestId } = basicShapeTest(
      <Shapes.Square
        size={50}
        cx={100}
        cy={100}
        rotate={45}
        scale={2}
        translate={[10, -20]}
        reverse
        coordinateMode='relative'
        data-testid='sq'
      />
    );
    const el = getByTestId('sq');
    const expected = new Path()
      .square(50, 100, 100)
      .rotate(45, 100, 100)
      .scale(2, 2, 100, 100)
      .translate(10, -20)
      .reverse()
      .toRelative()
      .toString();

    expect(el.getAttribute('d')).toBe(expected);
    expect(el.getAttribute('rotate')).toBeNull();
    expect(el.getAttribute('scale')).toBeNull();
    expect(el.getAttribute('translate')).toBeNull();
    expect(el.getAttribute('matrix')).toBeNull();
    expect(el.getAttribute('reverse')).toBeNull();
    expect(el.getAttribute('coordinateMode')).toBeNull();
  });

  it('supports matrix prop on Polygon', () => {
    const { getByTestId } = basicShapeTest(
      <Shapes.Polygon
        points={[[0, 0], [100, 0], [100, 100]]}
        matrix={[2, 0, 0, 2, 10, 20]}
        data-testid='poly'
      />
    );
    const expected = new Path()
      .polygon([[0, 0], [100, 0], [100, 100]])
      .transform([2, 0, 0, 2, 10, 20])
      .toString();
    expect(getByTestId('poly').getAttribute('d')).toBe(expected);
  });

  it('attaches nested children to transformed cursor endpoints', () => {
    const { getByTestId } = basicShapeTest(
      <Shapes.Line sx={0} sy={0} ex={100} ey={0} rotate={[90, 0, 0]}>
        <Shapes.Circle size={10} attach='end' data-testid='end-dot' />
      </Shapes.Line>
    );
    expect(getByTestId('end-dot').getAttribute('d')).toEqual(
      new Path().circle(10, 0, 100).toString()
    );
  });
});
