const commonNumberValidator = (value) => !isNaN(value);

const centeredShapeNestingProps = {
  ex: 'cx',
  ey: 'cy',
  sx: 'cx',
  sy: 'cy'
};

const docs = {
  basicShapes: {
    circle: {
      Component: 'Circle',
      command: 'circle',
      args: ['size', 'cx', 'cy'],
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
        }
      },
      nestingProps: centeredShapeNestingProps
    },
    ellipse: {
      Component: 'Ellipse',
      command: 'ellipse',
      args: ['width', 'height', 'cx', 'cy'],
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
        }
      },
      nestingProps: centeredShapeNestingProps
    },
    polygon: {
      Component: 'Polygon',
      command: 'polygon',
      args: ['points'],
      description:
        'Polygon accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the first point - closing the shape.',
      props: { points: { type: 'point-array' } }
    },
    polygram: {
      Component: 'Polygram',
      command: 'polygram',
      args: ['size', 'points', 'cx', 'cy', 'vertexSkip'],
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
          isRequired: true,
          validator: commonNumberValidator,
          default: 2
        }
      },
      nestingProps: centeredShapeNestingProps
    },
    polyline: {
      Component: 'Polyline',
      command: 'polyline',
      args: ['points', 'relative'],
      description:
        'Polyline accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the last.  points can be absolute or relative.',
      props: { points: { type: 'point-array' }, relative: { type: 'boolean' } }
    },
    line: {
      Component: 'Line',
      command: 'lineTo',
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
        relative: { type: 'boolean' }
      }
    },
    radialLines: {
      Component: 'RadialLines',
      command: 'radialLines',
      args: ['outerSize', 'innerSize', 'points', 'cx', 'cy'],
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
        }
      },
      nestingProps: centeredShapeNestingProps
    },
    rect: {
      Component: 'Rect',
      command: 'rect',
      args: ['width', 'height', 'cx', 'cy'],
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
        }
      },
      nestingProps: centeredShapeNestingProps
    },
    regPolygon: {
      Component: 'RegPolygon',
      command: 'regPolygon',
      args: ['size', 'sides', 'cx', 'cy'],
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
        }
      },
      nestingProps: centeredShapeNestingProps
    },
    sector: {
      Component: 'Sector',
      command: 'sector',
      args: ['cx', 'cy', 'size', 'startAngle', 'endAngle'],
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
        }
      },
      nestingProps: centeredShapeNestingProps
    },
    segment: {
      Component: 'Segment',
      command: 'segment',
      args: ['cx', 'cy', 'size', 'startAngle', 'endAngle'],
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
        }
      },
      nestingProps: centeredShapeNestingProps
    },
    square: {
      Component: 'Square',
      command: 'square',
      args: ['size', 'cx', 'cy'],
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
        }
      },
      nestingProps: centeredShapeNestingProps
    },
    star: {
      Component: 'Star',
      command: 'star',
      args: ['outerSize', 'innerSize', 'points', 'cx', 'cy'],
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
        }
      },
      nestingProps: centeredShapeNestingProps
    },
    triangle: {
      Component: 'Triangle',
      command: 'triangle',
      args: ['size', 'cx', 'cy'],
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
        }
      },
      nestingProps: centeredShapeNestingProps
    }
  },
  curves: {
    arc: {
      Component: 'Arc',
      command: 'arc',
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
          isRequired: true,
          validator: commonNumberValidator
        },
        arc: {
          type: 'number',
          isRequired: true,
          validator: commonNumberValidator
        },
        sweep: {
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
        }
      }
    },
    cubic: {
      Component: 'Cubic',
      command: 'cCurveTo',
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
        S: { type: 'point-array' },
        s: { type: 'point-array' }
      }
    },
    quad: {
      Component: 'Quad',
      command: 'qCurveTo',
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
        T: { type: 'point-array' },
        t: { type: 'point-array' }
      }
    }
  }
};

export default docs;
