import { describe, expect, it } from 'vitest';
import shorthand from './shorthand';

describe('render', () => {
  [
    ['cxy', 'cx', 'cy'],
    ['exy', 'ex', 'ey'],
    ['sxy', 'sx', 'sy'],
    ['rxy', 'rx', 'ry']
  ].forEach((sh) => {
    it(`Converts shorthand ${sh[0]} into ${sh[1]} & ${sh[2]}`, () => {
      const props = {};
      const expected = 100;
      props[sh[0]] = expected;
      const results = shorthand(props);
      expect(results[sh[1]]).toBe(expected);
      expect(results[sh[2]]).toBe(expected);
    });
  });
});
