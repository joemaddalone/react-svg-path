import { basicShapes, curves } from '../src/docs/docs.mjs';
import fs from 'fs';

const demoUrl = 'https://joemaddalone.github.io/react-svg-path/#/';

const makeDocs = (docs, header) => {
  const mdDocs = Object.keys(docs)
    .sort()
    .reduce((accum, cur) => {
      const component = docs[cur];
      const props = Object.keys(component.props)
        .sort()
        .map((p) => {
          // eslint-disable-next-line no-prototype-builtins
          if (component.props[p].hasOwnProperty('default')) {
            return `\n  ${p}={${component.props[p].type}|default = ${component.props[p].default}}`;
          } else {
            // component.props[p].default = '';
            return `\n  ${p}={${component.props[p].type}}`;
          }
        });
      const c = { ...component };
      c.signature = `<${component.Component} ${props.join(' ')} \n/>`;
      c.isRequired = c.isRequired || false;
      c.demoUrl = `${demoUrl}${cur}`;
      return { ...accum, [cur]: c };
    }, {});

  const readme = Object.values(mdDocs).map((c) => {
    return `### ${c.Component}
\`\`\`js
${c.signature}
\`\`\`

Prop|Type|Description|Required|Default
:-|:-|:-|:-|:-
${Object.keys(c.props)
  .map(
    (p) =>
      `${p}|${c.props[p].type}|${c.props[p].description.replace(
        'of the shape',
        `of the ${c.Component}`
      )}|${c.props[p].isRequired}|${
        c.props[p].default === undefined ? '' : c.props[p].default
      }`
  )
  .join('\n')}
  [→Interactive demo of ${c.Component}](${c.demoUrl})
\n-----\n`;
  });

  return `## ${header}\n ${readme.join('\n')}`;
};

const shapeDocs = makeDocs(basicShapes, 'Shapes');
const curveDocs = makeDocs(curves, 'Curves');

const manual = `
## Install

\`\`\`bash
npm install --save react-svg-path
\`\`\`

## Path

\`\`\`
import Path from 'react-svg-path'
\`\`\`

react-svg-path is mostly helpful for building the commands needed for the "d" attribute of an svg path.

Most methods are direct translations from the [SVG Path specification](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths).

\`<path d="M0 0, L0 100"></path>\`

This path can be produced with:

\`\`\`
const path = new Path().M(0,0).L(0,100);
console.log(path.toString()) // M0 0, L0 100
\`\`\`

This library wraps https://github.com/joemaddalone/path and further documentation can be found there.  All of the functionality of [path](https://github.com/joemaddalone/path) is always available via \`import Path from 'react-svg-path'\` Please read the docs on [path](https://github.com/joemaddalone/path)

## toComponent

This library adds one additional rendering method to \`path\` called \`toComponent\`.

- **toComponent**(_props_)
  - returns a jsx function including attributes and props.


\`\`\`jsx
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
\`\`\`

## Components

Writing path commands via the library makes creating paths super simple and intuitive.  However it can seem like overkill for really common patterns you may need.  react-svg-path includes a number of components to allow for a declarative interface for generating the paths you need.

The following components are available

`;

const toc = `
# react-svg-path

react-svg-path makes composing svg elements dead simple. Everything is a path. Have fun.

There are more docs and interactive demos at https://joemaddalone.github.io/react-svg-path/

## Table of contents

- [Installation](#install)
- [Path](#path)
- [toComponent](#tocomponent)
- [Components](#components)
  - [Shapes](#shapes)${Object.keys(basicShapes)
    .sort()
    .map((k) => `\n    - [${basicShapes[k].Component}](#${k.toLowerCase()})`)
    .join('')}
  - [Curves](#curves)${Object.keys(curves)
    .sort()
    .map((k) => `\n    - [${curves[k].Component}](#${k.toLowerCase()})`)
    .join('')}`;

const footer = `
## License

MIT © [joemaddalone](https://github.com/joemaddalone)`;

const content = toc + manual + shapeDocs + curveDocs + footer;

fs.writeFile('../README.md', content, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
