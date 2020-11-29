import React from 'react';
import NestingDemo1 from './NestingDemo1';
import NestingDemo2 from './NestingDemo2';
import NestingDemo3 from './NestingDemo3';
import { translate as t } from '../../../i18n/i18n';
export const Nesting = () => {
  return (
    <>
      <h1>{t('pages.nesting.title')}</h1>
      <div className='complex'>
        <p>{t('pages.nesting.intro')}</p>
        <NestingDemo1 />
        <NestingDemo2 />
        <NestingDemo3 />
      </div>
    </>
  );
};
