import React from 'react';

const determineStart = (childProps, sx, sy, ex, ey) => {
  const { inheritStart, ...restOfChildProps} = childProps;
  if (inheritStart) {
    return {
      sx,
      sy,
      cx: sx,
      cy: sy,
      ...restOfChildProps
    };
  } else {
    return {
      sx: ex,
      sy: ey,
      cx: ex,
      cy: ey,
      ...restOfChildProps
    };
  }
};

const render = (pathMethod, componentProps, ex, ey, sx, sy, children) => {
  if (!children) {
    const { inheritStart, ...restOfComponentProps} = componentProps;
    return pathMethod().toComponent(restOfComponentProps);
  } else {
    return [
      pathMethod().toComponent({ ...componentProps, key: -1 }),
      React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          key: i,
          ...determineStart(child.props, ex, ey, sx, sy),
        })
      )
    ];
  }
};

export default render;
