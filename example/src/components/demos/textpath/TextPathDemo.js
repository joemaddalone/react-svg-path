import React from 'react';
import { Svg, TextPath, Circle, Quad } from 'react-svg-path';
import './TextPathDemo.css';

const t = 'This is a thing.  There are many like it, but this one is mine.';

export const TextPathDemo = () => {
  return (
    <>
      <h2>TextPath</h2>
      <p>
        You can use the TextPath component to have text follow a specific path.
        The path can be made from any existing path components or your own.
      </p>
      <div className='text-path flex flex-column'>
        <h3>With existing components</h3>
        <p>
          Here we've used a &lt;Circle> component as the path. We also passed in
          an optional "id" value so we can reference the path later if we need
          to. Otherwise an id will be generated for you.
        </p>
        <Svg width={500} height={250}>
          <TextPath id='my-path' path={<Circle cx={250} cy={125} size={125} />}>
            {t}
          </TextPath>
        </Svg>
        <code>
          {`
<Svg width={500} height={250}>
  <TextPath id='my-path' path={<Circle cx={250} cy={125} size={125} />}>
    ${t}
  </TextPath>
</Svg>`.trim()}
        </code>
        <p>Here we've used a &lt;Quad> component as the path.</p>
        <Svg width={500} height={200}>
          <TextPath
            startOffset={20}
            path={
              <Quad
                sx={0}
                sy={100}
                cx={50}
                cy={0}
                ex={100}
                ey={100}
                t={[
                  [100, 0],
                  [100, 0],
                  [100, 0],
                  [100, 0]
                ]}
                fill='none'
              />
            }
          >
            {t} {t}
          </TextPath>
        </Svg>
        <code>
          {`
<Svg width={500} height={200}>
  <TextPath
    startOffset={20}
    path={
      <Quad
        sx={0}
        sy={100}
        cx={50}
        cy={0}
        ex={100}
        ey={100}
        t={[
          [100, 0],
          [100, 0],
          [100, 0],
          [100, 0]
        ]}
        fill='none'
      />
    }
  >
    ${t}
    ${t}
  </TextPath>
</Svg>`.trim()}
        </code>
        <h3>With a custom path</h3>
        <p>Here we've passed in our own path commands as the path.</p>
        <Svg width={500} height={250}>
          <TextPath
            textLength={450}
            path='M25,100 h150 q25 0 40 50 t50 50 t50 -50 v-100'
          >
            {"→".repeat(25)}
          </TextPath>
        </Svg>
        <code>
          {`
<Svg width={500} height={250}>
  <TextPath
    textLength={450}
    path='M25 100 h150 q25 0 40 50 t50 50 t50 -50 v-100'
  >
    {"→".repeat(20)}
  </TextPath>
</Svg>`.trim()}
        </code>
      </div>
    </>
  );
};
