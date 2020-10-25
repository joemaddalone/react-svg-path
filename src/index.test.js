import Path from '.';

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
    expect(path.toString() === path.toArray().join(' ')).toBe(true);
  });

  it('toArray is of correct length', () => {
    path.moveTo(0, 0).lineTo(1, 1);
    expect(path.toArray().length).toBe(2);
  });

  it('toString is correct', () => {
    path.moveTo(0, 0).lineTo(1, 1);
    expect(path.toString()).toBe('M0 0 L1 1');
  });

  it('attributes', () => {
    path.attr('fill', 'white');
    expect(path.attributes.fill).toBe('white');
  });

  ['fill', 'stroke', 'style'].forEach((shortcut, index) => {
    it(`correctly populates attr with shortcut ${shortcut}`, () => {
      path[shortcut](index);
      expect(path.attributes[shortcut]).toBe(index);
    });
  });
});
