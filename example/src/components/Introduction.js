import React from 'react';
import DagNodes from './demos/dag/DagNodes';
import { Svg } from 'react-svg-path';
import Pie from './demos/complex/Pie';
import Donut from './demos/complex/Donut';
import SparkLine from './demos/complex/SparkLine';
import Football from './demos/complex/Football/Football'

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
  return (
    <>
      <h2>Introduction</h2>
      <p>react-svg-path makes composing svg elements dead simple.  Everything is a path.  Have fun.</p>
      <h3>Installation</h3>
      <code>npm i react-svg-path</code>
      <h2>Stuff</h2>
      <p>
        There are a lot of docs (always a work in progress), but here's some fun stuff made with react-svg-path.
      </p>
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
      <div className='complex flex items-center justify-around' style={{width: '800px'}}>
        <div className="flex flex-column items-center justify-center">
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
        <div className="flex flex-column items-center justify-center">
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
        <div style={{marginTop: 50}} className='complex flex flex-column'>
        <div className="flex flex-column">
        <SparkLine
          width={800}
          height={150}
          data={[-10, -45, 10, 0, 35, 10, -9, 25, 15, 75]}
        />
        <a
          href={`https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/complex/SparkLine.js`}
          rel='noopener noreferrer'
          target='_blank'
        >
          source
        </a>
        </div>
        <Football width={775} />
        <a
          href={`https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/complex/Football/Football.js`}
          rel='noopener noreferrer'
          target='_blank'
        >
          source
        </a>
      </div>
    </>
  );
};

export default Introduction;
