import React from 'react';
import { render } from '@testing-library/react';
import * as Shapes from '../';
import docs from '../docs/docs';
import Path from './Path';

const basicShapeTest = (Component) => {
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
  innerSize: 50,
  outerSize: 100,
  'point-array': [
    [0, 0],
    [10, 10],
    [100, 100]
  ]
};

describe('Basic Shapes', () => {
  Object.keys(docs.basicShapes)
    .filter((k) => k !== 'line')
    .forEach((k) => {
      const doc = docs.basicShapes[k];

      const { args, command, props: componentProps, Component } = doc;
      const props = Object.keys(componentProps)
        .filter((c) => componentProps[c].isRequired)
        .reduce((accum, cur) => {
          const propType = componentProps[cur].type;
          return { ...accum, [cur]: BSP[propType] || BSP[cur] };
        }, {});
      const pathArgs = args.map((k) => props[k]);
      const C = Shapes[Component];

      it(`${k} should contain correct path commands`, () => {
        const { getByTestId } = basicShapeTest(
          <C {...props} data-testid='c' />
        );
        const path = getByTestId('c');
        const p = new Path()[command](...pathArgs);
        expect(path.getAttribute('d')).toEqual(p.toString());
      });
    });
});
