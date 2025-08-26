import React from 'react';
import { render } from '@testing-library/react';
import { expect, describe, it } from "vitest";
import { Marker } from './Marker';
import { MarkerArrow } from './MarkerArrow';
import { MarkerLine } from './MarkerLine';
import { MarkerSquare } from './MarkerSquare';
import { MarkerTriangle } from './MarkerTriangle';

describe('<Marker />', () => {
  it('should render correctly', () => {
    const { getByTestId, container } = render(
      <svg>
        <Marker
          data-testid='m'
          id='x'
          markerWidth={10}
          markerHeight={11}
          refX={8}
          refY={5}
        >
          <circle cx={0} cy={0} r={10} data-testid='c' />
        </Marker>
      </svg>
    );
    expect(container.querySelector('def')).toBeDefined();
    expect(getByTestId('c')).toBeDefined();
  });
});

describe('Markers', () => {
  [
    { C: MarkerArrow, name: 'MarkerArrow' },
    { C: MarkerLine, name: 'MarkerLine' },
    { C: MarkerSquare, name: 'MarkerSquare' },
    { C: MarkerTriangle, name: 'MarkerTriangle' }
  ].forEach(({ C, name }: { C: React.ComponentType<any>, name: string }) => {
    it(`${name} renders correctly`, () => {
      const { getByTestId, container } = render(
        <svg>
          <C data-testid='m' />
        </svg>
      );
      expect(container.querySelector('def')).toBeDefined();
      expect(getByTestId('m')).toBeDefined();
    });
  });
});
