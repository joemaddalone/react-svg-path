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
      <Svg width={500} height={500}>
        {['red', 'blue', 'green'].map((c, i) => (
          <Triangle key={c} x={i * 200} y={250} w={200} h={200} fill={c} />
        ))}
      </Svg>
      <code>
        {`
{['red', 'blue', 'green'].map((c, i) => (
  <Triangle key={c} x={i * 50} y={250} w={100} h={100} fill={c} />
))}`.trim()}
      </code>
    </>
  );
};
