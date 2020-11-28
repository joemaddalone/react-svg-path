import React from 'react';
import * as Shapes from 'react-svg-path';
import docs from '../../docs/docs';
import demoDocs from '../../docs/demos';
import { translate as t } from '../../i18n/i18n';

export const CurveDemo = ({ curve }) => {
  const { Component, props } = docs[curve];
  const demos = demoDocs.curves[curve];
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
      <p>{t(`${curve}.description`)}</p>
      <Svg width={500} height={120}>
        {demos && demos.map((d, i) => <C key={i} {...d} />)}
      </Svg>
    </>
  );
};