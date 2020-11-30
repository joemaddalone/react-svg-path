import React from 'react';
import { Svg, Circle, Line, Text } from 'react-svg-path';
import { translate as t } from '../../../i18n/i18n';
import './SvgDemo.css';

export const SvgDemo = () => {
  return (
    <>
      <h1>{t('pages.svg.title')}</h1>
      <p dangerouslySetInnerHTML={{ __html: t('pages.svg.intro') }}></p>
      <div>
        <Svg width={100} height={100} />
      </div>
      <code>{`<Svg width={100} height={100} />}`}</code>
      <div className='flex flex-column'>
        <h2>{t('pages.svg.oneFeature')}</h2>
        <p>{t('pages.svg.nesting')}</p>
        <Svg width={500} height={250}>
          <Circle size={25} fill='none' stroke='#000' />
          <Line ox={12.5} ex={300} ey={125} stroke='red'>
            <Text ox={5} oy={4} fill='red'>
              {t('pages.svg.exampleText')}
            </Text>
          </Line>
        </Svg>
        <code>
          {`
<Svg width={500} height={250}>
  <Circle size={25} fill='none' stroke='#000' />
  <Line ox={12.5} ex={300} ey={125} stroke='red'>
    <Text ox={5} oy={4} fill='red'>
      ${t('pages.svg.exampleText')}
    </Text>
  </Line>
</Svg>`.trim()}
        </code>
      </div>
    </>
  );
};
