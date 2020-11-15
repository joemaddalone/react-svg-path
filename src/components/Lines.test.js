import React from 'react';
import { render } from '@testing-library/react';
import { Line } from '../';
import Path from './Path';

const shapeTest = (Component) => {
  return render(<svg>{Component}</svg>);
};

describe('Line', () => {
  it(`Line should render correct path commands`, () => {
    const { getByTestId } = shapeTest(
      <Line sx={0} sy={0} ex={100} ey={100} data-testid='c' />
    );
    const path = getByTestId('c');
    const p = new Path().moveTo(0, 0).lineTo(100, 100);

    expect(path.getAttribute('d')).toEqual(p.toString());
  });
});
