const attach = (childProps, sx, sy, ex, ey) => {
  const { attach = 'end', ...restOfChildProps } = childProps;
  if (attach === 'start') {
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

export default attach;
