import React from 'react';
import * as Shapes from 'react-svg-path';
import docs from '../../../docs/docs.js';

const { Component, props, description, demos } = docs.basicShapes.star;

const C = Shapes[Component];
const Svg = Shapes.Svg;

export const StarDemo = () => (
  <>
    <h3>{Component}</h3>
    <code>
      {`
        <${Component}
  ${Object.keys(props)
    .map((k) => `${k}={${props[k].type}}`)
    .join('\n  ')}
/>
      `.trim()}
    </code>
    <p>{description}</p>
    <Svg width={140} height={120}>
      {demos.map((d, i) => (
      <C key={i} {...d} />
      ))}
    </Svg>
  </>
);

StarDemo.displayName = Component;
