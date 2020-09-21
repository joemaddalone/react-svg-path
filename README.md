# react-svg-path

## Install

```bash
npm install --save react-svg-path
```

## Basic Usage

```jsx
import React from 'react';
import Path from 'react-svg-path';

const Square = ({ x, y, size }) => {
  const path = new Path()
    .moveTo(x, y) // move pen to x, y
    .right(size) // draw line right to relative "size" px
    .down(size) // draw line down to relative "size" px
    .left(size) // draw line left to relative "size" px
    .close() // draw line back to first point
    .fill('green'); // set fill color
  return path.toComponent();
};

const App = () => {
  const width = 800;
  const height = 800;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio='none'
    >
      <Square x={50} y={50} size={50} />
    </svg>
  );
};
```

## [demos](https://joemaddalone.github.io/react-svg-path/)

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


### [demos](https://joemaddalone.github.io/react-svg-path/)

## License

MIT © [joemaddalone](https://github.com/joemaddalone)
