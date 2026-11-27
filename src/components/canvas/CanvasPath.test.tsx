import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Path from '../path/Path';
import { CanvasPath } from './CanvasPath';
import { Line } from '../shapes/basic';

const createMockContext = () => ({
  clearRect: vi.fn(),
  beginPath: vi.fn(),
  moveTo: vi.fn(),
  lineTo: vi.fn(),
  bezierCurveTo: vi.fn(),
  quadraticCurveTo: vi.fn(),
  ellipse: vi.fn(),
  arc: vi.fn(),
  closePath: vi.fn(),
  stroke: vi.fn(),
  fill: vi.fn(),
  fillStyle: '',
  strokeStyle: '',
  lineWidth: 1,
  lineCap: 'butt',
  lineJoin: 'miter'
});

describe('<CanvasPath />', () => {
  it('draws a Path instance onto the 2D canvas context', () => {
    const mockCtx = createMockContext();
    const spy = vi
      .spyOn(HTMLCanvasElement.prototype, 'getContext')
      .mockReturnValue(mockCtx as any);

    const path = new Path().M(10, 20).L(110, 120);
    render(
      <CanvasPath
        path={path}
        width={200}
        height={150}
        stroke='#333'
        fill='red'
        lineWidth={3}
      />
    );

    expect(mockCtx.clearRect).toHaveBeenCalledWith(0, 0, 200, 150);
    expect(mockCtx.beginPath).toHaveBeenCalled();
    expect(mockCtx.moveTo).toHaveBeenCalledWith(10, 20);
    expect(mockCtx.lineTo).toHaveBeenCalledWith(110, 120);
    expect(mockCtx.fillStyle).toBe('red');
    expect(mockCtx.fill).toHaveBeenCalled();
    expect(mockCtx.strokeStyle).toBe('#333');
    expect(mockCtx.lineWidth).toBe(3);
    expect(mockCtx.stroke).toHaveBeenCalled();

    spy.mockRestore();
  });

  it('draws child shape components and invokes custom onDraw callback', () => {
    const mockCtx = createMockContext();
    const spy = vi
      .spyOn(HTMLCanvasElement.prototype, 'getContext')
      .mockReturnValue(mockCtx as any);
    const onDraw = vi.fn();

    render(
      <CanvasPath width={200} height={200} onDraw={onDraw}>
        <Line sx={0} sy={0} ex={50} ey={75} />
      </CanvasPath>
    );

    expect(mockCtx.moveTo).toHaveBeenCalledWith(0, 0);
    expect(mockCtx.lineTo).toHaveBeenCalledWith(50, 75);
    expect(onDraw).toHaveBeenCalledTimes(1);
    expect(onDraw.mock.calls[0][1].toString()).toBe('M0 0L50 75');

    spy.mockRestore();
  });
});
