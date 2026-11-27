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

  it('should compute a tight viewBox and dimensions when autoFit is enabled', () => {
    const { container } = render(
      <Svg autoFit padding={10}>
        <Square size={100} cx={100} cy={100} />
      </Svg>
    );
    const svg = container.querySelector('svg');
    // Square bbox: minX=50, minY=50, width=100, height=100 -> with padding=10: 40 40 120 120
    expect(svg?.getAttribute('viewBox')).toBe('40 40 120 120');
    expect(svg?.getAttribute('width')).toBe('120');
    expect(svg?.getAttribute('height')).toBe('120');
  });
});
