import React from 'react';
import { render } from '@testing-library/react';
import { Quad } from '../';
import docs from '../docs/docs';
import Path from './Path';

const shapeTest = (Component) => {
  return render(<svg>{Component}</svg>);
};

const commonProps = {
  sx: 10,
  sy: 50,
  cx: 25,
  cy: 25,
  ex: 40,
  ey: 50
};

const args = docs.curves.quad.args;

describe('Quad', () => {
  it(`Quad should render correct T commands`, () => {
    const T = [
      [70, 50],
      [100, 50],
      [130, 50],
      [160, 50],
      [190, 50],
      [220, 50]
    ];
    const { getByTestId } = shapeTest(
      <Quad {...commonProps} T={T} data-testid='c' />
    );
    const path = getByTestId('c');

    const pathArgs = args.map((k) => commonProps[k]);
    const p = new Path().moveTo(commonProps.sx, commonProps.sy).Q(...pathArgs);
    T.forEach((scmd) => p.T.apply(p, scmd));
    expect(path.getAttribute('d')).toEqual(p.toString());
  });
  it(`Quad should render correct t commands`, () => {
    const t = [
      [70, 50],
      [100, 50],
      [130, 50],
      [160, 50],
      [190, 50],
      [220, 50]
    ];
    const { getByTestId } = shapeTest(
      <Quad {...commonProps} t={t} data-testid='c' />
    );
    const path = getByTestId('c');

    const pathArgs = args.map((k) => commonProps[k]);
    const p = new Path()
      .moveTo(commonProps.sx, commonProps.sy)
      .qCurve(...pathArgs);
    t.forEach((scmd) => p.t.apply(p, scmd));
    expect(path.getAttribute('d')).toEqual(p.toString());
  });
});
