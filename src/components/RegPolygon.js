import Path from './Path';
import render from '../utils/render';

export const RegPolygon = ({
  size,
  sides,
  cx,
  cy,
  children,
  ...attributes
}) => {
  const p = new Path();
  const pathMethod = p.regPolygon.bind(p, size, sides, cx, cy);
  return render({
    pathMethod,
    attributes,
    ex: cx,
    ey: cy,
    sx: cx,
    sy: cy,
    children
  });
};

RegPolygon.path = ({ size, sides, cx, cy }) =>
  new Path().regPolygon(size, sides, cx, cy);
