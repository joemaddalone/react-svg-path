import React from 'react';
import * as Shapes from 'react-svg-path';
import docs from '../docs/docs';

export const BasicShapeDemo = ({ shape }) => {
  const { Component, props, description, demos } = docs.basicShapes[shape];
  const C = Shapes[Component];
  const Svg = Shapes.Svg;
  return (
    <>
      <h2>{Component}</h2>
      <code>{`import { ${Component} } from 'react-svg-path'`}</code>
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
      {demos &&
        demos.map(({ svgDimensions, ...rest }, i) => {
          return (
            <span key={i}>
              <Svg width={svgDimensions.w} height={svgDimensions.h}>
                <C {...rest} />
              </Svg>
              <code>
                {`
        <${Component}
  ${Object.keys(rest)
    .map((k) => `${k}={${rest[k]}}`)
    .join('\n  ')}
/>
      `.trim()}
              </code>
            </span>
          );
        })}
    </>
  );
};
