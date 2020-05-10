import Path from '.';

describe('Path', () => {
  let path;
  beforeEach(() => {
    path = new Path();
  });
  expect().toBe();
  it('Path inits with an empty array', () => {
    expect(path.toArray() instanceof Array).toBe(true);
    expect(path.toArray().length).toBe(0);
  });

  it('lineTo creates line data', () => {
    path.lineTo(0, 0);
    expect(path.toString().includes('L')).toBe(true);
  });

  ['H', 'h', 'V', 'v', 'l', 'L', 'Q', 'q', 'm', 'M'].forEach((command) => {
    it(`${command} creates ${command} data`, () => {
      path[command](0, 0);
      expect(path.toString().includes(command)).toBe(true);
    });
  });

  it('close creates close data', () => {
    path.close();
    expect(path.toString().includes('z')).toBe(true);
  });

  it('moveTo creates M data', () => {
    path.moveTo(0, 0);
    expect(path.toString().includes('M')).toBe(true);
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
});
