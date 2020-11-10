const basicSvgDimensions = {
  w: 170,
  h: 150
};
export default {
  basicShapes: {
    circle: {
      Component: 'Circle',
      args: 'size, cx, cy',
      description:
      'Circle is drawn from center points (cx & cy). The cursor is then moved to the center points.',
      props: {
        size: { type: 'number' },
        cx: { type: 'number' },
        cy: { type: 'number' }
      },
      demos: [
        {
          svgDimensions: {...basicSvgDimensions},
          size: 95,
          cx: basicSvgDimensions.w/2,
          cy: basicSvgDimensions.h/2
        }
      ]
    },
    ellipse: {
      Component: 'Ellipse',
      args: 'width, height, cx, cy',
      description:
        'Ellipse is drawn from center point (cx & cy). The cursor is then moved to the center point.',
      props: {
        width: { type: 'number' },
        height: { type: 'number' },
        cx: { type: 'number' },
        cy: { type: 'number' }
      },
      demos: [
        {
          svgDimensions: {...basicSvgDimensions},
          width: 150,
          height: 75,
          cx: basicSvgDimensions.w/2,
          cy: basicSvgDimensions.h/2
        }
      ]
    },
    polygon: {
      Component: 'Polygon',
      args: '[points]',
      description:
        'Polygon accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the first point - closing the shape.',
      props: { points: { type: 'array' } },
      demos: [
        {
          svgDimensions: {...basicSvgDimensions},
          points: [
            [10, 60],
            [40, 0],
            [70, 60],
            [40, 120]
          ]
        }
      ]
    },
    polygram: {
      Component: 'Polygram',
      args: 'size, points, cx, cy, vertexSkip = 2',
      description:
        'Polygram is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.  Skipping a vertex is what makes a polygram appear as intersecting lines, a vertexSkip of 1 will result in a regular polygon.',
      props: {
        size: { type: 'number' },
        points: { type: 'number' },
        cx: { type: 'number' },
        cy: { type: 'number' },
        vertexSkip: { type: 'number', default: 2 }
      },
      demos: [
        {
          svgDimensions: {...basicSvgDimensions},
          size: 120,
          points: 5,
          cx: basicSvgDimensions.w/2,
          cy: basicSvgDimensions.h/2,
          vertexSkip: 2
        }
      ]
    },
    polyline: {
      Component: 'Polyline',
      args: '[points], relative = false',
      description:
        'Polyline accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the last.  points can be absolute or relative.',
      props: { points: { type: 'array' }, relative: { type: 'boolean' } },
      demos: [
        {
          svgDimensions: {...basicSvgDimensions},
          points: [
            [10, 60],
            [40, 0],
            [70, 60],
            [40, 120]
          ]
        }
      ]
    },
    line: {
      Component: 'Line',
      description:
        'Line is drawn from starting points (sx & sy) to ending points (ex & ey). sx (starting x) & sy (starting y) will always be absolutely positioned, however with relative=true the ex and ey points can relative to sx & sy.',
      props: {
        sx: { type: 'number' },
        sy: { type: 'number' },
        ex: { type: 'number' },
        ey: { type: 'number' },
        relative: { type: 'boolean' }
      },
      demos: [
        {
          svgDimensions: {...basicSvgDimensions},
          sx: 10,
          sy: 10,
          ex: 50,
          ey: 50
        }
      ]
    },
    radialLines: {
      Component: 'RadialLines',
      args: 'outerSize, innerSize, points, cx, cy',
      description:
        'RadialLines is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.',
      props: {
        outerSize: { type: 'number' },
        innerSize: { type: 'number' },
        points: { type: 'number' },
        cx: { type: 'number' },
        cy: { type: 'number' }
      },
      demos: [
        {
          svgDimensions: {...basicSvgDimensions},
          innerSize: 50,
          outerSize: 120,
          points: 8,
          cx: basicSvgDimensions.w/2,
          cy: basicSvgDimensions.h/2
        }
      ]
    },
    rect: {
      Component: 'Rect',
      args: 'width, height, cx, cy',
      description:
        'Rect is drawn from center point (cx & cy). The cursor is then moved to the center point.',
      props: {
        width: { type: 'number' },
        height: { type: 'number' },
        cx: { type: 'number' },
        cy: { type: 'number' }
      },
      demos: [
        {
          svgDimensions: {...basicSvgDimensions},
          width: 120,
          height: 60,
          cx: basicSvgDimensions.w/2,
          cy: basicSvgDimensions.h/2
        }
      ]
    },
    regPolygon: {
      Component: 'RegPolygon',
      args: 'size, sides, cx, cy',
      description:
        'RegPolygon is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.',
      props: {
        size: { type: 'number' },
        sides: { type: 'number' },
        cx: { type: 'number' },
        cy: { type: 'number' }
      },
      demos: [
        {
          svgDimensions: {...basicSvgDimensions},
          size: 100,
          sides: 6,
          cx: basicSvgDimensions.w/2,
          cy: basicSvgDimensions.h/2
        }
      ]
    },
    sector: {
      Component: 'Sector',
      args: 'cx, cy, size, startAngle, endAngle',
      description:
        'Sector is drawn from center point (cx & cy). The cursor is then moved to the center point.',
      props: {
        cx: { type: 'number' },
        cy: { type: 'number' },
        size: { type: 'number' },
        startAngle: { type: 'number' },
        endAngle: { type: 'number' }
      },
      demos: [
        {
          svgDimensions: {...basicSvgDimensions},
          cx: basicSvgDimensions.w/2,
          cy: basicSvgDimensions.h/2,
          size: 100,
          startAngle: 0,
          endAngle: 270
        }
      ]
    },
    segment: {
      Component: 'Segment',
      args: 'cx, cy, size, startAngle, endAngle',
      description:
        'Segment is drawn from center point (cx & cy). The cursor is then moved to the center point.',
      props: {
        cx: { type: 'number' },
        cy: { type: 'number' },
        size: { type: 'number' },
        startAngle: { type: 'number' },
        endAngle: { type: 'number' }
      },
      demos: [
        {
          svgDimensions: {...basicSvgDimensions},
          cx: basicSvgDimensions.w/2,
          cy: basicSvgDimensions.h/2,
          size: 100,
          startAngle: 0,
          endAngle: 270
        }
      ]
    },
    square: {
      Component: 'Square',
      args: 'size, cx, cy',
      description:
        'Square is drawn from center point (cx & cy). The cursor is then moved to the center point.',
      props: {
        size: { type: 'number' },
        cx: { type: 'number' },
        cy: { type: 'number' }
      },
      demos: [
        {
          svgDimensions: {...basicSvgDimensions},
          size: 100,
          cx: basicSvgDimensions.w/2,
          cy: basicSvgDimensions.h/2
        }
      ]
    },
    star: {
      Component: 'Star',
      args: 'outerSize, innerSize, points, cx, cy',
      description:
        'Star is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.',
      props: {
        outerSize: { type: 'number' },
        innerSize: { type: 'number' },
        points: { type: 'number' },
        cx: { type: 'number' },
        cy: { type: 'number' }
      },
      demos: [
        {
          svgDimensions: {...basicSvgDimensions},
          outerSize: 120,
          innerSize: 40,
          points: 5,
          cx: basicSvgDimensions.w/2,
          cy: basicSvgDimensions.h/2
        }
      ]
    },
    triangle: {
      Component: 'Triangle',
      args: 'size, cx, cy',
      description:
        'Triangle draws an equilateral triangle from center point (cx & cy). The cursor is then moved to the center point.',
      props: {
        size: { type: 'number' },
        cx: { type: 'number' },
        cy: { type: 'number' }
      },
      demos: [
        {
          svgDimensions: {...basicSvgDimensions},
          size: 95,
          cx: basicSvgDimensions.w/2,
          cy: basicSvgDimensions.h/2
        }
      ]
    }
  },
  curves: {
    arc: {
      Component: 'Arc',
      description: 'Arc is drawn...',
      props: {
        sx: { type: 'number' },
        sy: { type: 'number' },
        rx: { type: 'number' },
        ry: { type: 'number' },
        rotation: { type: 'number' },
        arc: { type: 'number' },
        sweep: { type: 'number' },
        ex: { type: 'number' },
        ey: { type: 'number' }
      },
      demos: [
        {
          sx: 10,
          sy: 40,
          rx: 50,
          ry: 85,
          rotation: 0,
          arc: 0,
          sweep: 1,
          ex: 70,
          ey: 40
        }
      ]
    },
    cubic: {
      Component: 'Cubic',
      description: 'Cubic is drawn...',
      props: {
        sx: { type: 'number' },
        sy: { type: 'number' },
        cx1: { type: 'number' },
        cy1: { type: 'number' },
        cx2: { type: 'number' },
        cy2: { type: 'number' },
        ex: { type: 'number' },
        ey: { type: 'number' },
        S: { type: 'array' },
        s: { type: 'array' }
      },
      demos: [
        {
          sx: 10,
          sy: 90,
          cx1: 30,
          cy1: 90,
          cx2: 25,
          cy2: 10,
          ex: 50,
          ey: 10,
          S: [[70, 90, 90, 90]]
        }
      ]
    },
    quad: {
      Component: 'Quad',
      description: 'Quad is drawn...',
      props: {
        sx: { type: 'number' },
        sy: { type: 'number' },
        cx1: { type: 'number' },
        cy1: { type: 'number' },
        ex: { type: 'number' },
        ey: { type: 'number' },
        T: { type: 'array' },
        t: { type: 'array' }
      },
      demos: [
        {
          sx: 10,
          sy: 50,
          cx1: 25,
          cy1: 25,
          ex: 40,
          ey: 50,
          T: [
            [70, 50],
            [100, 50],
            [130, 50],
            [160, 50],
            [190, 50],
            [220, 50]
          ]
        }
      ]
    }
  }
};
