import React from 'react';
import { Svg, Circle, Rect } from 'react-svg-path';
import { translate as t } from '../../i18n/i18n';
import './Introduction.css';

export const Introduction = () => {
  return (
    <>
      <h1>{t('pages.introduction.title')}</h1>
      <p>{t('pages.introduction.intro')}</p>

      <h2>{t('pages.introduction.installation')}</h2>
      <code>npm i react-svg-path</code>

      <h2>{'Overview'}</h2>
      <p>{t('pages.introduction.overview')}</p>

      <p>{t('pages.introduction.overviewExample')}</p>
      <div>
        <Svg width={100} height={100}>
          <Circle size={50} fill='none' stroke='red'>
            <Rect width={30} height={10} fill='none' stroke='red' />
          </Circle>
        </Svg>
        <p>{t('pages.introduction.overviewExampleDescription')}</p>
        <h4>{t('pages.introduction.startSvg')}</h4>
        <code>
          {`<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>`}
        </code>
        <h4>{t('pages.introduction.addSvgCircle')}</h4>
        <code>
          {`<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx={50} cy={50} r={25} fill="none" stroke="red" />
</svg>`}
        </code>
        <svg width={100} height={100}>
          <circle cx={50} cy={50} r={25} fill='none' stroke='red' />
        </svg>
        <h4>{t('pages.introduction.addSvgRect')}</h4>
        <code>
          {`<svg width={100} height={100}>
  <circle cx={50} cy={50} r={25} fill="none" stroke="red" />
  <rect x={35} y={45} width={30} height={10} fill="none" stroke="red"  />
</svg>`}
        </code>
        <svg width={100} height={100}>
          <circle cx={50} cy={50} r={25} fill='none' stroke='red' />
          <rect x={35} y={45} width={30} height={10} fill='none' stroke='red' />
        </svg>
        <p>{t('pages.introduction.endSvg')}</p>
        <h2>{t('pages.introduction.buildWithRSP')}</h2>
        <code>{`<Svg width={100} height={100}>
  <Circle size={50} fill='none' stroke='red'>
    <Rect width={30} height={10} stroke='red' />
  </Circle>
</Svg>`}</code>
        <Svg width={100} height={100}>
          <Circle size={50} fill='none' stroke='red'>
            <Rect width={30} height={10} fill='none' stroke='red' />
          </Circle>
        </Svg>
        <p>{t('pages.introduction.benefit')}</p>
        <p>{t('pages.introduction.learnMore')}</p>
      </div>
    </>
  );
};
