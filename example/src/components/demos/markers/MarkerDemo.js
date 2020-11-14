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

const MarkerSelector = ({ label, onChange }) => {
  return (
    <div className='field'>
      <label>{label}</label>
      <select className='ui dropdown' onChange={onChange}>
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
  return (
    <>
      <h2>Markers</h2>
      <p>
        Markers can be added to end, middle, or start points of any path.  Markers will "point" in the direction and angle of the path.
      </p>
      <div className='flex'>
        <Svg width={260} height={225}>
          <MarkerArrow id='marker-arrow' />
          <MarkerTriangle id='marker-triangle' />
          <MarkerLine id='marker-line' size={30} strokeWidth={3} />
          <MarkerSquare id="marker-square" size={8} />
          <g transform='translate(10,10)'>
            <Quad
              {...demos.curves.quad[0]}
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
          <MarkerSelector label='Marker start' onChange={markerStart} />
          <MarkerSelector label='Marker end' onChange={markerEnd} />
          <MarkerSelector label='Marker mid' onChange={markerMid} />
        </div>
      </div>
      <div>
        <h3>Basic Usage</h3>
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
        <h3>&lt;MarkerArrow></h3>
        <p>Accepts any svg path attribute properties</p>
      </div>
      <div>
        <h3>&lt;MarkerTriangle></h3>
        <p>Accepts any svg path attribute properties</p>
      </div>
      <div>
        <h3>&lt;MarkerSquare></h3>
        <p>Accepts any svg path attribute properties & a <b>size</b> prop</p>
      </div>
      <div>
        <h3>&lt;MarkerLine></h3>
        <p>Accepts any svg path attribute properties & a <b>size</b> prop</p>
      </div>
    </>
  );
};
