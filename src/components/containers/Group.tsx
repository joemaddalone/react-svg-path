import React from 'react';
import { GroupProps } from '../../types/group';

export const Group: React.FC<GroupProps> = ({ children, sx, sy, cx, cy, ex, ey, ...attributes }) => {
  return (
    <g {...attributes}>
      {React.Children.map(children, (child, i) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
          key: i,
          sx,
          sy,
          cx,
          cy,
          ex,
          ey,
              ...child.props
            })
          : null
      )}
    </g>
  );
};
