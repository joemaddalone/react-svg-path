import React from 'react';

class Path extends React.Component {
  constructor() {
    super();
    this.pathData = [];
    this.attributes = {};

    return this;
  }

  static macro = (name, fn) => {
    this.prototype[name] = fn;
  };

  attr = (key, val) => {
    this.attributes[key] = val;
    return this;
  };

  fill = (val) => this.attr('fill', val);
  stroke = (val) => this.attr('stroke', val);
  strokeWidth = (val) => this.attr('strokeWidth', val);
  style = (val) => this.attr('style', val);
  /**
   * Move svg cursor to x, y.
   */
  m = (x, y) => this.moveTo(x, y, true);
  M = (x, y) => this.moveTo(x, y);
  moveTo = (x, y, relative = false) => {
    this.pathData.push(`${relative ? 'm' : 'M'}${x} ${y}`);
    return this;
  };

  /**
   * Draw straight line to x, y.
   */
  l = (x, y) => this.lineTo(x, y, true);
  L = (x, y) => this.lineTo(x, y);
  lineTo = (x, y, relative = false) => {
    this.pathData.push(`${relative ? 'l' : 'L'}${x} ${y}`);
    return this;
  };

  /**
   * Draw a horizontal line to x.
   */
  H = (x) => this.horizontalTo(x);
  h = (x) => this.horizontalTo(x, true);
  horizontalTo = (x, relative = false) => {
    this.pathData.push(`${relative ? 'h' : 'H'}${x}`);
    return this;
  };

  /**
   * Draw a vertical line to y.
   */
  V = (y) => this.verticalTo(y);
  v = (y) => this.verticalTo(y, true);
  verticalTo = (x, relative = false) => {
    this.pathData.push(`${relative ? 'v' : 'V'}${x}`);
    return this;
  };

  /**
   * Draw quadratic curve to ex, ey using cx,cy as the control point.
   */
  Q = (cx, cy, ex, ey) => this.qCurveTo(cx, cy, ex, ey);
  q = (cx, cy, ex, ey) => this.qCurveTo(cx, cy, ex, ey, true);
  qCurveTo = (cx, cy, ex, ey, relative = false) => {
    this.pathData.push(`${relative ? 'q' : 'Q'}${cx} ${cy}`);
    this.pathData.push(`${ex} ${ey}`);
    return this;
  };

  T = (ex, ey) => {
    this.pathData.push(`T ${ex} ${ey}`);
    return this;
  };

  t = (ex, ey) => {
    this.pathData.push(`t ${ex} ${ey}`);
    return this;
  };

  S = (cx, cy, ex, ey) => this.sCurveTo(cx, cy, ex, ey);
  s = (cx, cy, ex, ey) => this.sCurveTo(cx, cy, ex, ey, true);
  sCurveTo = (cx, cy, ex, ey, relative = false) => {
    this.pathData.push(`${relative ? 's' : 'S'}${cx} ${cy}`);
    this.pathData.push(`${ex} ${ey}`);
    return this;
  };

  C = (cx1, cy1, cx2, cy2, ex, ey) => this.cCurveTo(cx1, cy1, cx2, cy2, ex, ey);
  c = (cx1, cy1, cx2, cy2, ex, ey) =>
    this.cCurveTo(cx1, cy1, cx2, cy2, ex, ey, true);

  cCurveTo = (cx, cy, ex, ey, relative = false) => {
    this.pathData.push(`${relative ? 's' : 'S'}${cx} ${cy}`);
    this.pathData.push(`${ex} ${ey}`);
    return this;
  };

  A = (rx, ry, rotation, arc, sweep, ex, ey) =>
    this.arc(rx, ry, rotation, arc, sweep, ex, ey);

  a = (rx, ry, rotation, arc, sweep, ex, ey) =>
    this.arc(rx, ry, rotation, arc, sweep, ex, ey, true);

  arc = (rx, ry, rotation, arc, sweep, ex, ey, relative = false) => {
    this.pathData.push(
      `${
        relative ? 'a' : 'A'
      }${rx} ${ry} ${rotation} ${arc} ${sweep} ${ex} ${ey}`
    );
    return this;
  };

  down = (px) => this.v(px);
  up = (px) => this.v(px * -1);
  right = (px) => this.h(px);
  left = (px) => this.h(px * -1);

  /**
   * Close path.
   */
  close = () => {
    this.pathData.push('z');
    return this;
  };

  /**
   * Return pathData array.
   */
  toArray = () => this.pathData;

  /**
   * Return joined pathData array.
   */
  toString = () => this.pathData.join(' ');

  toComponent = (props) => (
    <path d={this.toString()} {...this.attributes} {...props} />
  );

  toElement = (key = Math.random()) => (
    <path key={key} d={this.toString()} {...this.attributes} />
  );
}

export default Path;
