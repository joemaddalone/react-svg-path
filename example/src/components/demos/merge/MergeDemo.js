import React from 'react';
import { Svg, RegPolygon, Circle, Square, PathMerge } from 'react-svg-path';
import './MergeDemo.css';

const MergeDemo = () => (
  <>
    <h3>PathMerge example</h3>
    <p>As shown previously we can compose our paths from multiple components</p>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Svg width={200} height={200} className='nesting-example-1'>
        <RegPolygon size={120} sides={4} cx={100} cy={100} />
        <Circle size={55} cx={100} cy={100} />
        <Square size={60} cx={100} cy={100} />
      </Svg>
      <div>
        <code>
          {`
<RegPolygon size={120} sides={4} cx={100} cy={100} />
<Circle size={55} cx={100} cy={100} />
<Square size={60} cx={100} cy={100} />
`.trim()}
        </code>
      </div>
    </div>
    <p>The resulting output of the above looks like this</p>
    <code>
      {`
<path d="...RegPolygon path data" />
<path d="...Circle path data" />
<path d="...Square path data" />
`.trim()}
    </code>
    <p>However we can wrap these components in &lt;PathMerge></p>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Svg width={200} height={200} className='nesting-example-1'>
        <PathMerge>
          <RegPolygon size={120} sides={4} cx={100} cy={100} />
          <Circle size={55} cx={100} cy={100} />
          <Square size={60} cx={100} cy={100} />
        </PathMerge>
      </Svg>
      <div>
        <code>
          {`
<PathMerge>
  <RegPolygon size={120} sides={4} cx={100} cy={100} />
  <Circle size={55} cx={100} cy={100} />
  <Square size={60} cx={100} cy={100} />
</PathMerge>
`.trim()}
        </code>
      </div>
    </div>
    <p>
      The resulting output is a single path where all path data has been
      combined.
    </p>
    <p>This is also possible with nested elements</p>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Svg width={200} height={200} className='nesting-example-1'>
        <PathMerge>
          <RegPolygon size={120} sides={4} cx={100} cy={100}>
            <Circle size={55} />
            <Square size={60} />
            <Circle size={25} cy={58} />
          </RegPolygon>
          <Circle size={10} cx={100} cy={100} />
        </PathMerge>
      </Svg>
      <div>
        <code>
          {`
<PathMerge>
  <RegPolygon size={120} sides={4} cx={100} cy={100}>
    <Circle size={55} />
    <Square size={60} />
    <Circle size={25} cy={58} />
  </RegPolygon>
  <Circle size='10' cx={100} cy={100} />
</PathMerge>
`.trim()}
        </code>
      </div>
    </div>
  </>
);

export default MergeDemo;
