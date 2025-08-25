import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as R from '../dist/esm/index.js';
import { basicShapes, curves } from '../src/docs/docs.mjs';
import demos from '../src/docs/demos.mjs';
import fs from 'fs';
import { resolve } from 'path';

// console.log('R', R.Svg);

const Svg = R.Svg;
const docPath = resolve('../examples') + '/';

const docs = { ...basicShapes, ...curves };
const dems = { ...demos.basicShapes, ...demos.curves };

for (const doc in docs) {
  const C = R[docs[doc].Component];
  const { svgDimensions, ...rest } = dems[doc][0];
  const rendered = React.createElement(
    Svg,
    { width: svgDimensions.w, height: svgDimensions.h, scale: true },
    React.createElement(C, {
      ...rest,
      stroke: '#0e98dd',
      strokeWidth: '1',
      fill: 'none'
    })
  );
  fs.writeFile(
    docPath + doc + '.svg',
    renderToStaticMarkup(rendered),
    (err) => {
      // eslint-disable-next-line no-undef
      console.log('ERR', err);
    }
  );
}
