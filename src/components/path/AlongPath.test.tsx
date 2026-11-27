import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Path from './Path';
import { AlongPath } from './AlongPath';
import { Circle, Line, Triangle } from '../shapes/basic';

describe('<AlongPath />', () => {
  it('distributes items using a render function along a Path', () => {
    const path = new Path().M(0, 0).L(100, 0);
    const { container } = render(
      <svg>
        <AlongPath path={path} count={3} showPath pathProps={{ stroke: 'gray' }}>
          {({ x, y, index }) => (
            <circle key={index} cx={x} cy={y} r={5} data-index={index} />
          )}
        </AlongPath>
      </svg>
    );

    expect(container.querySelector('path')?.getAttribute('d')).toBe('M0 0L100 0');
    const circles = container.querySelectorAll('circle');
    expect(circles.length).toBe(3);
    expect(circles[0].getAttribute('cx')).toBe('0');
    expect(circles[1].getAttribute('cx')).toBe('50');
    expect(circles[2].getAttribute('cx')).toBe('100');
  });

  it('clones a single shape template count times along a shape element with orient', () => {
    const { container } = render(
      <svg>
        <AlongPath path={<Line sx={0} sy={0} ex={0} ey={100} />} count={3} orient>
          <Triangle size={10} />
        </AlongPath>
      </svg>
    );

    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(3);
    expect(paths[1].getAttribute('d')).toBe(
      new Path().triangle(10, 0, 50).rotate(90, 0, 50).toString()
    );
  });

  it('distributes multiple distinct children evenly from start to end', () => {
    const path = new Path().M(0, 0).L(100, 0);
    const { getByTestId } = render(
      <svg>
        <AlongPath path={path} start={0.25} end={0.75}>
          <Circle size={10} data-testid='a' />
          <Circle size={10} data-testid='b' />
        </AlongPath>
      </svg>
    );

    expect(getByTestId('a').getAttribute('d')).toBe(
      new Path().circle(10, 25, 0).toString()
    );
    expect(getByTestId('b').getAttribute('d')).toBe(
      new Path().circle(10, 75, 0).toString()
    );
  });
});
