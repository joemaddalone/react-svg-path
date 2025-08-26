import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Svg } from './Svg';
import { Square } from '../shapes/basic';

describe('<Svg />', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Svg>
        <rect data-testid='child' />
      </Svg>
    );
    expect(getByTestId('child')).toBeDefined();
  });

  it('should render nested component at correct center points', () => {
    const width = 500;
    const height = 250;
    const { getByTestId } = render(
      <Svg width={width} height={height}>
        <Square size={50} data-testid='child' />
      </Svg>
    );
    const d = getByTestId('child').getAttribute('d');
    expect(d?.endsWith(`M${width / 2} ${height / 2}`)).toBeDefined();
  });
});
