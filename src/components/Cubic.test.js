import React from 'react';
import { render } from '@testing-library/react';
import { Cubic } from '../';
import docs from '../docs/docs';
import Path from './Path';

const shapeTest = (Component) => {
  return render(<svg>{Component}</svg>);
};

const commonProps = {
  sx: 10,
  sy: 90,
  cx1: 30,
  cy1: 90,
  cx2: 25,
  cy2: 10,
  ex: 50,
  ey: 10
};

const args = docs.cubic.args;

describe('Cubic', () => {
  it(`Cubic should render correct S commands`, () => {
    const S = [[70, 90, 90, 90]];
    const { getByTestId } = shapeTest(
      <Cubic {...commonProps} S={S} data-testid='c' />
    );
    const path = getByTestId('c');

    const pathArgs = args.map((k) => commonProps[k]);
    const p = new Path()
      .moveTo(commonProps.sx, commonProps.sy)
      .cCurve(...pathArgs)
      .S(...S[0]);
    expect(path.getAttribute('d')).toEqual(p.toString());
  });
  it(`Cubic should render correct s commands`, () => {
    const s = [[70, 90, 90, 90]];
    const { getByTestId } = shapeTest(
      <Cubic {...commonProps} s={s} data-testid='c' />
    );
    const path = getByTestId('c');

    const pathArgs = args.map((k) => commonProps[k]);
    const p = new Path()
      .moveTo(commonProps.sx, commonProps.sy)
      .cCurve(...pathArgs)
      .s(...s[0]);
    expect(path.getAttribute('d')).toEqual(p.toString());
  });
});
