# react-svg-path

## Install

```bash
npm install --save react-svg-path
```

## Basic Usage

```jsx
import React from 'react';
import Path, {Svg}  from 'react-svg-path';

const CustomSquare = ({ x, y, size }) => {
  const path = new Path()
    .moveTo(x, y) // move pen to x, y
    .right(size) // draw line right to relative "size" px
    .down(size) // draw line down to relative "size" px
    .left(size) // draw line left to relative "size" px
    .close() // draw line back to first point
  return path.toComponent({ fill: 'green'});
};

const App = () => {
  const width = 800;
  const height = 800;
  return (
    <Svg
      width={width}
      height={height}
    >
      <CustomSquare x={50} y={50} size={50} />
    </svg>
  );
};
```

### [demos & documentation](https://joemaddalone.github.io/react-svg-path/)

# Getting started

```
import Path from 'react-svg-path'
```

react-svg-path is mostly helpful for building the commands needed for the "d" attribute of an svg path.

Most methods are direct translations from the [SVG Path specification](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths).

### Example

`<path d="M0 0, L0 100"></path>`

This path can be produced with:

```
const path = new Path().M(0,0).L(0,100);
console.log(path.toString()) // M0 0, L0 100
```

This library wraps https://github.com/joemaddalone/path and further documentation can be found there.

This library adds one additional rendering method to `path`.

- **toComponent**(_props_)
  - returns a jsx function including attributes and props.

All of the functionality of https://github.com/joemaddalone/path is always available via `import Path from 'react-svg-path`

Please read the docs on https://github.com/joemaddalone/path

### Components

Writing path commands via the library makes creating paths super simple and intuitive.  However it can seem like overkill for really common patterns you may need.  react-svg-path includes a number of components to allow for a declarative interface for generating the paths you need.

The following components are available

* `<Arc {...sx, sy, rx, ry, rotation, arc, sweep, ex, ey} />`
* `<Circle {...cx, cy, size} />`
* `<Cubic {...sx, sy, cx1, cy1, cx2, cy2, ex, ey} />`
* `<Ellipse  {...cx, cy, width, height} />`
* `<Group />`
* `<Line {...sx, sy, ex, ey} />`
* `<Polygon points={points} />`
* `<Polyline points={points} />`
* `<Quad {...sx, sy, cx, cy, ex, ey} />`
* `<RadialLines  {...innerSize, outerSize, points, cx, cy} />`
* `<Rect  {...cx, cy, width, height} />`
* `<RegPolygon {...cx, cy, size, sides} />`
* `<Sector {...cx, cy, radius, startAngle, endAngle} />`
* `<Segment {...cx, cy, radius, startAngle, endAngle} />`
* `<Square {...cx, cy, size} />`
* `<Star  {...size, points, cx, cy, innerRadius} />`
* `<Svg {...width, height} />`
* `<Text />`
* `<Triangle {...cx, cy, size} />`




### [demos & documentation](https://joemaddalone.github.io/react-svg-path/)

## License

MIT © [joemaddalone](https://github.com/joemaddalone)
