import React from 'react';

export const Group = ({ children, sx, sy, cx, cy, ex, ey, ...rest }) => {
  return (
    <g {...rest}>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          key: i,
          sx,
          sy,
          cx,
          cy,
          ex,
          ey,
          ...child.props
        })
      )}
    </g>
  );
};
