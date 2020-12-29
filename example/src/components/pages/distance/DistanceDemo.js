import React from 'react';
import { Svg, Distance } from 'react-svg-path';
import { translate as t } from '../../../i18n/i18n';
import './DistanceDemo.css';

export const DistanceDemo = () => {
  return (
    <>
      <h1>{t('pages.distance.title')}</h1>
      <p dangerouslySetInnerHTML={{ __html: t('pages.distance.intro') }}></p>
      <div>
        <h2>{t('pages.distance.pixelsDefault')}</h2>
        <p>{t('pages.distance.pixelsDefaultDescription')}</p>
        <Svg width={600} height={200} scale>
          <Distance sx={0} sy={150} ex={600} ey={150} />
          <Distance sx={150} sy={0} ex={150} ey={200} />
          <Distance sx={400} sy={0} ex={600} ey={200} />
        </Svg>
        <code>
          {`
<Svg width={600} height={200}>
  <Distance sx={0} sy={150} ex={600} ey={150} />
  <Distance sx={150} sy={0} ex={150} ey={200} />
  <Distance sx={400} sy={0} ex={600} ey={200} />
</Svg>`.trim()}
        </code>
      </div>
      <div>
        <h2>{t('pages.distance.color')}</h2>
        <p>{t('pages.distance.colorDescription')}</p>
        <Svg width={600} height={200} scale>
          <Distance sx={0} sy={150} ex={600} ey={150} color='red' />
          <Distance sx={150} sy={0} ex={150} ey={200} color='green' />
          <Distance sx={400} sy={0} ex={600} ey={200} color='blue' />
        </Svg>
        <code>
          {`
<Svg width={600} height={200}>
  <Distance sx={0} sy={150} ex={600} ey={150} color='red' />
  <Distance sx={150} sy={0} ex={150} ey={200} color='green' />
  <Distance sx={400} sy={0} ex={600} ey={200} color='blue' />
</Svg>`.trim()}
        </code>
      </div>
      <div>
        <h2>{t('pages.distance.dotted')}</h2>
        <p>{t('pages.distance.dottedDescription')}</p>
        <Svg width={600} height={200} scale>
          <Distance sx={0} sy={150} ex={600} ey={150} dotted />
          <Distance sx={150} sy={0} ex={150} ey={200} dotted />
          <Distance sx={400} sy={0} ex={600} ey={200} dotted />
        </Svg>
        <code>
          {`
<Svg width={600} height={200}>
  <Distance sx={0} sy={150} ex={600} ey={150} dotted />
  <Distance sx={150} sy={0} ex={150} ey={200} dotted />
  <Distance sx={400} sy={0} ex={600} ey={200} dotted />
</Svg>`.trim()}
        </code>
      </div>
      <div>
        <h2>{t('pages.distance.text')}</h2>
        <p>{t('pages.distance.textDescription')}</p>
        <Svg width={600} height={200} scale>
          <Distance sx={0} sy={150} ex={600} ey={150} text='world' />
          <Distance sx={150} sy={0} ex={150} ey={200} text='hello' />
          <Distance sx={400} sy={0} ex={600} ey={200} text='🔸' />
        </Svg>
        <code>
          {`
<Svg width={600} height={200}>
  <Distance sx={0} sy={150} ex={600} ey={150} text="world" />
  <Distance sx={150} sy={0} ex={150} ey={200} text="hello" />
  <Distance sx={400} sy={0} ex={600} ey={200} text="🔸" />
</Svg>`.trim()}
        </code>
      </div>

      <div>
        <h2>{t('pages.distance.markers')}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: t('pages.distance.markersDescription')
          }}
        />
        <Svg width={600} height={200} scale>
          <Distance sx={0} sy={150} ex={600} ey={150} markerEnd='arrow' />
          <Distance sx={150} sy={0} ex={150} ey={200} markerStart='triangle' />
          <Distance sx={400} sy={0} ex={600} ey={200} markers='arrow' />
        </Svg>
        <code>
          {`
<Svg width={600} height={200}>
  <Distance sx={0} sy={150} ex={600} ey={150} markerEnd='arrow' />
  <Distance sx={150} sy={0} ex={150} ey={200} markerStart='triangle' />
  <Distance sx={400} sy={0} ex={600} ey={200} markers='arrow' />
</Svg>`.trim()}
        </code>
      </div>

      <div>
        <h2>{t('pages.distance.scale')}</h2>
        <p>{t('pages.distance.scaleDescription')}</p>
        <Svg width={600} height={200} scale>
          <Distance
            sx={0}
            sy={150}
            ex={600}
            ey={150}
            scale={0.3}
            scaleUnit={'ft'}
          />
          <Distance
            sx={150}
            sy={0}
            ex={150}
            ey={200}
            scale={0.3}
            scaleUnit={'ft'}
          />
        </Svg>
        <code>
          {`
const svgWidth = 600;
const representedWidth = 180 // feet
const scale = representedWidth / svgWidth
const scaleUnit = 'ft'
<Svg width={600} height={200}>
  <Distance
    sx={0}
    sy={150}
    ex={600}
    ey={150}
    scale={scale}
    scaleUnit={scaleUnit}
  />
  <Distance
    sx={150}
    sy={0}
    ex={150}
    ey={200}
    scale={scale}
    scaleUnit={scaleUnit}
  />
</Svg>`.trim()}
        </code>
      </div>
    </>
  );
};
