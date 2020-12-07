import React from 'react';
import { Svg, Rect, Text } from 'react-svg-path';
import { translate as t } from '../../../i18n/i18n';
import './TextDemo.css';

export const TextDemo = () => {
  return (
    <>
      <h1>{t('pages.text.title')}</h1>
      <p dangerouslySetInnerHTML={{ __html: t('pages.text.intro') }}></p>
      <div className='flex flex-column'>
        <Svg width={500} height={500}>
          <Rect stroke='green' fill='none' width={250} height={150}>
            <Text ox={-125} y={200} wrap={300}>
              {t('pages.text.exampleText')} {t('pages.text.exampleText')}{' '}
              {t('pages.text.exampleText')} {t('pages.text.exampleText')}
            </Text>
          </Rect>
        </Svg>
      </div>
      <code>{`<Svg width={100} height={100} />}`}</code>
    </>
  );
};
