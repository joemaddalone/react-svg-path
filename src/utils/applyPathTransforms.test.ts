import { describe, expect, it } from 'vitest';
import Path from '../components/path/Path';
import applyPathTransforms from './applyPathTransforms';

describe('applyPathTransforms', () => {
  it('rotates around cx/cy pivot hint by default', () => {
    const p = new Path().rect(50, 50, 50, 50);
    applyPathTransforms(p, { rotate: 45 }, { cx: 50, cy: 50 });

    const expected = new Path().rect(50, 50, 50, 50).rotate(45, 50, 50);
    expect(p.toString()).toBe(expected.toString());
  });

  it('rotates around explicit origin when tuple is provided', () => {
    const p = new Path().M(0, 0).L(100, 0);
    applyPathTransforms(p, { rotate: [90, 0, 0] });

    expect(p.toString()).toBe(new Path().M(0, 0).L(100, 0).rotate(90, 0, 0).toString());
  });

  it('falls back to bbox center when pivotHint is not provided', () => {
    const p = new Path().M(100, 100).L(200, 100).L(200, 200).L(100, 200).close();
    applyPathTransforms(p, { scale: 2 });

    const expected = new Path()
      .M(100, 100)
      .L(200, 100)
      .L(200, 200)
      .L(100, 200)
      .close()
      .scale(2, 2, 150, 150);
    expect(p.toString()).toBe(expected.toString());
  });

  it('supports non-uniform scale with explicit origin', () => {
    const p = new Path().M(0, 0).L(10, 20);
    applyPathTransforms(p, { scale: [2, 3, 0, 0] });

    expect(p.toString()).toBe('M0 0L20 60');
  });

  it('supports translate and matrix transforms', () => {
    const translated = new Path().M(0, 0).L(50, 50);
    applyPathTransforms(translated, { translate: [100, 25] });
    expect(translated.toString()).toBe('M100 25L150 75');

    const sheared = new Path().M(0, 0).L(0, 100);
    applyPathTransforms(sheared, { matrix: [1, 0, 0.5, 1, 0, 0] });
    expect(sheared.toString()).toBe('M0 0L50 100');
  });

  it('supports reverse and coordinateMode normalization after transforms', () => {
    const p = new Path().M(0, 0).L(100, 50);
    applyPathTransforms(p, {
      translate: [10, 20],
      reverse: true,
      coordinateMode: 'relative'
    });

    const expected = new Path()
      .M(0, 0)
      .L(100, 50)
      .translate(10, 20)
      .reverse()
      .toRelative();
    expect(p.toString()).toBe(expected.toString());
    expect(p.toString()).toBe('M110 70l-100 -50');
  });

  it('supports coordinateMode="absolute"', () => {
    const p = new Path().M(10, 10).l(20, 30);
    applyPathTransforms(p, { coordinateMode: 'absolute' });
    expect(p.toString()).toBe('M10 10L30 40');
  });
});
