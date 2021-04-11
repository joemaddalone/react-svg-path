import React from 'react';
import attach from './attach';
import cleanAttributes from './cleanAttributes';

const render = ({ pathMethod, attributes, ex, ey, sx, sy, children }) => {
  // eslint-disable-next-line no-unused-vars
  const { merge, attach: attachProp, ...restOfComponentProps } = attributes;
  const to = merge ? 'toString' : 'toComponent';
  const cleanComponentProps = cleanAttributes(restOfComponentProps);
  if (!children) {
    const response = pathMethod ? pathMethod()[to](cleanComponentProps) : null;
    return response;
  } else {
    return [
      pathMethod ? pathMethod()[to]({ ...cleanComponentProps, key: -1 }) : null,
      React.Children.map(
        children,
        (child, i) =>
          child &&
          React.cloneElement(child, {
            key: i,
            merge,
            ...attach(child.props, ex, ey, sx, sy)
          })
      ).filter((x) => x)
    ];
  }
};

export default render;
