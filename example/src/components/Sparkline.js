import Path from 'react-svg-path';

const Sparkline = ({ x, y, width, data }) => {
  const path = new Path().moveTo(x, y).stroke('purple').strokeWidth(2);
  const pointDistance = parseInt(width / data.length);
  data.forEach((val, index, arr) => {
    if (index !== 0) {
      const prev = arr[index - 1];
      path.l(pointDistance, prev - val);
    } else {
      path.l(0, -val);
    }
  });
  return path.toElement();
};

export default Sparkline;
