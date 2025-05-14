const commonNumberValidator = (value) => !isNaN(value);
const pointArrayValidator = (arr) => {
  try {
    if (
      !(arr instanceof Array) ||
      !arr.length ||
      arr.some((p) => !(p instanceof Array))
    ) {
      throw new Error('bad points, bad!.');
    }
    const result = arr.every((points) => points.every((p) => !isNaN(p)));
    return result;
  } catch (err) {
    return err.message;
  }
};

const nestedArrayValidator = (arr) => {
  try {
    if (
      !(arr instanceof Array) ||
      !arr.length ||
      arr.some((p) => !(p instanceof Array))
    ) {
      throw new Error('not a 2s array, bad!.');
    }
    const result = arr.every((a) => a instanceof Array);
    return result;
  } catch (err) {
    return err.message;
  }
};

const centeredShapeNestingProps = {
  ex: 'cx',
  ey: 'cy',
  sx: 'cx',
  sy: 'cy'
};

const commonNumber = {
  type: 'number',
  isRequired: true,
  validator: commonNumberValidator
};

const cx = {
  ...commonNumber,
  description: 'Center x coordinate of the shape.'
};

const cy = {
  ...commonNumber,
  description: 'Center x coordinate of the shape.'
};

export const shorthands = {
  sxy: {
    ...commonNumber,
    isRequired: false,
    default: null,
    k: 'sxy',
    p: ['sx', 'sy'],
    description:
      'If sx and sy are equal values you can use the shortcut "sxy" to set both at once.'
  },
  exy: {
    ...commonNumber,
    isRequired: false,
    default: null,
    k: 'exy',
    p: ['ex', 'ey'],
    description:
      'If ex and ey are equal values you can use the shortcut "exy" to set both at once.'
  },
  cxy: {
    ...commonNumber,
    isRequired: false,
    default: null,
    k: 'cxy',
    p: ['cx', 'cy'],
    description:
      'If cx and cy are equal values you can use the shortcut "cxy" to set both at once.'
  },
  rxy: {
    ...commonNumber,
    isRequired: false,
    default: null,
    k: 'rxy',
    p: ['rx', 'ry'],
    description:
      'If rx and ry are equal values you can use the shortcut "rxy" to set both at once.'
  }
};

const centerEnd = {
  default: true,
  type: 'boolean',
  isRequired: false,
  description:
    'Determines whether cursor should return to cx & cy as a last step.'
};

