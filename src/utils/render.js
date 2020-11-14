import React from 'react';
import attach from './attach';

const render = ({ pathMethod, attributes, ex, ey, sx, sy, children }) => {
  // eslint-disable-next-line no-unused-vars
  const { merge, attach: attachProp, ...restOfComponentProps } = attributes;
  const to = merge ? 'toString' : 'toComponent';
  if (!children) {
    return pathMethod()[to](restOfComponentProps);
  } else {
    return [
      pathMethod()[to]({ ...restOfComponentProps, key: -1 }),
      React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          key: i,
          merge,
          ...attach(child.props, ex, ey, sx, sy)
        })
      )
    ];
  }
};

export default render;
