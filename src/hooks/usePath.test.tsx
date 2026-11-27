import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { usePath, UsePathResult } from './usePath';

describe('usePath', () => {
  it('builds a path and exposes geometry metrics synchronously', () => {
    let captured!: UsePathResult;

    const TestComponent: React.FC<{ endX: number }> = ({ endX }) => {
      captured = usePath((p) => p.M(0, 0).L(endX, 40), [endX]);
      return <svg>{captured.toComponent({ 'data-testid': 'p' } as any)}</svg>;
    };

    const { getByTestId, rerender } = render(<TestComponent endX={30} />);

    expect(getByTestId('p').getAttribute('d')).toBe('M0 0L30 40');
    expect(captured.d).toBe('M0 0L30 40');
    expect(captured.length).toBe(50);
    expect(captured.bbox).toEqual({
      minX: 0,
      minY: 0,
      maxX: 30,
      maxY: 40,
      width: 30,
      height: 40
    });
    expect(captured.startPoint).toEqual({ x: 0, y: 0 });
    expect(captured.currentPoint).toEqual({ x: 30, y: 40 });
    expect(captured.pointAtPercent(0.5)).toEqual({ x: 15, y: 20 });
    expect(captured.tangentAtPercent(0.5).x).toBeCloseTo(0.6);
    expect(captured.tangentAtPercent(0.5).y).toBeCloseTo(0.8);
    expect(captured.descriptor({ stroke: 'red' }).length).toBe(50);

    const firstRef = captured;
    rerender(<TestComponent endX={30} />);
    expect(captured).toBe(firstRef);

    rerender(<TestComponent endX={0} />);
    expect(captured.length).toBe(40);
  });
});