const docs = {
  circle: {
    category: 'basicShapes',
    Component: 'Circle',
    command: 'circle',
    args: ['size', 'cx', 'cy', 'centerEnd'],
    description:
      'Circle is drawn from center points (cx & cy). The cursor is then moved to the center points.',
    props: {
      size: {
        ...commonNumber,
        description: 'Circumference of the Circle.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  ellipse: {
    category: 'basicShapes',
    Component: 'Ellipse',
    command: 'ellipse',
    args: ['width', 'height', 'cx', 'cy', 'centerEnd'],
    description:
      'Ellipse is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      width: {
        ...commonNumber,
        description: 'Width of the Ellipse.'
      },
      height: {
        ...commonNumber,
        description: 'Height of the Ellipse.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  isocube: {
    category: 'basicShapes',
    Component: 'Isocube',
    command: 'isocube',
    args: ['size', 'cx', 'cy', 'centerEnd'],
    description:
      'Isocube is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      size: {
        ...commonNumber,
        description: 'Equal size of the Isocube.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  kite: {
    category: 'basicShapes',
    Component: 'Kite',
    command: 'kite',
    args: ['width', 'height', 'dh', 'cx', 'cy', 'centerEnd'],
    description:
      '.kite is drawn from center point (cx & cy). dh = position of the left & right points from the top of the shape. The cursor is then moved to the center point.',
    props: {
      width: {
        ...commonNumber,
        description: 'Width of the Kite.'
      },
      height: {
        ...commonNumber,
        description: 'Height of the Kite.'
      },
      dh: {
        ...commonNumber,
        description:
          'Vertical position of the left and right points from the top.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  lens: {
    category: 'basicShapes',
    Component: 'Lens',
    command: 'lens',
    args: ['width', 'height', 'cx', 'cy', 'centerEnd'],
    description:
      'Lens is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      width: {
        ...commonNumber,
        description: 'Width of the Lens.'
      },
      height: {
        ...commonNumber,
        description: 'Height of the Lens.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  omino: {
    category: 'basicShapes',
    Component: 'Omino',
    command: 'omino',
    args: ['size', 'shape', 'sx', 'sy', 'lined'],
    description:
      'Omino is drawn based on the positive values positioned in an 2d array. Think Tetris pieces.',
    props: {
      size: {
        ...commonNumber,
        description: 'Size of the squares.'
      },
      shape: {
        type: '2d-array',
        isRequired: true,
        validator: nestedArrayValidator,
        description: '2d array of the shape.'
      },
      sx: {
        ...commonNumber,
        description: 'Starting x coordinate for left.'
      },
      sy: {
        ...commonNumber,
        description: 'Starting y coordinate for top.'
      },
      lined: {
        default: false,
        type: 'boolean',
        isRequired: false,
        description: 'Draw inner lines or not.'
      }
    },
    shorthands: [shorthands.sxy],
    nestingProps: ({ sx, sy }) => {
      return { ex: sx, ey: sy, sx, sy };
    }
  },
  polygon: {
    category: 'basicShapes',
    Component: 'Polygon',
    command: 'polygon',
    args: ['points'],
    description:
      'Polygon accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the first point - closing the shape.',
    props: {
      points: {
        type: 'point-array',
        pointsLength: 2,
        isRequired: true,
        validator: pointArrayValidator,
        description: 'x, y, points of the polygon.'
      }
    },
    nestingProps: ({ points }) => {
      const [sx, sy] = points[0];
      const [ex, ey] = points[points.length - 1];
      return { ex: sx, ey: sy, sx: ex, sy: ey };
    }
  },
  polygram: {
    category: 'basicShapes',
    Component: 'Polygram',
    command: 'polygram',
    args: ['size', 'points', 'cx', 'cy', 'vertexSkip', 'centerEnd'],
    description:
      'Polygram is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.  Skipping a vertex is what makes a polygram appear as intersecting lines, a vertexSkip of 1 will result in a regular polygon.',
    props: {
      size: {
        ...commonNumber,
        description: 'Size of the underlying polygon.'
      },
      points: {
        ...commonNumber,
        description: 'Number of points to create.'
      },
      cx,
      cy,
      vertexSkip: {
        ...commonNumber,
        isRequired: false,
        default: 2,
        description:
          'Integer representing which vertex to go to next relative to current.'
      },
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  polyline: {
    category: 'basicShapes',
    Component: 'Polyline',
    command: 'polyline',
    args: ['points', 'relative'],
    description:
      'Polyline accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the last.  points can be absolute or relative.',
    props: {
      points: {
        type: 'point-array',
        pointsLength: 2,
        isRequired: true,
        validator: pointArrayValidator,
        description: 'x, y, points of the Polyline.'
      },
      relative: {
        type: 'boolean',
        isRequired: false,
        default: false,
        description: 'If set to true all points will be relative.'
      }
    },
    nestingProps: ({ points }) => {
      const [sx, sy] = points[0];
      const [ex, ey] = points[points.length - 1];
      return { ex: sx, ey: sy, sx: ex, sy: ey };
    }
  },
  line: {
    category: 'basicShapes',
    Component: 'Line',
    command: 'lineTo',
    args: ['ex', 'ey', 'relative'],
    preCommand: 'moveTo',
    preArgs: ['sx', 'sy'],
    description:
      'Line is drawn from starting points (sx & sy) to ending points (ex & ey). sx (starting x) & sy (starting y) will always be absolutely positioned, however with relative=true the ex and ey points can relative to sx & sy.',
    props: {
      sx: {
        ...commonNumber,
        description: 'Starting x coordinate for the Line.'
      },
      sy: {
        ...commonNumber,
        description: 'Starting y coordinate for the Line.'
      },
      ex: {
        ...commonNumber,
        description: 'Ending x coordinate for the Line.'
      },
      ey: {
        ...commonNumber,
        description: 'Ending y coordinate for the Line.'
      },
      relative: {
        type: 'boolean',
        default: false,
        isRequired: true,
        description: 'If set to true ex & ey will become relative to sx & sy.'
      }
    },
    nestingProps: ({ sx, sy, ex, ey }) => {
      return { ex: sx, ey: sy, sx: ex, sy: ey };
    },
    shorthands: [shorthands.exy, shorthands.sxy]
  },
  radialLines: {
    category: 'basicShapes',
    Component: 'RadialLines',
    command: 'radialLines',
    args: ['outerSize', 'innerSize', 'points', 'cx', 'cy', 'centerEnd'],
    description:
      'RadialLines is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.',
    props: {
      outerSize: {
        ...commonNumber,
        description: 'Circumference of the outer circle.'
      },
      innerSize: {
        ...commonNumber,
        description: 'Circumference of the inner circle.'
      },
      points: {
        ...commonNumber,
        description: 'Number of lines to draw.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  rect: {
    category: 'basicShapes',
    Component: 'Rect',
    command: 'rect',
    args: ['width', 'height', 'cx', 'cy', 'centerEnd'],
    description:
      'Rect is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      width: {
        ...commonNumber,
        description: 'Width of the Rect.'
      },
      height: {
        ...commonNumber,
        description: 'Height of the Rect.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  roundedRect: {
    category: 'basicShapes',
    Component: 'RoundedRect',
    command: 'roundedRect',
    args: ['width', 'height', 'radius', 'cx', 'cy', 'centerEnd'],
    description:
      'Rect is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      width: {
        ...commonNumber,
        description: 'Width of the Rect.'
      },
      height: {
        ...commonNumber,
        description: 'Height of the Rect.'
      },
      radius: {
        ...commonNumber,
        description: 'Radius for the corners.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  regPolygon: {
    category: 'basicShapes',
    Component: 'RegPolygon',
    command: 'regPolygon',
    args: ['size', 'sides', 'cx', 'cy', 'centerEnd'],
    description:
      'RegPolygon is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.',
    props: {
      size: {
        ...commonNumber,
        description: 'Size of the RegPolygon.'
      },
      sides: {
        ...commonNumber,
        description: 'Number of sides of the RegPolygon.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  sector: {
    category: 'basicShapes',
    Component: 'Sector',
    command: 'sector',
    args: ['cx', 'cy', 'size', 'startAngle', 'endAngle', 'centerEnd'],
    description:
      'Sector is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      cx,
      cy,
      size: {
        ...commonNumber,
        description: 'Circumference of the Sector.'
      },
      startAngle: {
        ...commonNumber,
        description: 'Start angle of the Sector.  0 = top center.'
      },
      endAngle: {
        ...commonNumber,
        description: 'End angle of the Sector.  0 = top center.'
      },
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  segment: {
    category: 'basicShapes',
    Component: 'Segment',
    command: 'segment',
    args: ['cx', 'cy', 'size', 'startAngle', 'endAngle', 'centerEnd'],
    description:
      'Segment is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      cx,
      cy,
      size: {
        ...commonNumber,
        description: 'Circumference of the Segment.'
      },
      startAngle: {
        ...commonNumber,
        description: 'Start angle of the Segment.  0 = top center.'
      },
      endAngle: {
        ...commonNumber,
        description: 'End angle of the Segment.  0 = top center.'
      },
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  square: {
    category: 'basicShapes',
    Component: 'Square',
    command: 'square',
    args: ['size', 'cx', 'cy', 'centerEnd'],
    description:
      'Square is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      size: {
        ...commonNumber,
        description: 'Width &  height of the Square.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  roundedSquare: {
    category: 'basicShapes',
    Component: 'RoundedSquare',
    command: 'roundedSquare',
    args: ['size', 'radius', 'cx', 'cy', 'centerEnd'],
    description:
      'RoundedSquare is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      size: {
        ...commonNumber,
        description: 'Width &  height of the Square.'
      },
      radius: {
        ...commonNumber,
        description: 'Radius for the corners.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  star: {
    category: 'basicShapes',
    Component: 'Star',
    command: 'star',
    args: ['outerSize', 'innerSize', 'points', 'cx', 'cy', 'centerEnd'],
    description:
      'Star is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.',
    props: {
      outerSize: {
        ...commonNumber,
        description: 'The outer circumference where points will reach.'
      },
      innerSize: {
        ...commonNumber,
        description: 'The inner circumference where points will end.'
      },
      points: {
        ...commonNumber,
        description: 'Number of points for the Star.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  triangle: {
    category: 'basicShapes',
    Component: 'Triangle',
    command: 'triangle',
    args: ['size', 'cx', 'cy', 'centerEnd'],
    description:
      'Triangle draws an equilateral triangle from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      size: {
        ...commonNumber,
        description: 'Size of the Tirangle.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  symX: {
    category: 'basicShapes',
    Component: 'SymX',
    command: 'symX',
    args: ['width', 'height', 'cx', 'cy', 'centerEnd'],
    description:
      'SymX draws an X shape from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      width: {
        ...commonNumber,
        description: 'Width of the X.'
      },
      height: {
        ...commonNumber,
        description: 'Height of the X.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  symV: {
    category: 'basicShapes',
    Component: 'SymV',
    command: 'symV',
    args: ['width', 'height', 'cx', 'cy', 'centerEnd'],
    description:
      'SymV draws a V shape from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      width: {
        ...commonNumber,
        description: 'Width of the V.'
      },
      height: {
        ...commonNumber,
        description: 'Height of the V.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  symI: {
    category: 'basicShapes',
    Component: 'SymI',
    command: 'symI',
    args: ['width', 'height', 'cx', 'cy', 'centerEnd'],
    description:
      'SymI draws an I shape from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      width: {
        ...commonNumber,
        description: 'Width of the I.'
      },
      height: {
        ...commonNumber,
        description: 'Height of the I.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  symH: {
    category: 'basicShapes',
    Component: 'SymH',
    command: 'symH',
    args: ['width', 'height', 'cx', 'cy', 'centerEnd'],
    description:
      'SymH draws an H shape from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      width: {
        ...commonNumber,
        description: 'Width of the H.'
      },
      height: {
        ...commonNumber,
        description: 'Height of the H.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  cross: {
    category: 'basicShapes',
    Component: 'Cross',
    command: 'cross',
    args: ['width', 'height', 'cx', 'cy', 'centerEnd'],
    description:
      'Cross draws an "cross" shape from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      width: {
        ...commonNumber,
        description: 'Width of the Cross.'
      },
      height: {
        ...commonNumber,
        description: 'Height of the Cross.'
      },
      cx,
      cy,
      centerEnd
    },
    nestingProps: centeredShapeNestingProps,
    shorthands: [shorthands.cxy]
  },
  arc: {
    category: 'curves',
    Component: 'Arc',
    command: 'arc',
    args: ['rx', 'ry', 'rotation', 'arc', 'sweep', 'ex', 'ey', 'relative'],
    preCommand: 'moveTo',
    preArgs: ['sx', 'sy'],
    description: 'An Arc segment draws a segment of an ellipse.',
    props: {
      sx: {
        ...commonNumber,
        description: 'Starting x coordinate for the Arc.'
      },
      sy: {
        ...commonNumber,
        description: 'Starting y coordinate for the Arc.'
      },
      rx: {
        ...commonNumber,
        description: 'Width of the underlying ellipse of the Arc.'
      },
      ry: {
        ...commonNumber,
        description: 'Height of the underlying ellipse of the Arc.'
      },
      rotation: {
        type: 'number',
        validator: commonNumberValidator,
        default: 0,
        isRequired: false,
        description: 'Rotation of the underlying ellipse of the Arc.'
      },
      arc: {
        type: 'number',
        validator: commonNumberValidator,
        default: 0,
        isRequired: false,
        description:
          'Large arc flag: this says whether to follow the larger or smaller part of the underlying ellipse.'
      },
      sweep: {
        type: 'number',
        validator: commonNumberValidator,
        default: 0,
        isRequired: false,
        description:
          'Sweep flag: think of this as direction flag, follow a clockwise or counterclockwise path along the underlying ellipse.'
      },
      ex: {
        ...commonNumber,
        description: 'Ending x coordinate for the Arc.'
      },
      ey: {
        ...commonNumber,
        description: 'Ending y coordinate for the Arc.'
      },
      relative: {
        type: 'boolean',
        default: false,
        isRequired: false,
        description:
          'If set to true all points after sx & sy will become relative to sx & sy.'
      }
    },
    nestingProps: ({ sx, sy, ex, ey }) => {
      return { ex: sx, ey: sy, sx: ex, sy: ey };
    },
    shorthands: [shorthands.exy, shorthands.sxy, shorthands.rxy]
  },
  cubic: {
    category: 'curves',
    Component: 'Cubic',
    command: 'cCurve',
    args: ['cx1', 'cy1', 'cx2', 'cy2', 'ex', 'ey'],
    preCommand: 'moveTo',
    preArgs: ['sx', 'sy'],
    postCommand: 's',
    description:
      'Cubic is drawn from an sx and sy to an ex and ey with two control points (cx1+cy1 & cx2+cy2).',
    props: {
      sx: {
        ...commonNumber,
        description: 'Starting x coordinate for the Cubic.'
      },
      sy: {
        ...commonNumber,
        description: 'Starting y coordinate for the Cubic.'
      },
      cx1: {
        ...commonNumber,
        description: 'x coordinate for control point 1.'
      },
      cy1: {
        ...commonNumber,
        description: 'y coordinate for control point 1.'
      },
      cx2: {
        ...commonNumber,
        description: 'x coordinate for control point 2.'
      },
      cy2: {
        ...commonNumber,
        description: 'y coordinate for control point 2.'
      },
      ex: {
        ...commonNumber,
        description: 'Ending x coordinate for the Cubic.'
      },
      ey: {
        ...commonNumber,
        description: 'Ending y coordinate for the Cubic.'
      },
      S: {
        type: 'point-array',
        pointsLength: 4,
        validator: pointArrayValidator,
        isRequired: false,
        description:
          'Optionally String together multiple Cubic wit an array consisting of 2 or more control points.'
      },
      s: {
        type: 'point-array',
        pointsLength: 4,
        validator: pointArrayValidator,
        isRequired: false,
        description:
          'Optional relative "smoooth curve" array consisting of 2 or more control points.'
      },
      relative: {
        type: 'boolean',
        default: false,
        isRequired: false,
        description:
          'If set to true all points after sx & sy will become relative to sx & sy.'
      }
    },
    nestingProps: ({ sx, sy, ex, ey, S }) => {
      let endX = ex;
      let endY = ey;
      if (S && S.length) {
        endX = S[S.length - 1][0];
        endY = S[S.length - 1][1];
      }
      return { ex: sx, ey: sy, sx: endX, sy: endY };
    },
    shorthands: [shorthands.exy, shorthands.sxy]
  },
  quad: {
    category: 'curves',
    Component: 'Quad',
    command: 'qCurve',
    args: ['cx', 'cy', 'ex', 'ey'],
    preCommand: 'moveTo',
    preArgs: ['sx', 'sy'],
    postCommand: 't',
    description:
      'Quad is drawn from an sx and sy to an ex and ey with one control points (cx & cy).',
    props: {
      sx: {
        ...commonNumber,
        description: 'Starting x coordinate for the Quad.'
      },
      sy: {
        ...commonNumber,
        description: 'Starting y coordinate for the Quad.'
      },
      cx: {
        ...commonNumber,
        description: 'x coordinate for the control point.'
      },
      cy: {
        ...commonNumber,
        description: 'y coordinate for the control point.'
      },
      ex: {
        ...commonNumber,
        description: 'Ending x coordinate for the Quad.'
      },
      ey: {
        ...commonNumber,
        description: 'Ending y coordinate for the Quad.'
      },
      T: {
        type: 'point-array',
        pointsLength: 2,
        validator: pointArrayValidator,
        isRequired: false,
        description: 'String together multiple Quad curves.'
      },
      t: {
        type: 'point-array',
        pointsLength: 2,
        validator: pointArrayValidator,
        isRequired: false,
        description:
          'String together multiple Quad curves where coordinates are relative.'
      },
      relative: {
        type: 'boolean',
        default: false,
        isRequired: false,
        description:
          'If set to true all points after sx & sy will become relative to sx & sy.'
      }
    },
    nestingProps: ({ sx, sy, ex, ey, T }) => {
      let endX = ex;
      let endY = ey;
      if (T && T.length) {
        endX = T[T.length - 1][0];
        endY = T[T.length - 1][1];
      }
      return { ex: sx, ey: sy, sx: endX, sy: endY };
    },
    shorthands: [shorthands.exy, shorthands.sxy, shorthands.cxy]
  }
};

const buildBasicShapes = () =>
  Object.keys(docs)
    .filter((k) => docs[k].category === 'basicShapes')
    .reduce((accum, cur) => ({ ...accum, [cur]: docs[cur] }), {});

const buildCurves = () =>
  Object.keys(docs)
    .filter((k) => docs[k].category === 'curves')
    .reduce((accum, cur) => ({ ...accum, [cur]: docs[cur] }), {});

export const basicShapes = buildBasicShapes();
export const curves = buildCurves();

export default docs;
