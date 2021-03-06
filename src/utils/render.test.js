import render from './render';
import Path from '../components/Path';
import React from 'react';
import { Circle } from '../components/BasicShapes';

describe('render', () => {
  it('return the path command when no children are present', () => {
    const p = new Path();
    const result = render({
      pathMethod: p.rect.bind(p, 100, 100, 100, 100),
      attributes: { stroke: 'red' },
      ex: 0,
      ey: 0,
      sx: 0,
      sy: 0
    });
    const p2 = new Path();
    expect(result.props.d).toEqual(p2.rect(100, 100, 100, 100).toString());
  });
  it('return the path commands for parent and children', () => {
    const p = new Path();
    const result = render({
      pathMethod: p.rect.bind(p, 100, 100, 100, 100),
      attributes: { stroke: 'red' },
      ex: 0,
      ey: 0,
      sx: 0,
      sy: 0,
      children: [React.createElement(Circle, { cx: 100, c: 100, size: 100 })]
    });
    expect(result.length).toEqual(2);
  });
});
