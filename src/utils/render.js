import React from 'react';

const render = (pathMethod, componentArgs, sx, sy, children) => {
  if (!children) {
    return pathMethod().toComponent(componentArgs);
  } else {
    return [
      pathMethod().toComponent({ ...componentArgs, key: -1 }),
      React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          key: i,
          sx,
          sy,
          cx: sx,
          cy: sy,
          ...child.props // the breakout props if needed
        })
      )
    ];
  }
};

export default render;
