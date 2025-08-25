import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PathMerge } from './PathMerge';
import { Line } from '../shapes/basic';

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
    expect(path.getAttribute('d')).toEqual('M0 0L100 100M0 0L50 50');
  });
  it('should render combined paths with custom path', () => {
    const { getByTestId } = render(
      <svg>
        <PathMerge data-testid='pm'>
          <Line sx={0} sy={0} ex={100} ey={100} />
          <Line sx={0} sy={0} ex={300} ey={300} />
          <path d='M0,0h200v100' />
        </PathMerge>
      </svg>
    );
    const path = getByTestId('pm');
    expect(path.getAttribute('d')).toEqual(
      'M0 0L100 100M0 0L300 300M0,0h200v100'
    );
  });
});
