import Path from 'react-svg-path';

const Steps = ({ width, x, y, data, ...rest }) => {
  const path = new Path().moveTo(x, y);
  const radius = 3;

  const pointDistance = parseInt(width / data.length) - radius * 2;
  data.forEach((val, index, arr) => {
    const prev = index === 0 ? 0 : arr[index - 1];
    path[prev > val ? 'down' : 'up'](Math.abs(prev - val));
    path
      .right(pointDistance / 2)
      .a(radius, radius, 0, 1, 0, radius * 2, 0)
      .a(radius, radius, 0, 1, 0, -(radius * 2), 0)
      .m(radius * 2, 0);

    if (index !== arr.length - 1) {
      path.right(pointDistance / 2);
    }
  });
  return path.toComponent(rest);
};

export default Steps;
