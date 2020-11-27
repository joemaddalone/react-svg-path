import React from 'react';
import DagNodes from './demos/dag/DagNodes';
import { Svg } from 'react-svg-path';
import Pie from './demos/complex/Pie';
import Donut from './demos/complex/Donut';
import SparkLine from './demos/complex/SparkLine';
import Bars from './demos/complex/Bars';
import Football from './demos/complex/Football/Football';
import Clock from './demos/complex/Clock';

const Introduction = () => {
  const pieData = [
    {
      color: '#086972',
      percent: 20,
      nested: [
        { color: 'rgba(0,100,25,0.9)', percent: 10 },
        { color: 'rgba(0,100,25,0.8)', percent: 10 }
      ]
    },
    {
      color: '#01a9b4',
      percent: 30,
      nested: [
        { color: 'rgba(0,100,25,0.7)', percent: 10 },
        { color: 'rgba(0,100,25,0.6)', percent: 10 },
        { color: 'rgba(0,100,25,0.5)', percent: 10 }
      ]
    },
    {
      color: '#87dfd6',
      percent: 50,
      nested: [
        { color: 'rgba(0,100,25,0.4)', percent: 25 },
        { color: 'rgba(0,100,25,0.3)', percent: 25 }
      ]
    }
  ];

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  const sparkData = Array.from({ length: 50 }).map(() => getRandomInt(-10, 10));

  return (
    <>
      <h2>Introduction</h2>
      <p>
        react-svg-path makes composing svg elements dead simple. Everything is a
        path. Have fun.
      </p>


      <h3>Installation</h3>
      <code>npm i react-svg-path</code>
      <h2>Stuff</h2>
      <p>
        There are a lot of docs (always a work in progress), but here's some fun
        stuff made with react-svg-path.
      </p>
      <div>
        <div className='dag'>
          <div style={{ margin: 20, display: 'flex', flexDirection: 'column' }}>
            <DagNodes />
            <a
              href='https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/dag/DagNodes.js'
              rel='noopener noreferrer'
              target='_blank'
            >
              source
            </a>
          </div>
        </div>
        <div style={{ margin: 20, display: 'flex', flexDirection: 'column' }}>
          <Bars />
          <a
            href='https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/complex/Bars.js'
            rel='noopener noreferrer'
            target='_blank'
          >
            source
          </a>
        </div>
      </div>
      <div
        className='complex flex items-center justify-around'
        style={{ width: '800px' }}
      >
        <div className='flex flex-column items-center justify-center'>
          <Svg width={160} height={160}>
            <Pie size={150} cx={80} cy={80} data={pieData} />
          </Svg>
          <a
            href={`https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/complex/Pie.js`}
            rel='noopener noreferrer'
            target='_blank'
          >
            source
          </a>
        </div>
        <div className='flex flex-column items-center justify-center'>
          <Svg width={160} height={160}>
            <Donut width={25} size={150} cx={80} cy={80} data={pieData} />
          </Svg>
          <a
            href={`https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/complex/Donut.js`}
            rel='noopener noreferrer'
            target='_blank'
          >
            source
          </a>
        </div>
        <Svg width={180} height={180}>
          <Pie size={130} cx={90} cy={90} data={pieData} />
          <Donut
            width={20}
            size={175}
            cx={90}
            cy={90}
            stroke='#fff'
            data={pieData.map((pd) => pd.nested).flat()}
          />
        </Svg>
      </div>
      <div style={{ marginTop: 50 }} className='complex flex flex-column'>
        <div className='flex flex-column'>
          <SparkLine width={800} height={100} data={sparkData} />
          <a
            href={`https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/complex/SparkLine.js`}
            rel='noopener noreferrer'
            target='_blank'
          >
            source
          </a>
        </div>
        <Football width={800} />
        <a
          href={`https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/complex/Football/Football.js`}
          rel='noopener noreferrer'
          target='_blank'
        >
          source
        </a>
      </div>
      <Clock size={400} />
      <a
        href={`https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/complex/Clock.js`}
        rel='noopener noreferrer'
        target='_blank'
      >
        source
      </a>
    </>
  );
};

export default Introduction;
