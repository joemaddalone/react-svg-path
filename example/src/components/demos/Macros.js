import React from 'react';
import Path from 'react-svg-path';
import Svg from '../Svg';

Path.macro('square', function (x, y, size) {
  this.M(x, y).right(size).down(size).left(size).close();
  return this;
});

Path.macro('circle', function (x, y, radius) {
  this.M(x, y)
    .m(-radius, 0)
    .a(radius, radius, 0, 1, 0, radius * 2, 0)
    .a(radius, radius, 0, 1, 0, -(radius * 2), 0);
  return this;
});

Path.macro('triangle', function (x, y, w, h) {
  this.M(x, y)
    .l(-w/2, h)
    .right(w)
    .close();
  return this;
});

const Macros = () => {
  const macros = () => {
    const p = new Path();
    p.circle(50, 35, 20).square(75, 18, 35).triangle(135,18,40,35);
    return p.toString();
  };

  return (
    <Svg width={760} height={100}>
      <path
        shapeRendering='geometricPrecision'
        d={macros()}
        strokeWidth={1}
        stroke='#222'
      />
    </Svg>
  );
};

export default Macros;
