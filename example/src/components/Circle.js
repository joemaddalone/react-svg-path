import Path from 'react-svg-path';

const Circle = ({ x, y, radius, fill, ...rest }) => {
  const path = new Path()
    .M(x, y)
    .m(-radius, 0)
    .a(radius, radius, 0, 1, 0, radius * 2, 0)
    .a(radius, radius, 0, 1, 0, -(radius * 2), 0)
    .style({ fill });
  return path.toComponent(rest);
};

export default Circle;
