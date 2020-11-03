const attach = (childProps, sx, sy, ex, ey) => {
  const { attach = 'end', ox = 0, oy = 0, ...restOfChildProps } = childProps;
  if (attach === 'start') {
    return {
      sx: sx + ox,
      sy: sy + oy,
      cx: sx + ox,
      cy: sy + oy,
      ...restOfChildProps
    };
  } else {
    return {
      sx: ex + ox,
      sy: ey + oy,
      cx: ex + ox,
      cy: ey + oy,
      ...restOfChildProps
    };
  }
};

export default attach;
