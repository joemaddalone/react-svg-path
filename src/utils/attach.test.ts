import { describe, expect, it } from 'vitest';
import attach from './attach';
import Path from '../components/path/Path';

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
  it('should support parametric numeric attachment along a path', () => {
    const path = new Path().M(0, 0).L(100, 200);
    const result = attach({ attach: 0.5 }, 0, 0, 100, 200, path);
    expect(result.cx).toBeCloseTo(50);
    expect(result.cy).toBeCloseTo(100);
  });
  it('should support bounding-box anchor attachments', () => {
    const path = new Path().rect(100, 60, 100, 100);
    // bbox: minX=50, minY=70, maxX=150, maxY=130
    expect(attach({ attach: 'top' }, 100, 100, 100, 100, path)).toMatchObject({
      cx: 100,
      cy: 70
    });
    expect(attach({ attach: 'bottomRight' }, 100, 100, 100, 100, path)).toMatchObject({
      cx: 150,
      cy: 130
    });
    expect(attach({ attach: 'left', ox: -10 }, 100, 100, 100, 100, path)).toMatchObject({
      cx: 40,
      cy: 100
    });
  });
  it('should orient shape children via rotate prop and non-shape children via transform', () => {
    const path = new Path().M(0, 0).L(0, 100); // vertical down -> angle 90
    const shapeResult = attach(
      { attach: 0.5, orientToPath: true },
      0,
      0,
      0,
      100,
      path,
      true
    );
    expect(shapeResult.rotate).toEqual([90, 0, 50]);

    const textResult = attach(
      { attach: 0.5, orientToPath: true },
      0,
      0,
      0,
      100,
      path,
      false
    );
    expect(textResult.transform).toBe('rotate(90 0 50)');
  });
});
