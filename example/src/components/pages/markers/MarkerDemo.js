import React, { useState } from 'react';
import {
  Svg,
  Polyline,
  Quad,
  Line,
  MarkerArrow,
  MarkerTriangle,
  MarkerLine,
  MarkerSquare
} from 'react-svg-path';
import demos from '../../../docs/demos';
import { translate as t } from '../../../i18n/i18n';

import './MarkerDemo.css';

const genPolylineZag = (centerY, length = 10, offsetY = 5, offsetX = 10) => {
  const ypoints = Array.from({ length }).map((p, i) => {
    return i % 2 === 0 ? centerY - offsetY : centerY + offsetY;
  });
  const points = ypoints.map((y, i) => {
    return [offsetX * i, y];
  });

  return points;
};

const MarkerSelector = ({ label, onChange, id }) => {
  return (
    <div className='field'>
      <label htmlFor={id}>{label}</label>
      <select id={id} className='ui dropdown' onChange={onChange}>
        <option value={null}>None</option>
        <option value='marker-arrow'>&lt;MarkerArrow&gt;</option>
        <option value='marker-triangle'>&lt;MarkerTriangle&gt;</option>
        <option value='marker-line'>&lt;MarkerLine&gt;</option>
        <option value='marker-square'>&lt;MarkerSquare&gt;</option>
      </select>
    </div>
  );
};

export const MarkerDemo = () => {
  const [startMarker, setStartMarker] = useState(null);
  const [endMarker, setEndMarker] = useState(null);
  const [midMarker, setMidMarker] = useState(null);
  const markerStart = (e) => {
    setStartMarker(e.target.value);
  };
  const markerEnd = (e) => {
    setEndMarker(e.target.value);
  };
  const markerMid = (e) => {
    setMidMarker(e.target.value);
  };
  const quadDemo = { ...demos.curves.quad[0] };
  delete quadDemo.svgDimensions;
  return (
    <>
      <h1>{t('pages.markers.title')}</h1>
      <p>{t('pages.markers.intro')}</p>
      <div>
        <Svg width={260} height={225} scale>
          <MarkerArrow id='marker-arrow' />
          <MarkerTriangle id='marker-triangle' />
          <MarkerLine id='marker-line' strokeWidth={3} />
          <MarkerSquare id='marker-square' size={8} />
          <g transform='translate(10,10)'>
            <Quad
              {...quadDemo}
              stroke='#222'
              fill='none'
              markerEnd={`url(#${endMarker})`}
              markerStart={`url(#${startMarker})`}
              markerMid={`url(#${midMarker})`}
            />
            <Line
              sx={10}
              sy={100}
              ex={225}
              ey={100}
              stroke='#222'
              markerEnd={`url(#${endMarker})`}
              markerStart={`url(#${startMarker})`}
            />
            <Polyline
              fill='none'
              stroke='#222'
              points={genPolylineZag(150, 6, 25, 45)}
              markerEnd={`url(#${endMarker})`}
              markerStart={`url(#${startMarker})`}
            />
          </g>
        </Svg>
        <div className='ui form' style={{ width: 250, marginLeft: 10 }}>
          <MarkerSelector
            id='start'
            label={t('pages.markers.startLabel')}
            onChange={markerStart}
          />
          <MarkerSelector
            id='end'
            label={t('pages.markers.endLabel')}
            onChange={markerEnd}
          />
          <MarkerSelector
            id='mid'
            label={t('pages.markers.midLabel')}
            onChange={markerMid}
          />
        </div>
      </div>
      <div>
        <h2>{t('pages.markers.usage')}</h2>
        <code>
          {`<svg>
  <Marker[Arrow|Line|Triangle|Square] id="my-marker-id" />
  <Line
    sx={10}
    sy={100}
    ex={225}
    ey={100}
    markerStart="url(#my-marker-id)"
    markerEnd="url(#my-marker-id)"
/>
</svg>`.trim()}
        </code>
      </div>
      <div>
        <h2>&lt;MarkerArrow></h2>
        <p dangerouslySetInnerHTML={{ __html: t('pages.markers.arrow') }} />
      </div>
      <div>
        <h2>&lt;MarkerTriangle></h2>
        <p dangerouslySetInnerHTML={{ __html: t('pages.markers.triangle') }} />
      </div>
      <div>
        <h2>&lt;MarkerSquare></h2>
        <p dangerouslySetInnerHTML={{ __html: t('pages.markers.square') }} />
      </div>
      <div>
        <h2>&lt;MarkerLine></h2>
        <p dangerouslySetInnerHTML={{ __html: t('pages.markers.line') }} />
      </div>
    </>
  );
};
