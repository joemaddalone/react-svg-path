import React from 'react';
import { render } from '@testing-library/react';
import { Distance } from './Distance';

describe('<Distance />', () => {
  let props;
  beforeEach(() => {
    props = {
      sx: 0,
      sy: 0,
      ex: 500,
      ey: 0
    };
  });
  it('should render correctly', () => {
    const { getByTestId } = render(
      <svg width={500} height={500}>
        <Distance {...props} data-testid='c' />
      </svg>
    );
    expect(getByTestId('c')).toBeDefined();
  });

  it('should render with correct default value in px', () => {
    const { getByText } = render(
      <svg width={500} height={500}>
        <Distance {...props} />
      </svg>
    );
    expect(getByText('500px')).toBeDefined();
  });

  it('should render with correct scaled value', () => {
    const { getByText } = render(
      <svg width={500} height={500}>
        <Distance {...props} scale={0.5} scaleUnit=' blobs' />
      </svg>
    );
    expect(getByText('250 blobs')).toBeDefined();
  });

  ['arrow', 'line', 'square', 'triangle'].forEach((m) => {
    it(`should render end marker ${m}`, () => {
      const { container } = render(
        <svg width={500} height={500}>
          <Distance {...props} markerEnd={m} markerId={m} data-testid='c' />
        </svg>
      );
      expect(container.querySelector(`#${m}-marker-end`)).toBeTruthy();
    });
    it(`should render start marker ${m}`, () => {
      const { container } = render(
        <svg width={500} height={500}>
          <Distance {...props} markerStart={m} markerId={m} data-testid='c' />
        </svg>
      );
      expect(container.querySelector(`#${m}-marker-start`)).toBeTruthy();
    });
    it(`should render both start and end markers ${m}`, () => {
      const { container } = render(
        <svg width={500} height={500}>
          <Distance {...props} markers={m} markerId={m} data-testid='c' />
        </svg>
      );
      expect(container.querySelector(`#${m}-marker-start`)).toBeTruthy();
      expect(container.querySelector(`#${m}-marker-end`)).toBeTruthy();
    });
  });
});
