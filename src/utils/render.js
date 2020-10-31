import React from 'react';
import attach from './attach';

const render = ({ pathMethod, attributes, ex, ey, sx, sy, children }) => {
  if (!children) {
    const { inheritStart, ...restOfComponentProps } = attributes;
    return pathMethod().toComponent(restOfComponentProps);
  } else {
    return [
      pathMethod().toComponent({ ...attributes, key: -1 }),
      React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          key: i,
          ...attach(child.props, ex, ey, sx, sy)
        })
      )
    ];
  }
};

export default render;
