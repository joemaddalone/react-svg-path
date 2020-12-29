import React from 'react';
import { Svg, Circle, Line, Text, Distance } from 'react-svg-path';
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
      <div>
        <h2>{t('pages.svg.nesting')}</h2>
        <p>{t('pages.svg.nestingDescription')}</p>
        <Svg width={500} height={250} className="svg-demo-svg" scale>
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
      <div>
        <h2>{t('pages.svg.responsive')}</h2>
        <p>{t('pages.svg.responsiveDescription')}</p>
        <p>{t('pages.svg.notResponsiveExample')}</p>
        <Svg width={1000} height={250} className="svg-demo-svg">
          <Distance
            sx={0}
            ex={1000}
            ey={125}
            markers='arrow'
            stroke='#000'
          />
          <Circle
            size={60}
            fill='none'
            stroke='#000'
          />
        </Svg>
        <p>{t('pages.svg.responsiveExample')}</p>
        <Svg width={1000} height={250} scale className="svg-demo-svg">
          <Distance
            sx={0}
            ex={1000}
            ey={125}
            markers='arrow'
            stroke='#000'
          />
          <Circle
            size={60}
            fill='none'
            stroke='#000'
          />
        </Svg>
        <code>
          {`
<Svg width={1000} height={250} scale className="svg-demo-svg">
  <Distance
    sx={0}
    ex={1000}
    ey={125}
    markers='arrow'
    stroke='#000'
  />
  <Circle
    size={60}
    fill='none'
    stroke='#000'
  />
</Svg>`.trim()}
        </code>
      </div>
    </>
  );
};
