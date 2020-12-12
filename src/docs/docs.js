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

const centeredShapeNestingProps = {
  ex: 'cx',
  ey: 'cy',
  sx: 'cx',
  sy: 'cy'
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
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      centerEnd: {
        default: true,
        type: 'boolean',
        isRequired: false
      }
    },
    nestingProps: centeredShapeNestingProps
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
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      height: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      centerEnd: {
        default: true,
        type: 'boolean',
        isRequired: false
      }
    },
    nestingProps: centeredShapeNestingProps
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
        validator: pointArrayValidator
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
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      points: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      vertexSkip: {
        type: 'number',
        validator: commonNumberValidator,
        default: 2
      },
      centerEnd: {
        default: true,
        type: 'boolean',
        isRequired: false
      }
    },
    nestingProps: centeredShapeNestingProps
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
        validator: pointArrayValidator
      },
      relative: { type: 'boolean' }
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
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      sy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      ex: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      ey: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      relative: { type: 'boolean', default: false }
    },
    nestingProps: ({ sx, sy, ex, ey }) => {
      return { ex: sx, ey: sy, sx: ex, sy: ey };
    }
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
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      innerSize: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      points: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      centerEnd: {
        default: true,
        type: 'boolean',
        isRequired: false
      }
    },
    nestingProps: centeredShapeNestingProps
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
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      height: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      centerEnd: {
        default: true,
        type: 'boolean',
        isRequired: false
      }
    },
    nestingProps: centeredShapeNestingProps
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
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      sides: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      centerEnd: {
        default: true,
        type: 'boolean',
        isRequired: false
      }
    },
    nestingProps: centeredShapeNestingProps
  },
  sector: {
    category: 'basicShapes',
    Component: 'Sector',
    command: 'sector',
    args: ['cx', 'cy', 'size', 'startAngle', 'endAngle', 'centerEnd'],
    description:
      'Sector is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      cx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      size: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      startAngle: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      endAngle: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      centerEnd: {
        default: true,
        type: 'boolean',
        isRequired: false
      }
    },
    nestingProps: centeredShapeNestingProps
  },
  segment: {
    category: 'basicShapes',
    Component: 'Segment',
    command: 'segment',
    args: ['cx', 'cy', 'size', 'startAngle', 'endAngle', 'centerEnd'],
    description:
      'Segment is drawn from center point (cx & cy). The cursor is then moved to the center point.',
    props: {
      cx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      size: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      startAngle: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      endAngle: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      centerEnd: {
        default: true,
        type: 'boolean',
        isRequired: false
      }
    },
    nestingProps: centeredShapeNestingProps
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
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      centerEnd: {
        default: true,
        type: 'boolean',
        isRequired: false
      }
    },
    nestingProps: centeredShapeNestingProps
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
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      innerSize: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      points: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      centerEnd: {
        default: true,
        type: 'boolean',
        isRequired: false
      }
    },
    nestingProps: centeredShapeNestingProps
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
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      centerEnd: {
        default: true,
        type: 'boolean',
        isRequired: false
      }
    },
    nestingProps: centeredShapeNestingProps
  },
  arc: {
    category: 'curves',
    Component: 'Arc',
    command: 'arc',
    args: ['rx', 'ry', 'rotation', 'arc', 'sweep', 'ex', 'ey', 'relative'],
    preCommand: 'moveTo',
    preArgs: ['sx', 'sy'],
    description: 'Arc is drawn...',
    props: {
      sx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      sy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      rx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      ry: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      rotation: {
        type: 'number',
        validator: commonNumberValidator,
        default: 0
      },
      arc: {
        type: 'number',
        validator: commonNumberValidator,
        default: 0
      },
      sweep: {
        type: 'number',
        validator: commonNumberValidator,
        default: 0
      },
      ex: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      ey: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      relative: { type: 'boolean', default: false }
    },
    nestingProps: ({ sx, sy, ex, ey }) => {
      return { ex: sx, ey: sy, sx: ex, sy: ey };
    }
  },
  cubic: {
    category: 'curves',
    Component: 'Cubic',
    command: 'cCurve',
    args: ['cx1', 'cy1', 'cx2', 'cy2', 'ex', 'ey'],
    preCommand: 'moveTo',
    preArgs: ['sx', 'sy'],
    postCommand: 's',
    description: 'Cubic is drawn...',
    props: {
      sx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      sy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cx1: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cy1: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cx2: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cy2: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      ex: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      ey: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      S: {
        type: 'point-array',
        pointsLength: 4,
        validator: pointArrayValidator
      },
      s: {
        type: 'point-array',
        pointsLength: 4,
        validator: pointArrayValidator
      },
      relative: { type: 'boolean', default: false }
    },
    nestingProps: ({ sx, sy, ex, ey, S }) => {
      let endX = ex;
      let endY = ey;
      if (S && S.length) {
        endX = S[S.length - 1][0];
        endY = S[S.length - 1][1];
      }
      return { ex: sx, ey: sy, sx: endX, sy: endY };
    }
  },
  quad: {
    category: 'curves',
    Component: 'Quad',
    command: 'qCurve',
    args: ['cx', 'cy', 'ex', 'ey'],
    preCommand: 'moveTo',
    preArgs: ['sx', 'sy'],
    postCommand: 't',
    description: 'Quad is drawn...',
    props: {
      sx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      sy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cx: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      cy: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      ex: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      ey: {
        type: 'number',
        isRequired: true,
        validator: commonNumberValidator
      },
      T: {
        type: 'point-array',
        pointsLength: 2,
        validator: pointArrayValidator
      },
      t: {
        type: 'point-array',
        pointsLength: 2,
        validator: pointArrayValidator
      },
      relative: { type: 'boolean', default: false }
    },
    nestingProps: ({ sx, sy, ex, ey, T }) => {
      let endX = ex;
      let endY = ey;
      if (T && T.length) {
        endX = T[T.length - 1][0];
        endY = T[T.length - 1][1];
      }
      return { ex: sx, ey: sy, sx: endX, sy: endY };
    }
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
