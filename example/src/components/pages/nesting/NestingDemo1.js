import React from 'react';
import { Svg, RegPolygon, Circle, Square } from 'react-svg-path';
import { translate as t } from '../../../i18n/i18n';

import './NestingDemo1.css';

const NestingDemo1 = () => (
  <>
    <h2>{t('pages.nesting.example1')}</h2>
    <p>{t('pages.nesting.centerPoints')}</p>
    <Svg width={200} height={200} className='nesting-example-1' scale>
      <RegPolygon size={120} sides={4} cx={100} cy={100}>
        <Circle size={55} />
        <Square size={60} />
        <Circle size={25} cy={58} />
      </RegPolygon>
    </Svg>
    <div>
      <code>
        {`
<RegPolygon size={120} sides={4} cx={100} cy={100}>
  <Circle size={55} /> // ${t('pages.nesting.noCxCy')}
  <Square size={60} /> // ${t('pages.nesting.noCxCy')}
  <Circle size={25} cy={58} /> // ${t('pages.nesting.cyOver')}
</RegPolygon>
`.trim()}
      </code>
    </div>
  </>
);

export default NestingDemo1;
