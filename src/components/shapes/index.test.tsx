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
