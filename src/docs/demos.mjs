const basicSvgDimensions = {
  w: 800,
  h: 150
};
const curveSvgDimensions = {
  w: 800,
  h: 200
};
const demos = {
  basicShapes: {
    circle: [
      {
        svgDimensions: { ...basicSvgDimensions },
        size: 95,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2
      }
    ],
    ellipse: [
      {
        svgDimensions: { ...basicSvgDimensions },
        width: 150,
        height: 75,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2
      }
    ],
    lens: [
      {
        svgDimensions: { ...basicSvgDimensions },
        width: 150,
        height: 75,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2
      }
    ],
    polygon: [
      {
        svgDimensions: { ...basicSvgDimensions },
        points: [
          [10, 60],
          [40, 0],
          [70, 60],
          [40, 120]
        ]
      }
    ],
    polygram: [
      {
        svgDimensions: { ...basicSvgDimensions },
        size: 120,
        points: 5,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2,
        vertexSkip: 2
      }
    ],
    polyline: [
      {
        svgDimensions: { ...basicSvgDimensions },
        points: [
          [400, 60],
          [430, 0],
          [460, 60],
          [430, 120]
        ]
      }
    ],
    line: [
      {
        svgDimensions: { ...basicSvgDimensions },
        sx: 10,
        sy: 10,
        ex: 50,
        ey: 50
      }
    ],
    radialLines: [
      {
        svgDimensions: { ...basicSvgDimensions },
        innerSize: 50,
        outerSize: 120,
        points: 8,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2
      }
    ],
    rect: [
      {
        svgDimensions: { ...basicSvgDimensions },
        width: 120,
        height: 60,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2
      }
    ],
    roundedRect: [
      {
        svgDimensions: { ...basicSvgDimensions },
        width: 120,
        height: 60,
        radius: 20,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2
      }
    ],
    regPolygon: [
      {
        svgDimensions: { ...basicSvgDimensions },
        size: 100,
        sides: 6,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2
      }
    ],
    sector: [
      {
        svgDimensions: { ...basicSvgDimensions },
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2,
        size: 100,
        startAngle: 0,
        endAngle: 270
      }
    ],
    segment: [
      {
        svgDimensions: { ...basicSvgDimensions },
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2,
        size: 100,
        startAngle: 0,
        endAngle: 270
      }
    ],
    square: [
      {
        svgDimensions: { ...basicSvgDimensions },
        size: 100,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2
      }
    ],
    roundedSquare: [
      {
        svgDimensions: { ...basicSvgDimensions },
        size: 100,
        radius: 20,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2
      }
    ],
    star: [
      {
        svgDimensions: { ...basicSvgDimensions },
        outerSize: 120,
        innerSize: 40,
        points: 5,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2
      }
    ],
    triangle: [
      {
        svgDimensions: { ...basicSvgDimensions },
        size: 95,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2
      }
    ],
    cross: [
      {
        svgDimensions: { ...basicSvgDimensions },
        width: 95,
        height: 95,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2
      }
    ],
    symX: [
      {
        svgDimensions: { ...basicSvgDimensions },
        width: 95,
        height: 95,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2
      }
    ],
    symI: [
      {
        svgDimensions: { ...basicSvgDimensions },
        width: 95,
        height: 95,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2
      }
    ],
    symH: [
      {
        svgDimensions: { ...basicSvgDimensions },
        width: 95,
        height: 95,
        cx: basicSvgDimensions.w / 2,
        cy: basicSvgDimensions.h / 2
      }
    ],
    omino: [
      {
        svgDimensions: { ...basicSvgDimensions },
        size: 25,
        shape: [[1], [1, 1], [1]],
        sx: 10,
        sy: 0,
        lined: true
      }
    ]
  },
  curves: {
    arc: [
      {
        svgDimensions: { ...curveSvgDimensions },
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
    ],
    cubic: [
      {
        svgDimensions: { ...curveSvgDimensions },
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
    ],
    quad: [
      {
        svgDimensions: { ...curveSvgDimensions },
        sx: 10,
        sy: 50,
        cx: 25,
        cy: 25,
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
};

export default demos;
