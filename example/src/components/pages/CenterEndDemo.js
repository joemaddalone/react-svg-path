import React from 'react';
import { translate as t } from '../../i18n/i18n';
import {
  Svg,
  Square,
  Circle,
  Text,
  Line,
  RadialLines,
  MarkerSquare,
  MarkerArrow,
  Quad
} from 'react-svg-path';

export const CenterEndDemo = () => {
  return (
    <>
      <h1>{t('pages.centerEnd.title')}</h1>
      <p dangerouslySetInnerHTML={{ __html: t('pages.centerEnd.intro') }} />
      <div>
        <Svg width={575} height={175} scale>
          <MarkerSquare id='marker-s' size={10} color='#999' />
          <MarkerArrow id='marker-a' size={10} color='red' />
          <Square
            fill='none'
            cx={250}
            cy={100}
            size={75}
            stroke='#222'
            centerEnd={false}
            markerEnd='url(#marker-s)'
          >
            <Circle size={10}>
              <Line
                ox={15}
                ex={75}
                ey={0}
                relative
                stroke='red'
                markerStart='url(#marker-a)'
              />
              <Text ox={100} oy={4}>
                {t('pages.centerEnd.circle')}
              </Text>
            </Circle>
          </Square>
          <Line
            sx={150}
            sy={60}
            ex={200}
            ey={60}
            stroke='red'
            markerEnd='url(#marker-a)'
          >
            <Text ox={-140} oy={4} attach='start'>
              {t('pages.centerEnd.square')}
            </Text>
          </Line>
        </Svg>
      </div>
      <div>
        <code>
          {`
<Svg width={575} height={175}>
  <MarkerSquare id='marker-s' size={10} color='#999' />
  <MarkerArrow id='marker-a' size={10} color='red' />
  <Square
    fill='none'
    cx={250}
    cy={100}
    size={75}
    stroke='#222'
    centerEnd={false}
    markerEnd='url(#marker-s)'
  >
    <Circle size={10}>
      <Line ox={15} ex={75} ey={0} relative stroke="red" markerStart='url(#marker-a)' />
      <Text ox={100} oy={4}>${t('pages.centerEnd.circle')}</Text>
    </Circle>
  </Square>
  <Line
    sx={150}
    sy={60}
    ex={200}
    ey={60}
    stroke='red'
    markerEnd='url(#marker-a)'
  >
    <Text ox={-140} oy={4} attach='start'>${t('pages.centerEnd.square')}</Text>
  </Line>
</Svg>        `.trim()}
        </code>
      </div>
      <div>
        <h2>{t('pages.centerEnd.another')}</h2>
        <Svg width={500} height={500} scale>
          <MarkerSquare id='ms' size={10} color='red' />
          <MarkerSquare id='mm' size={10} color='#999' />
          <MarkerSquare id='me' size={10} color='blue' />
          <MarkerArrow id='marker-explain-start' size={10} color='red' />
          <MarkerArrow id='marker-explain-end' size={10} color='blue' />
          <RadialLines
            cx={250}
            cy={250}
            innerSize={75}
            outerSize={200}
            points={12}
            stroke='#ccc'
            centerEnd={false}
            markerEnd='url(#me)'
            markerMid='url(#mm)'
            markerStart='url(#ms)'
          >
            <Quad
              oy={-40}
              cx={300}
              cy={50}
              ex={375}
              ey={125}
              stroke='red'
              fill='none'
              markerEnd='url(#marker-explain-start)'
            >
              <Text oy={15}>{t('pages.centerEnd.startingPoint')}</Text>
            </Quad>
            <Quad
              oy={-90}
              ox={-51}
              cx={125}
              cy={50}
              ex={75}
              ey={125}
              stroke='blue'
              fill='none'
              markerEnd='url(#marker-explain-end)'
            >
              <Text ox={-50} oy={15}>
                {t('pages.centerEnd.endingPoint')}
              </Text>
            </Quad>
          </RadialLines>
        </Svg>
      </div>
      <div>
        <code>
          {`
<Svg width={500} height={500}>
  <MarkerSquare id='ms' size={10} color='red' />
  <MarkerSquare id='mm' size={10} color='#999' />
  <MarkerSquare id='me' size={10} color='blue' />
  <MarkerArrow id='marker-explain-start' size={10} color='red' />
  <MarkerArrow id='marker-explain-end' size={10} color='blue' />
  <RadialLines
    cx={250}
    cy={250}
    innerSize={75}
    outerSize={200}
    points={12}
    stroke='#ccc'
    centerEnd={false}
    markerEnd='url(#me)'
    markerMid='url(#mm)'
    markerStart='url(#ms)'
  >
    <Quad
      oy={-40}
      cx={300}
      cy={50}
      ex={375}
      ey={125}
      stroke='red'
      fill='none'
      markerEnd='url(#marker-explain-start)'
    >
      <Text oy={15}>${t('pages.centerEnd.startingPoint')}</Text>
    </Quad>
    <Quad
      oy={-90}
      ox={-51}
      cx={125}
      cy={50}
      ex={75}
      ey={125}
      stroke='blue'
      fill='none'
      markerEnd='url(#marker-explain-end)'
    >
      <Text ox={-50} oy={15}>${t('pages.centerEnd.endingPoint')}</Text>
    </Quad>
  </RadialLines>
</Svg>`.trim()}
        </code>
      </div>
    </>
  );
};
