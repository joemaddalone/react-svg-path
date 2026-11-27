import { describe, beforeEach, it, expect } from "vitest";
import Path from '../path/Path';

describe('Path', () => {
  let path;
  beforeEach(() => {
    path = new Path();
  });
  it('Path inits with an empty array', () => {
    expect(path.toArray() instanceof Array).toBe(true);
    expect(path.toArray().length).toBe(0);
  });

  [
    { method: 'arc', command: 'A' },
    { method: 'cCurve', command: 'C' },
    { method: 'qCurve', command: 'Q' },
    { method: 'sCurveTo', command: 'S' },
    { method: 'tCurveTo', command: 'T' },
    { method: 'lineTo', command: 'L' },
    { method: 'moveTo', command: 'M' },
    { method: 'horizontalTo', command: 'H' },
    { method: 'verticalTo', command: 'V' }
  ].forEach(({ method, command }) => {
    it(`should create absolute version of ${method} containing ${command}`, () => {
      path[method](0, 0);
      expect(path.toString().includes(command)).toBe(true);
    });
    it(`should create relative version of ${method} containing ${command.toLowerCase()}`, () => {
      const length = path[method].length;
      const params = Array.from({ length }).fill(0);
      params.push(true);
      path[method].apply(null, params);
      expect(path.toString().includes(command.toLowerCase())).toBe(true);
    });

    it(`${command} creates ${command} data`, () => {
      path[command](0, 0);
      expect(path.toString().includes(command)).toBe(true);
    });

    it(`${command.toLowerCase()} creates ${command.toLowerCase()} data`, () => {
      path[command.toLowerCase()](0, 0);
      expect(path.toString().includes(command.toLowerCase())).toBe(true);
    });
  });

  it('close creates close data', () => {
    path.close();
    expect(path.toString().includes('z')).toBe(true);
  });

  it('toString is joined toArray', () => {
    path.lineTo(0, 0).Q(1, 1);
    expect(path.toString() === path.toArray().join('')).toBe(true);
  });

  it('toArray is of correct length', () => {
    path.moveTo(0, 0).lineTo(1, 1);
    expect(path.toArray().length).toBe(2);
  });

  it('toString is correct', () => {
    path.moveTo(0, 0).lineTo(1, 1);
    expect(path.toString()).toBe('M0 0L1 1');
  });

  it('clone returns an independent Path subclass instance with toComponent', () => {
    path.moveTo(10, 20).lineTo(100, 200);
    const copy = path.clone();

    expect(copy).toBeInstanceOf(Path);
    expect(typeof copy.toComponent).toBe('function');
    expect(copy.toString()).toBe('M10 20L100 200');
    expect(copy.currentPoint).toEqual({ x: 100, y: 200 });
    expect(copy.startPoint).toEqual({ x: 10, y: 20 });

    copy.lineTo(150, 250);
    expect(path.toString()).toBe('M10 20L100 200');
    expect(copy.toString()).toBe('M10 20L100 200L150 250');

    const el = copy.toComponent({ stroke: 'red' });
    expect(el.type).toBe('path');
    expect(el.props.d).toBe('M10 20L100 200L150 250');
    expect(el.props.stroke).toBe('red');
  });

  it('exposes geometry, composition, and transform methods from @joemaddalone/path', () => {
    path.M(0, 0).L(30, 40);
    expect(path.getTotalLength()).toBe(50);
    expect(path.getBBox()).toEqual({
      minX: 0,
      minY: 0,
      maxX: 30,
      maxY: 40,
      width: 30,
      height: 40
    });
    expect(path.clone().reverse().toString()).toBe('M30 40L0 0');
    expect(path.clone().translate(10, 5).toString()).toBe('M10 5L40 45');
  });
});
