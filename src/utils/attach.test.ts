import { describe, expect, it } from 'vitest';
import attach from './attach';

const sx = 10;
const sy = 20;
const ex = 101;
const ey = 201;

describe('attach', () => {
  it('should return correct end attachment values', () => {
    const childProps = { attach: 'end', ox: 0, oy: 0 };
    const result = attach(childProps, sx, sy, ex, ey);
    expect(result.sx).toEqual(ex);
    expect(result.sy).toEqual(ey);
    expect(result.cx).toEqual(ex);
    expect(result.cy).toEqual(ey);
  });
  it('should return correct start attachment values', () => {
    const childProps = { attach: 'start', ox: 0, oy: 0 };
    const result = attach(childProps, sx, sy, ex, ey);
    expect(result.sx).toEqual(sx);
    expect(result.sy).toEqual(sy);
    expect(result.cx).toEqual(sx);
    expect(result.cy).toEqual(sy);
  });
  it('should return correct offset attachment values', () => {
    const childProps = { attach: 'start', ox: 10, oy: 20 };
    const result = attach(childProps, sx, sy, ex, ey);
    expect(result.sx).toEqual(sx + 10);
    expect(result.sy).toEqual(sy + 20);
    expect(result.cx).toEqual(sx + 10);
    expect(result.cy).toEqual(sy + 20);
  });
});
