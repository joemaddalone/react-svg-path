import React, { useState } from 'react';
import * as Shapes from 'react-svg-path';
import docs from '../../docs/docs';
import demoDocs from '../../docs/demos';
import { ComponentKnobs } from './ComponentKnobs';
import { PathKnobs } from './PathKnobs';
import { Tabs } from './Tabs';
import { translate as t } from '../../i18n/i18n';

export const CurveDemo = ({ curve }) => {
  const { Component, props } = docs[curve];
  const demos = JSON.parse(JSON.stringify(demoDocs.curves[curve]));
  const initialState = demos.map((d, i) => {
    return Object.keys(d)
      .filter((k) => k !== 'svgDimensions')
      .reduce((accum, cur) => {
        return { ...accum, [cur]: d[cur] };
      }, {});
  });
  const [demoValues, setDemoValues] = useState(initialState);
  const [pathAttributes, setPathAttributes] = useState({
    stroke: '#0e98dd',
    strokeWidth: 1,
    fill: '#ffffff'
  });
  const C = Shapes[Component];
  const Svg = Shapes.Svg;
  return (
    <>
      <h1>{Component}</h1>
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
      {demos &&
        demos.map(({ svgDimensions, ...rest }, i) => {
          return (
            <span key={i}>
              <Svg width={svgDimensions.w} height={svgDimensions.h} scale>
                <C {...demoValues[i]} {...pathAttributes} />
              </Svg>
            </span>
          );
        })}
      <div style={{ maxWidth: 800 }}>
        <Tabs>
          <div title={t('common.code')}>
            <code>
              {`
        <${Component}
  ${Object.keys(demoValues[0])
    .map((k) => `${k}={${JSON.stringify(demoValues[0][k])}}`)
    .join('\n  ')}
  ${Object.keys(pathAttributes)
    .map((k) =>
      typeof pathAttributes[k] === 'number'
        ? `${k}={${JSON.stringify(pathAttributes[k])}}`
        : `${k}=${JSON.stringify(pathAttributes[k])}`
    )
    .join('\n  ')}
/>
      `.trim()}
            </code>
          </div>
          <div title={t('common.props')}>
            <div className='knobs'>
              {Object.keys(demoValues[0]).map((k, index) => {
                return (
                  <ComponentKnobs
                    key={k}
                    label={k}
                    value={demoValues[0][k]}
                    type={props[k].type}
                    pointLength={props[k].pointsLength}
                    onChange={(k, v) => {
                      setDemoValues((current) => {
                        current[0][k] = v;
                        return [...current];
                      });
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div title={t('common.attributes')}>
            <div className='knobs'>
              <PathKnobs
                initData={pathAttributes}
                onChange={(e, k) => {
                  setPathAttributes((current) => {
                    current[k] = e;
                    return { ...current };
                  });
                }}
              />
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
};
