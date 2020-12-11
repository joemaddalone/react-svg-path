import React from 'react';
import { render } from '@testing-library/react';
import { PathMerge } from './PathMerge';
import { Line } from './BasicShapes';

describe('<PathMerge />', () => {
  it('should render combined paths', () => {
    const { getByTestId } = render(
      <svg>
        <PathMerge data-testid='pm'>
          <Line sx={0} sy={0} ex={100} ey={100} />
          <Line sx={0} sy={0} ex={50} ey={50} />
        </PathMerge>
      </svg>
    );
    const path = getByTestId('pm');
    expect(path.getAttribute('d')).toEqual('M0 0 L100 100M0 0 L50 50');
  });
});
