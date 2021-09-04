
# react-svg-path

react-svg-path makes composing svg elements dead simple. Everything is a path. Have fun.

There are more docs and interactive demos at https://joemaddalone.github.io/react-svg-path-docs/

## Table of contents

- [Installation](#install)
- [Path](#path)
- [toComponent](#tocomponent)
- [Components](#components)
  - [Shapes](#shapes)
    - [Circle](#circle)
    - [Cross](#cross)
    - [Ellipse](#ellipse)
    - [Lens](#lens)
    - [Line](#line)
    - [Omino](#omino)
    - [Polygon](#polygon)
    - [Polygram](#polygram)
    - [Polyline](#polyline)
    - [RadialLines](#radiallines)
    - [Rect](#rect)
    - [RegPolygon](#regpolygon)
    - [RoundedRect](#roundedrect)
    - [RoundedSquare](#roundedsquare)
    - [Sector](#sector)
    - [Segment](#segment)
    - [Square](#square)
    - [Star](#star)
    - [SymH](#symh)
    - [SymI](#symi)
    - [SymX](#symx)
    - [Triangle](#triangle)
  - [Curves](#curves)
    - [Arc](#arc)
    - [Cubic](#cubic)
    - [Quad](#quad)
## Install

```bash
npm install --save react-svg-path
```

## Path

```
import Path from 'react-svg-path'
```

react-svg-path is mostly helpful for building the commands needed for the "d" attribute of an svg path.

Most methods are direct translations from the [SVG Path specification](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths).

`<path d="M0 0, L0 100"></path>`

This path can be produced with:

```
const path = new Path().M(0,0).L(0,100);
console.log(path.toString()) // M0 0, L0 100
```

This library wraps https://github.com/joemaddalone/path and further documentation can be found there.  All of the functionality of [path](https://github.com/joemaddalone/path) is always available via `import Path from 'react-svg-path'` Please read the docs on [path](https://github.com/joemaddalone/path)

## toComponent

This library adds one additional rendering method to `path` called `toComponent`.

- **toComponent**(_props_)
  - returns a jsx function including attributes and props.


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

## Components

Writing path commands via the library makes creating paths super simple and intuitive.  However it can seem like overkill for really common patterns you may need.  react-svg-path includes a number of components to allow for a declarative interface for generating the paths you need.

_Note: The following shorthand version of some props are available where applicable:_
* **sxy**: sx & sy = sxy
* **exy**: ex & ey = exy
* **cxy**: cx & cy = cxy
* **rxy**: rx & cy = rxy

The following components are available

## Shapes
 ### Circle

![](examples/circle.svg)

[→ Interactive demo of Circle](https://joemaddalone.github.io/react-svg-path-docs/#/circle)

```js
<Circle 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  size={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
size|number|Circumference of the Circle.|true|
cx|number|Center x coordinate of the Circle.|true|
cy|number|Center x coordinate of the Circle.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### Cross

![](examples/cross.svg)

[→ Interactive demo of Cross](https://joemaddalone.github.io/react-svg-path-docs/#/cross)

```js
<Cross 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  height={number} 
  width={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
width|number|Width of the Cross.|true|
height|number|Height of the Cross.|true|
cx|number|Center x coordinate of the Cross.|true|
cy|number|Center x coordinate of the Cross.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### Ellipse

![](examples/ellipse.svg)

[→ Interactive demo of Ellipse](https://joemaddalone.github.io/react-svg-path-docs/#/ellipse)

```js
<Ellipse 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  height={number} 
  width={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
width|number|Width of the Ellipse.|true|
height|number|Height of the Ellipse.|true|
cx|number|Center x coordinate of the Ellipse.|true|
cy|number|Center x coordinate of the Ellipse.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### Lens

![](examples/lens.svg)

[→ Interactive demo of Lens](https://joemaddalone.github.io/react-svg-path-docs/#/lens)

```js
<Lens 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  height={number} 
  width={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
width|number|Width of the Lens.|true|
height|number|Height of the Lens.|true|
cx|number|Center x coordinate of the Lens.|true|
cy|number|Center x coordinate of the Lens.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### Line

![](examples/line.svg)

[→ Interactive demo of Line](https://joemaddalone.github.io/react-svg-path-docs/#/line)

```js
<Line 
  ex={number} 
  ey={number} 
  relative={boolean|default = false} 
  sx={number} 
  sy={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
sx|number|Starting x coordinate for the Line.|true|
sy|number|Starting y coordinate for the Line.|true|
ex|number|Ending x coordinate for the Line.|true|
ey|number|Ending y coordinate for the Line.|true|
relative|boolean|If set to true ex & ey will become relative to sx & sy.|true|false

</details>


-----

### Omino

![](examples/omino.svg)

[→ Interactive demo of Omino](https://joemaddalone.github.io/react-svg-path-docs/#/omino)

```js
<Omino 
  lined={boolean|default = false} 
  shape={2d-array} 
  size={number} 
  sx={number} 
  sy={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
size|number|Size of the squares.|true|
shape|2d-array|2d array of the Omino.|true|
sx|number|Starting x coordinate for left.|true|
sy|number|Starting y coordinate for top.|true|
lined|boolean|Draw inner lines or not.|false|false

</details>


-----

### Polygon

![](examples/polygon.svg)

[→ Interactive demo of Polygon](https://joemaddalone.github.io/react-svg-path-docs/#/polygon)

```js
<Polygon 
  points={point-array} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
points|point-array|x, y, points of the polygon.|true|

</details>


-----

### Polygram

![](examples/polygram.svg)

[→ Interactive demo of Polygram](https://joemaddalone.github.io/react-svg-path-docs/#/polygram)

```js
<Polygram 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  points={number} 
  size={number} 
  vertexSkip={number|default = 2} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
size|number|Size of the underlying polygon.|true|
points|number|Number of points to create.|true|
cx|number|Center x coordinate of the Polygram.|true|
cy|number|Center x coordinate of the Polygram.|true|
vertexSkip|number|Integer representing which vertex to go to next relative to current.|false|2
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### Polyline

![](examples/polyline.svg)

[→ Interactive demo of Polyline](https://joemaddalone.github.io/react-svg-path-docs/#/polyline)

```js
<Polyline 
  points={point-array} 
  relative={boolean|default = false} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
points|point-array|x, y, points of the Polyline.|true|
relative|boolean|If set to true all points will be relative.|false|false

</details>


-----

### RadialLines

![](examples/radialLines.svg)

[→ Interactive demo of RadialLines](https://joemaddalone.github.io/react-svg-path-docs/#/radialLines)

```js
<RadialLines 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  innerSize={number} 
  outerSize={number} 
  points={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
outerSize|number|Circumference of the outer circle.|true|
innerSize|number|Circumference of the inner circle.|true|
points|number|Number of lines to draw.|true|
cx|number|Center x coordinate of the RadialLines.|true|
cy|number|Center x coordinate of the RadialLines.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### Rect

![](examples/rect.svg)

[→ Interactive demo of Rect](https://joemaddalone.github.io/react-svg-path-docs/#/rect)

```js
<Rect 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  height={number} 
  width={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
width|number|Width of the Rect.|true|
height|number|Height of the Rect.|true|
cx|number|Center x coordinate of the Rect.|true|
cy|number|Center x coordinate of the Rect.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### RegPolygon

![](examples/regPolygon.svg)

[→ Interactive demo of RegPolygon](https://joemaddalone.github.io/react-svg-path-docs/#/regPolygon)

```js
<RegPolygon 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  sides={number} 
  size={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
size|number|Size of the RegPolygon.|true|
sides|number|Number of sides of the RegPolygon.|true|
cx|number|Center x coordinate of the RegPolygon.|true|
cy|number|Center x coordinate of the RegPolygon.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### RoundedRect

![](examples/roundedRect.svg)

[→ Interactive demo of RoundedRect](https://joemaddalone.github.io/react-svg-path-docs/#/roundedRect)

```js
<RoundedRect 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  height={number} 
  radius={number} 
  width={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
width|number|Width of the Rect.|true|
height|number|Height of the Rect.|true|
radius|number|Radius for the corners.|true|
cx|number|Center x coordinate of the RoundedRect.|true|
cy|number|Center x coordinate of the RoundedRect.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### RoundedSquare

![](examples/roundedSquare.svg)

[→ Interactive demo of RoundedSquare](https://joemaddalone.github.io/react-svg-path-docs/#/roundedSquare)

```js
<RoundedSquare 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  radius={number} 
  size={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
size|number|Width &  height of the Square.|true|
radius|number|Radius for the corners.|true|
cx|number|Center x coordinate of the RoundedSquare.|true|
cy|number|Center x coordinate of the RoundedSquare.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### Sector

![](examples/sector.svg)

[→ Interactive demo of Sector](https://joemaddalone.github.io/react-svg-path-docs/#/sector)

```js
<Sector 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  endAngle={number} 
  size={number} 
  startAngle={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
cx|number|Center x coordinate of the Sector.|true|
cy|number|Center x coordinate of the Sector.|true|
size|number|Circumference of the Sector.|true|
startAngle|number|Start angle of the Sector.  0 = top center.|true|
endAngle|number|End angle of the Sector.  0 = top center.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### Segment

![](examples/segment.svg)

[→ Interactive demo of Segment](https://joemaddalone.github.io/react-svg-path-docs/#/segment)

```js
<Segment 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  endAngle={number} 
  size={number} 
  startAngle={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
cx|number|Center x coordinate of the Segment.|true|
cy|number|Center x coordinate of the Segment.|true|
size|number|Circumference of the Segment.|true|
startAngle|number|Start angle of the Segment.  0 = top center.|true|
endAngle|number|End angle of the Segment.  0 = top center.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### Square

![](examples/square.svg)

[→ Interactive demo of Square](https://joemaddalone.github.io/react-svg-path-docs/#/square)

```js
<Square 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  size={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
size|number|Width &  height of the Square.|true|
cx|number|Center x coordinate of the Square.|true|
cy|number|Center x coordinate of the Square.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### Star

![](examples/star.svg)

[→ Interactive demo of Star](https://joemaddalone.github.io/react-svg-path-docs/#/star)

```js
<Star 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  innerSize={number} 
  outerSize={number} 
  points={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
outerSize|number|The outer circumference where points will reach.|true|
innerSize|number|The inner circumference where points will end.|true|
points|number|Number of points for the Star.|true|
cx|number|Center x coordinate of the Star.|true|
cy|number|Center x coordinate of the Star.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### SymH

![](examples/symH.svg)

[→ Interactive demo of SymH](https://joemaddalone.github.io/react-svg-path-docs/#/symH)

```js
<SymH 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  height={number} 
  width={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
width|number|Width of the H.|true|
height|number|Height of the H.|true|
cx|number|Center x coordinate of the SymH.|true|
cy|number|Center x coordinate of the SymH.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### SymI

![](examples/symI.svg)

[→ Interactive demo of SymI](https://joemaddalone.github.io/react-svg-path-docs/#/symI)

```js
<SymI 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  height={number} 
  width={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
width|number|Width of the I.|true|
height|number|Height of the I.|true|
cx|number|Center x coordinate of the SymI.|true|
cy|number|Center x coordinate of the SymI.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### SymX

![](examples/symX.svg)

[→ Interactive demo of SymX](https://joemaddalone.github.io/react-svg-path-docs/#/symX)

```js
<SymX 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  height={number} 
  width={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
width|number|Width of the X.|true|
height|number|Height of the X.|true|
cx|number|Center x coordinate of the SymX.|true|
cy|number|Center x coordinate of the SymX.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----

### Triangle

![](examples/triangle.svg)

[→ Interactive demo of Triangle](https://joemaddalone.github.io/react-svg-path-docs/#/triangle)

```js
<Triangle 
  centerEnd={boolean|default = true} 
  cx={number} 
  cy={number} 
  size={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
size|number|Size of the Tirangle.|true|
cx|number|Center x coordinate of the Triangle.|true|
cy|number|Center x coordinate of the Triangle.|true|
centerEnd|boolean|Determines whether cursor should return to cx & cy as a last step.|false|true

</details>


-----
## Curves
 ### Arc

![](examples/arc.svg)

[→ Interactive demo of Arc](https://joemaddalone.github.io/react-svg-path-docs/#/arc)

```js
<Arc 
  arc={number|default = 0} 
  ex={number} 
  ey={number} 
  relative={boolean|default = false} 
  rotation={number|default = 0} 
  rx={number} 
  ry={number} 
  sweep={number|default = 0} 
  sx={number} 
  sy={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
sx|number|Starting x coordinate for the Arc.|true|
sy|number|Starting y coordinate for the Arc.|true|
rx|number|Width of the underlying ellipse of the Arc.|true|
ry|number|Height of the underlying ellipse of the Arc.|true|
rotation|number|Rotation of the underlying ellipse of the Arc.|false|0
arc|number|Large arc flag: this says whether to follow the larger or smaller part of the underlying ellipse.|false|0
sweep|number|Sweep flag: think of this as direction flag, follow a clockwise or counterclockwise path along the underlying ellipse.|false|0
ex|number|Ending x coordinate for the Arc.|true|
ey|number|Ending y coordinate for the Arc.|true|
relative|boolean|If set to true all points after sx & sy will become relative to sx & sy.|false|false

</details>


-----

### Cubic

![](examples/cubic.svg)

[→ Interactive demo of Cubic](https://joemaddalone.github.io/react-svg-path-docs/#/cubic)

```js
<Cubic 
  S={point-array} 
  cx1={number} 
  cx2={number} 
  cy1={number} 
  cy2={number} 
  ex={number} 
  ey={number} 
  relative={boolean|default = false} 
  s={point-array} 
  sx={number} 
  sy={number} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
sx|number|Starting x coordinate for the Cubic.|true|
sy|number|Starting y coordinate for the Cubic.|true|
cx1|number|x coordinate for control point 1.|true|
cy1|number|y coordinate for control point 1.|true|
cx2|number|x coordinate for control point 2.|true|
cy2|number|y coordinate for control point 2.|true|
ex|number|Ending x coordinate for the Cubic.|true|
ey|number|Ending y coordinate for the Cubic.|true|
S|point-array|Optionally String together multiple Cubic wit an array consisting of 2 or more control points.|false|
s|point-array|Optional relative "smoooth curve" array consisting of 2 or more control points.|false|
relative|boolean|If set to true all points after sx & sy will become relative to sx & sy.|false|false

</details>


-----

### Quad

![](examples/quad.svg)

[→ Interactive demo of Quad](https://joemaddalone.github.io/react-svg-path-docs/#/quad)

```js
<Quad 
  T={point-array} 
  cx={number} 
  cy={number} 
  ex={number} 
  ey={number} 
  relative={boolean|default = false} 
  sx={number} 
  sy={number} 
  t={point-array} 
/>
```

<details>

<summary>Props overview</summary>

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
sx|number|Starting x coordinate for the Quad.|true|
sy|number|Starting y coordinate for the Quad.|true|
cx|number|x coordinate for the control point.|true|
cy|number|y coordinate for the control point.|true|
ex|number|Ending x coordinate for the Quad.|true|
ey|number|Ending y coordinate for the Quad.|true|
T|point-array|String together multiple Quad curves.|false|
t|point-array|String together multiple Quad curves where coordinates are relative.|false|
relative|boolean|If set to true all points after sx & sy will become relative to sx & sy.|false|false

</details>


-----

## License

MIT © [joemaddalone](https://github.com/joemaddalone)