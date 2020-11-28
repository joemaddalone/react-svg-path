import React from 'react';
import { Svg, TextPath, Circle, Quad } from 'react-svg-path';
import { translate as t } from '../../../i18n/i18n';
import './TextPathDemo.css';

export const TextPathDemo = () => {
  const exampleText = t('pages.textPath.exampleText');
  return (
    <>
      <h2>{t('pages.textPath.title')}</h2>
      <p>{t('pages.textPath.intro')}</p>
      <div className='text-path flex flex-column'>
        <h3>With existing components</h3>
        <p>{t('pages.textPath.withCircle')}</p>
        <Svg width={500} height={250}>
          <TextPath id='my-path' path={<Circle cx={250} cy={125} size={125} />}>
            {exampleText}
          </TextPath>
        </Svg>
        <code>
          {`
<Svg width={500} height={250}>
  <TextPath id='my-path' path={<Circle cx={250} cy={125} size={125} />}>
    ${exampleText}
  </TextPath>
</Svg>`.trim()}
        </code>
        <p>{t('pages.textPath.withQuad')}</p>
        <Svg width={500} height={200}>
          <TextPath
            startOffset={20}
            path={
              <Quad
                sx={0}
                sy={100}
                cx={50}
                cy={0}
                ex={100}
                ey={100}
                t={[
                  [100, 0],
                  [100, 0],
                  [100, 0],
                  [100, 0]
                ]}
                fill='none'
              />
            }
          >
            {exampleText} {exampleText}
          </TextPath>
        </Svg>
        <code>
          {`
<Svg width={500} height={200}>
  <TextPath
    startOffset={20}
    path={
      <Quad
        sx={0}
        sy={100}
        cx={50}
        cy={0}
        ex={100}
        ey={100}
        t={[
          [100, 0],
          [100, 0],
          [100, 0],
          [100, 0]
        ]}
        fill='none'
      />
    }
  >
    ${t}
    ${t}
  </TextPath>
</Svg>`.trim()}
        </code>
        <h3>{t('pages.textPath.withCustom')}</h3>
        <p>{t('pages.textPath.withCustomDescription')}</p>
        <Svg width={500} height={250}>
          <TextPath
            textLength={450}
            path='M25,100 h150 q25 0 40 50 t50 50 t50 -50 v-100'
          >
            {'→'.repeat(25)}
          </TextPath>
        </Svg>
        <code>
          {`
<Svg width={500} height={250}>
  <TextPath
    textLength={450}
    path='M25 100 h150 q25 0 40 50 t50 50 t50 -50 v-100'
  >
    {"→".repeat(20)}
  </TextPath>
</Svg>`.trim()}
        </code>
      </div>
    </>
  );
};
