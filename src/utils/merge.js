import React from 'react';
import attach from './attach';

const merge = (pathMethod, componentProps, ex, ey, sx, sy, children) => {
  if (!children) {
    const { inheritStart, ...restOfComponentProps } = componentProps;
    return pathMethod().toComponent(restOfComponentProps);
  } else {
    return [
      pathMethod().toComponent({ ...componentProps, key: -1 }),
      React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          key: i,
          ...attach(child.props, ex, ey, sx, sy)
        })
      )
    ];
  }
};

export default merge;
