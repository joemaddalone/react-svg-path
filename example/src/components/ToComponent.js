import React from 'react';
import Path, { Svg } from 'react-svg-path';

const Triangle = ({ x, y, w, h, ...rest }) => {
  const p = new Path();
  return p
    .M(x, y)
    .l(-w / 2, h)
    .right(w)
    .close()
    .toComponent(rest);
};

export const ToComponent = () => {
  return (
    <>
      <h2>Path.toComponent(props)</h2>
      <p>.toComponents returns a componentized path object.</p>
      <h3>Example</h3>
      <code>{`const Triangle = ({ x, y, w, h, ...rest }) => {
  const p = new Path();
  return p
    .M(x, y)
    .l(-w / 2, h)
    .right(w)
    .close()
    .toComponent(rest);
};`}</code>
      <p>
        By returning .toComponent in our Triangle component we have now created
        a re-usable building block for ourselves
      </p>
      <div>
      <Svg width={500} height={200}>
        <g transform="translate(125,0)">
        {['red', 'blue', 'green'].map((c, i) => (
          <Triangle key={c} x={i * 100} y={25} w={150} h={150} fill={c} />
        ))}
        </g>
      </Svg>
      </div>
      <code>
        {`
{['red', 'blue', 'green'].map((c, i) => (
  <Triangle key={c} x={i * 100} y={25} w={150} h={150} fill={c} />
))}`.trim()}
      </code>
    </>
  );
};
