import React from 'react';
import { Arc, Svg } from 'react-svg-path';

export const ArcDemo = () => (
  <>
    <h3>Arc</h3>
    <code>
      {`
<Arc
  sx={number}
  sy={number}
  rx={number}
  ry={number}
  rotation={number}
  arc={number}
  sweep={number}
  ex={number}
  ey={number}
/>
      `.trim()}
    </code>
    <p>
      Arc is drawn...
    </p>
    <Svg width={80} height={80}>
      <Arc sx={10} sy={40} rx={50} ry={85} rotation={0} arc={0} sweep={1} ex={70} ey={40} />
    </Svg>
  </>
);

ArcDemo.displayName = 'Arc';
