import React from 'react';
import { render } from '@testing-library/react';
import * as Shapes from '../';
import docs from '../docs/docs';
import Path from './Path';

const shapeTest = (Component) => {
  return render(<svg>{Component}</svg>);
};

const BSP = {
  sx: 10,
  sy: 40,
  rx: 50,
  ry: 85,
  rotation: 0,
  arc: 0,
  sweep: 1,
  ex: 70,
  ey: 40,
  cx1: 10,
  cy1: 10,
  cx2: 10,
  cy2: 10,
  cx: 10,
  cy: 10
};

describe('Curves', () => {
  Object.keys(docs.curves).forEach((k) => {
    const doc = docs.curves[k];

    const { args, command, props: componentProps, Component } = doc;
    const props = Object.keys(componentProps).reduce((accum, cur) => {
      const propType = componentProps[cur].type;
      return { ...accum, [cur]: BSP[propType] || BSP[cur] };
    }, {});
    const pathArgs = args
      .filter((k) => k !== 'sx' && k !== 'sy')
      .map((k) => props[k]);
    const C = Shapes[Component];

    it(`${k} should contain correct path commands`, () => {
      const { getByTestId } = shapeTest(<C {...props} data-testid='c' />);
      const path = getByTestId('c');
      const p = new Path().moveTo(props.sx, props.sy)[command](...pathArgs);
      expect(path.getAttribute('d')).toEqual(p.toString());
    });
  });
});
