# react-svg-path

## Install

```bash
npm install --save react-svg-path
```

## Usage

```jsx
import React from 'react'
import Path from 'react-svg-path'

const Square = ({ x, y, size }) => {
  const path = new Path()
    .moveTo(x, y)
    .lineTo(x + size, y)
    .lineTo(x + size, y + size)
    .lineTo(x, y + size)
    .close()
    .stroke('red');
  return path.toElement();
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

## License

MIT © [joemaddalone](https://github.com/joemaddalone)
