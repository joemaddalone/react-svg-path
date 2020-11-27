import React, { useState } from 'react';
import * as Shapes from 'react-svg-path';
import { Knobs } from './Knobs';
import { basicShapes as docs } from '../../docs/docs';
import { translate as t } from '../../i18n/i18n';
import demoDocs from '../../docs/demos';

export const BasicShapeDemo = ({ shape }) => {
  const { Component, props } = docs[shape];
  const demos = demoDocs.basicShapes[shape];
  const initialState = demos.map((d, i) => {
    return Object.keys(d)
      .filter((k) => k !== 'svgDimensions')
      .reduce((accum, cur) => {
        return { ...accum, [cur]: d[cur] };
      }, {});
  });

  const [demoValues, setDemoValues] = useState(initialState);
  const [pathAttributes, setPathAttributes] = useState({
    stroke: '#222',
    strokeWidth: 1
  });
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
      <p>{t(`${shape}.description`)}</p>
      {demos &&
        demos.map(({ svgDimensions, ...rest }, i) => {
          return (
            <span key={i}>
              <Svg width={svgDimensions.w} height={svgDimensions.h}>
                <C {...demoValues[i]} {...pathAttributes} />
              </Svg>
              <code>
                {`
        <${Component}
  ${Object.keys(demoValues[i])
    .map((k) => `${k}={${JSON.stringify(demoValues[i][k])}}`)
    .join('\n  ')}
  ${Object.keys(pathAttributes)
    .map((k) => `${k}={${JSON.stringify(pathAttributes[k])}}`)
    .join('\n  ')}
/>
      `.trim()}
              </code>
              <div>
                {Object.keys(demoValues[i]).map((k, index) => {
                  return (
                    <>
                      <Knobs
                        key={k}
                        label={k}
                        value={demoValues[i][k]}
                        type={props[k].type}
                        onChange={(k, v) => {
                          setDemoValues((current) => {
                            current[i][k] = v;
                            return [...current];
                          });
                        }}
                      />
                    </>
                  );
                })}
                <div className='ui labeled input' style={{ display: 'block' }}>
                  <label
                    htmlFor='strokeWidth'
                    className='ui label'
                    style={{ width: 100 }}
                  >
                    strokeWidth
                  </label>
                  <input
                    step={0.5}
                    type="number"
                    value={pathAttributes.strokeWidth}
                    onChange={(e) => {
                      setPathAttributes((current) => {
                        current.strokeWidth = e.target.value;
                        return { ...current };
                      });
                    }}
                  />
                </div>
                <div className='ui labeled input' style={{ display: 'flex', width: 275 }}>
                  <label
                    htmlFor='stroke'
                    className='ui label'
                    style={{ width: 100 }}
                  >
                    stroke
                  </label>
                  <input
                    style={{paddingLeft: 0, paddingTop: 0, paddingBottom: 0, width: '150px', height: 35}}
                    type="color"
                    value={pathAttributes.stroke}
                    onChange={(e) => {
                      setPathAttributes((current) => {
                        current.stroke = e.target.value;
                        return { ...current };
                      });
                    }}
                  />
                </div>
              </div>
            </span>
          );
        })}
    </>
  );
};
