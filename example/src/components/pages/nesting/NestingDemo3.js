import React from 'react';
import { Svg, Circle, Line } from 'react-svg-path';
import { translate as t } from '../../../i18n/i18n';

import './NestingDemo3.css';

const NestingDemo3 = () => (
  <>
    <h2>{t('pages.nesting.example3')}</h2>
    <p dangerouslySetInnerHTML={{ __html: t('pages.nesting.oxOy') }} />
    <Svg width={500} height={150} className='nesting-example-3' scale>
      <Circle size={0} cx={75} cy={75}>
        <Circle size={60} oy={-20} />
        <Circle size={60} oy={10} ox={-20} />
        <Circle size={60} oy={10} ox={20} />
      </Circle>
      <Line sx={200} sy={75} ex={400} ey={75}>
        <Circle size={20} ox={-100} />
      </Line>
    </Svg>
    <div>
      <code>
        {`
<Circle size={0} cx={75} cy={75}>       // ${t('pages.nesting.zeroCircle')}
  <Circle size={60} oy={-20} />         // ${t('pages.nesting.offsetY')}
  <Circle size={60} oy={10} ox={-20} /> // y+10, x-20
  <Circle size={60} oy={10} ox={20} />  // y+10, x+20
</Circle>

<Line sx={200} sy={75} ex={400} ey={75}>
  <Circle size={20} ox={-100} /> // ${t('pages.nesting.offsetX')}
</Line>`.trim()}
      </code>
    </div>
  </>
);

export default NestingDemo3;
