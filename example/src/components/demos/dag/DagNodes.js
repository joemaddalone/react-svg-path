import React, { useState } from 'react';
import Path, { Circle, Square, Svg, Text } from 'react-svg-path';
import dagSetup from './dagSetup';
import './dag.css';

const DagNodes = () => {
  const [dir, setDir] = useState('BT');
  const onChangeValue = (e) => {
    setDir(e.target.value);
  };

  const dag = dagSetup(dir);
  const createConnectors = () => {
    const { edges } = dag;
    const p = new Path();
    edges.forEach(({ points, x, y }) => {
      const m = points.shift();
      p.M(m.x, m.y);
      points.forEach((point) => p.L(point.x, point.y));
    });

    return p.toString();
  };

  const squareNodes = dag.nodes.slice(0, 5);
  const circleNodes = dag.nodes.slice(5);

  return (
    <div>
      <div className='ui form'>
        <div className='inline fields'>
          <div className='field'>
            <div className='ui radio checkbox'>
              <input
                id='bt'
                type='radio'
                name='dir'
                value='BT'
                checked={dir === 'BT'}
                tabIndex='0'
                className='hidden'
                onChange={onChangeValue}
              />
              <label htmlFor='bt'>Top to Bottom</label>
            </div>
          </div>
          <div className='field'>
            <div className='ui radio checkbox'>
              <input
                id='tb'
                type='radio'
                name='dir'
                value='TB'
                checked={dir === 'TB'}
                tabIndex='0'
                className='hidden'
                onChange={onChangeValue}
              />
              <label htmlFor='tb'>Bottom to Top</label>
            </div>
          </div>
        </div>
      </div>
      <Svg width={dag.graph.width} height={dag.graph.height} scale>
        <path stroke='#222' strokeWidth={1} d={createConnectors()} />
        {squareNodes.map(({ x, y, width }, index) => {
          return (
            <Square
              className='node square'
              key={index}
              cx={x}
              cy={y}
              size={width}
              onClick={() => alert(`clicked node #${index}`)}
            >
              <Text
                oy={2}
                dominantBaseline='middle'
                textAnchor='middle'
                fill='#fff'
              >
                {index}
              </Text>
            </Square>
          );
        })}
        {circleNodes.map(({ x, y, width }, index) => {
          return (
            <Circle
              key={index}
              cx={x}
              cy={y}
              size={width}
              className='node circle'
              onClick={() => alert(`clicked node #${index + 5}`)}
            >
              <Text
                oy={2}
                dominantBaseline='middle'
                textAnchor='middle'
                fill='#fff'
              >
                {index + 5}
              </Text>
            </Circle>
          );
        })}
      </Svg>
    </div>
  );
};

export default DagNodes;
