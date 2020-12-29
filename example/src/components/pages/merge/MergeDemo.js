import React from 'react';
import { Svg, RegPolygon, Circle, Square, PathMerge } from 'react-svg-path';
import { translate as t } from '../../../i18n/i18n';
import './MergeDemo.css';

export const MergeDemo = () => (
  <>
    <h1>{t('pages.pathMerge.title')}</h1>
    <p>{t('pages.pathMerge.intro')}</p>
    <p>{t('pages.pathMerge.compose')}</p>
    <div>
      <Svg width={200} height={200} className='nesting-example-1' scale>
        <RegPolygon size={120} sides={4} cx={100} cy={100} />
        <Circle size={55} cx={100} cy={100} />
        <Square size={60} cx={100} cy={100} />
      </Svg>
      <div>
        <code>
          {`
<RegPolygon size={120} sides={4} cx={100} cy={100} />
<Circle size={55} cx={100} cy={100} />
<Square size={60} cx={100} cy={100} />
`.trim()}
        </code>
      </div>
    </div>
    <p>{t('pages.pathMerge.composeResult')}</p>
    <code>
      {`
<path d="...RegPolygon path data" />
<path d="...Circle path data" />
<path d="...Square path data" />
`.trim()}
    </code>
    <p>{t('pages.pathMerge.wrapIn')}</p>
    <div>
      <Svg width={200} height={200} className='nesting-example-1' scale>
        <PathMerge>
          <RegPolygon size={120} sides={4} cx={100} cy={100} />
          <Circle size={55} cx={100} cy={100} />
          <Square size={60} cx={100} cy={100} />
        </PathMerge>
      </Svg>
      <div>
        <code>
          {`
<PathMerge>
  <RegPolygon size={120} sides={4} cx={100} cy={100} />
  <Circle size={55} cx={100} cy={100} />
  <Square size={60} cx={100} cy={100} />
</PathMerge>
`.trim()}
        </code>
      </div>
    </div>
    <p>{t('pages.pathMerge.wrapInResult')}</p>
    <p>{t('pages.pathMerge.nested')}</p>
    <div>
      <Svg width={200} height={200} className='nesting-example-1' scale>
        <PathMerge>
          <RegPolygon size={120} sides={4} cx={100} cy={100}>
            <Circle size={55} />
            <Square size={60} />
            <Circle size={25} cy={58} />
          </RegPolygon>
          <Circle size={10} cx={100} cy={100} />
        </PathMerge>
      </Svg>
      <div>
        <code>
          {`
<PathMerge>
  <RegPolygon size={120} sides={4} cx={100} cy={100}>
    <Circle size={55} />
    <Square size={60} />
    <Circle size={25} cy={58} />
  </RegPolygon>
  <Circle size='10' cx={100} cy={100} />
</PathMerge>
`.trim()}
        </code>
      </div>
    </div>
  </>
);
