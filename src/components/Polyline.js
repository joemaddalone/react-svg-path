// import Path from './Path';
// import render from '../utils/render';

// export const Polyline = ({ points, relative, children, ...attributes }) => {
//   const p = new Path();
//   const pathMethod = p.polyline.bind(p, points, relative);
//   const [sx, sy] = points[0];
//   const [ex, ey] = points[points.length - 1];
//   return render({
//     pathMethod,
//     attributes,
//     ex: sx,
//     ey: sy,
//     sx: ex,
//     sy: ey,
//     children
//   });
// };

import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Polyline = (props) => {
  const doc = docs.basicShapes.polyline;
  return createSimpleComponent(doc, props);
};
