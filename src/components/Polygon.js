import Path from './Path';
import render from '../utils/render';

export const Polygon = ({ points, relative, children, ...rest }) => {
  const p = new Path();
  const pathMethod = p.polygon.bind(p, points, relative);
  const [sx, sy] = points[0];
  const [ex, ey] = points[points.length -1];
  return render(pathMethod, rest, sx, sy, ex, ey, children);
};

Polygon.path = ({ points, relative }) => new Path().polygon(points, relative);
