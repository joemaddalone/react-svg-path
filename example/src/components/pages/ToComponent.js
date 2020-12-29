import React from 'react';
import { translate as t } from '../../i18n/i18n';
import Path, { Svg } from 'react-svg-path';

const Triangle = ({ x, y, w, h, ...rest }) => {
  const p = new Path();
  return p
    .M(x, y)
    .l(-w / 2, h)
    .right(w)
    .close()
    .toComponent(rest);
};

export const ToComponent = () => {
  return (
    <>
      <h1>{t('pages.toComponent.title')}</h1>
      <p>{t('pages.toComponent.description')}</p>
      <h2>{t('common.example')}</h2>
      <code>{`const Triangle = ({ x, y, w, h, ...rest }) => {
  const p = new Path();
  return p
    .M(x, y)
    .l(-w / 2, h)
    .right(w)
    .close()
    .toComponent(rest);
};`}</code>
      <p>{t('pages.toComponent.description2')}</p>
      <div>
        <Svg width={500} height={200} scale>
          <g transform='translate(125,0)'>
            {['red', 'blue', 'green'].map((c, i) => (
              <Triangle key={c} x={i * 100} y={25} w={150} h={150} fill={c} />
            ))}
          </g>
        </Svg>
      </div>
      <code>
        {`
{['red', 'blue', 'green'].map((c, i) => (
  <Triangle key={c} x={i * 100} y={25} w={150} h={150} fill={c} />
))}`.trim()}
      </code>
    </>
  );
};
