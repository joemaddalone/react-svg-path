import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PathMerge } from './PathMerge';
import { Circle, Line } from '../shapes/basic';
import { Svg } from '../containers/Svg';
import Path from './Path';

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
  it('should inherit parent positioning from Svg and strip positioning attributes', () => {
    const { getByTestId } = render(
      <Svg width={200} height={100}>
        <PathMerge data-testid='pm' stroke='blue'>
          <Circle size={40} />
        </PathMerge>
      </Svg>
    );
    const path = getByTestId('pm');
    expect(path.getAttribute('d')).toEqual(new Path().circle(40, 100, 50).toString());
    expect(path.getAttribute('stroke')).toEqual('blue');
    expect(path.getAttribute('cx')).toBeNull();
    expect(path.getAttribute('cy')).toBeNull();
  });
  it('should merge nested child shapes positioned via cursor state', () => {
    const { getByTestId } = render(
      <svg>
        <PathMerge data-testid='pm'>
          <Line sx={10} sy={20} ex={50} ey={30} relative>
            <Circle size={20} />
          </Line>
        </PathMerge>
      </svg>
    );
    const path = getByTestId('pm');
    const expected = new Path()
      .moveTo(10, 20)
      .lineTo(50, 30, true)
      .circle(20, 60, 50)
      .toString();
    expect(path.getAttribute('d')).toEqual(expected);
  });
  it('should support reversed child shapes for cutouts and transforms on PathMerge', () => {
    const { getByTestId } = render(
      <svg>
        <PathMerge
          data-testid='pm'
          fillRule='evenodd'
          translate={[10, 20]}
          rotate={[90, 100, 100]}
        >
          <Circle size={100} cx={100} cy={100} />
          <Circle size={40} cx={100} cy={100} reverse />
        </PathMerge>
      </svg>
    );
    const el = getByTestId('pm');
    const expected = new Path()
      .circle(100, 100, 100)
      .concat(new Path().circle(40, 100, 100).reverse())
      .rotate(90, 100, 100)
      .translate(10, 20)
      .toString();

    expect(el.getAttribute('d')).toEqual(expected);
    expect(el.getAttribute('fill-rule')).toEqual('evenodd');
    expect(el.getAttribute('rotate')).toBeNull();
    expect(el.getAttribute('translate')).toBeNull();
  });
});
