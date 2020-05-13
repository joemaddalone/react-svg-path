import Path from 'react-svg-path';

const Square = ({ x, y, size, ...rest }) => {
  const path = new Path()
    .moveTo(x, y)
    .right(size)
    .down(size)
    .left(size)
    .close()
  return path.toComponent(rest);
};

export default Square;
