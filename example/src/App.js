import React from 'react';
import Path from 'react-svg-path';
import './App.css';

const Square = ({ x, y, size }) => {
  const path = new Path()
    .moveTo(x, y)
    .lineTo(x + size, y)
    .lineTo(x + size, y + size)
    .lineTo(x, y + size)
    .close()
    .stroke('red');
  return path.toElement();
};

/**
 *
 * Draws a circle using react-svg-path
 */
const Circle = ({ x, y, radius, fill }) => {
  const path = new Path()
    .M(x, y)
    .m(-radius, 0)
    .a(radius, radius, 0, 1, 0, radius * 2, 0)
    .a(radius, radius, 0, 1, 0, -(radius * 2), 0)
    .style({ fill });
  return path.toElement();
};

/**
 *
 * Draws a spack line using react-svg-path
 */
const SparkLine = ({ x, y, width, data }) => {
  const path = new Path().moveTo(x, y).stroke('purple').strokeWidth(2);
  const pointDistance = parseInt(width / data.length);
  data.forEach((val, index, arr) => {
    if (index !== 0) {
      const prev = arr[index - 1];
      path.l(pointDistance, prev - val);
    } else {
      path.l(0, -val);
    }
  });
  return path.toElement();
};

/**
 *
 * Draws a grid using react-svg-path
 */
const Grid = ({ x, y, width, height, cols, rows, close = true }) => {
  const lines = new Path().M(x, y);
  const extra = close ? 1 : 0;
  const colWidth = width / cols;
  const rowHeight = height / rows;
  Array.from({ length: cols + extra }).map((_, index) =>
    lines.M(x + index * colWidth, y).down(height)
  );
  Array.from({ length: rows + extra }).map((_, index) =>
    lines.M(x, y + index * rowHeight, y).right(width)
  );
  return <path d={lines.toString()} stroke='#eee' />;
};

const App = () => {
  const width = 500;
  const height = 500;
  return (
    <>
      <h2>react-svg-path</h2>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        <Grid x={0} y={0} width={width} height={height} cols={25} rows={25} />
        <g transform='translate(105,125)'>
          <Square x={50} y={50} size={50} />
          <Circle x={200} y={75} radius={50} fill='green' />
          <Circle x={215} y={90} radius={25} fill='white' />
          <Circle x={220} y={90} radius={15} fill='black' />
          <Circle x={215} y={80} radius={5} fill='white' />
          <SparkLine
            x={25}
            y={200}
            width={250}
            data={[0, 10, 5, 25, 15, 35, 5, 18, 50, 3, 25, 2, 35, 10]}
          />
        </g>
      </svg>
      <hr />
      <a href='https://github.com/joemaddalone/react-svg-path'>
        https://github.com/joemaddalone/react-svg-path
      </a>

      <h2 className='ui-header'>Getting started</h2>
      <code>npm install --save react-svg-path</code>
      <p>then in your own code:</p>
      <code>import Path from 'react-svg-path'</code>
      <p>
        react-svg-path is mostly helpful for building the commands needed for
        the "d" attribute of an svg path.
      </p>
      <p>
        Most methods are direct translations from the SVG Path specification.
      </p>
      <h4 class='ui-header'>Example</h4>
      <code>&lt;path d="M0 0, L0 100">&lt;/path></code>
      <b>This path can be produced with:</b>
      <code>
        const path = new Path().M(0,0).L(0,100);
      </code>
      <code>
      console.log(path.toString()) //
        M0 0, L0 100
      </code>
      <h3 class='ui-header'>Path Commands</h3>
      <p>
        So for every svg path command there is an equivalent command available
        in react-svg-path.
      </p>

      <ul>
        <li>
          <b>A</b>(<i>rx, ry, rotation, arc, sweep, ex, ey</i>)
        </li>
        <li>
          <b>a</b>(<i>rx, ry, rotation, arc, sweep, ex, ey</i>)
        </li>
        <li>
          <b>C</b>(<i>cx1, cy1, cx2, cy2, ex, ey</i>)
        </li>
        <li>
          <b>c</b>(<i>cx1, cy1, cx2, cy2, ex, ey</i>)
        </li>
        <li>
          <b>H</b>(<i>x</i>)
        </li>
        <li>
          <b>h</b>(<i>x</i>)
        </li>
        <li>
          <b>L</b>(<i>x, y</i>)
        </li>
        <li>
          <b>l</b>(<i>x, y</i>)
        </li>
        <li>
          <b>M</b>(<i>x, y</i>)
        </li>
        <li>
          <b>m</b>(<i>x, y</i>)
        </li>
        <li>
          <b>Q</b>(<i>cx, cy, ex, ey</i>)
        </li>
        <li>
          <b>q</b>(<i>cx, cy, ex, ey</i>)
        </li>
        <li>
          <b>S</b>(<i>cx, cy, ex, ey</i>)
        </li>
        <li>
          <b>s</b>(<i>cx, cy, ex, ey</i>)
        </li>
        <li>
          <b>T</b>(<i>ex, ey</i>)
        </li>
        <li>
          <b>t</b>(<i>ex, ey</i>)
        </li>
        <li>
          <b>V</b>(<i>y</i>)
        </li>
        <li>
          <b>v</b>(<i>y</i>)
        </li>
      </ul>
      <p>
        And then for most of these is there is a semantically named helper
        method. Not required, but for complex paths it may be easier to read for
        those not familiar with path commmands.
      </p>
      <ul>
        <li>
          <b>arc</b>(
          <i>rx, ry, rotation, arc, sweep, ex, ey, relative = false</i>)
          <ul>
            <li>
              relative is optional, its default is false. Setting relative to
              true is equivalent to <b>a</b>
            </li>
          </ul>
        </li>
        <li>
          <b>cCurveTo</b>(<i>cx, cy, ex, ey, relative = false</i>)
          <ul>
            <li>
              relative is optional, its default is false. Setting relative to
              true is equivalent to <b>c</b>
            </li>
          </ul>
        </li>
        <li>
          <b>horizontalTo</b>(<i>x, relative = false</i>)
          <ul>
            <li>
              relative is optional, its default is false. Setting relative to
              true is equivalent to <b>h</b>
            </li>
          </ul>
        </li>
        <li>
          <b>lineTo</b>(<i>x, y, relative = false</i>)
          <ul>
            <li>
              relative is optional, its default is false. Setting relative to
              true is equivalent to <b>l</b>
            </li>
          </ul>
        </li>
        <li>
          <b>moveTo</b>(<i>x, y, relative = false</i>)
          <ul>
            <li>
              relative is optional, its default is false. Setting relative to
              true is equivalent to <b>m</b>
            </li>
          </ul>
        </li>
        <li>
          <b>qCurveTo</b>(<i>cx, cy, ex, ey, relative = false</i>)
          <ul>
            <li>
              relative is optional, its default is false. Setting relative to
              true is equivalent to <b>q</b>
            </li>
          </ul>
        </li>
        <li>
          <b>sCurveTo</b>(<i>cx, cy, ex, ey, relative = false</i>)
          <ul>
            <li>
              relative is optional, its default is false. Setting relative to
              true is equivalent to <b>s</b>
            </li>
          </ul>
        </li>
        <li>
          <b>verticalTo</b>(<i>x, relative = false</i>)
          <ul>
            <li>
              relative is optional, its default is false. Setting relative to
              true is equivalent to <b>v</b>
            </li>
          </ul>
        </li>
      </ul>

      <p>Some additional path command helpers:</p>
      <ul>
        <li>
          <b>down</b>(<i>px</i>)
        </li>
        <ul>
          <li>Draw line from current position down by px</li>
        </ul>
        <li>
          <b>up</b>(<i>px</i>)
        </li>
        <ul>
          <li>Draw line from current position up by px</li>
        </ul>
        <li>
          <b>right</b>(<i>px</i>)
        </li>
        <ul>
          <li>Draw line from current position right by px</li>
        </ul>
        <li>
          <b>left</b>(<i>px</i>)
        </li>
        <ul>
          <li>Draw line from current position left by px</li>
        </ul>
        <li>
          <b>Down</b>(<i>px</i>)
        </li>
        <ul>
          <li>
            Draw line from current position down to an absolute position of px
          </li>
        </ul>
        <li>
          <b>Up</b>(<i>px</i>)
        </li>
        <ul>
          <li>
            Draw line from current position up to an absolute position of px
          </li>
        </ul>
        <li>
          <b>Right</b>(<i>px</i>)
        </li>
        <ul>
          <li>
            Draw line from current position right to an absolute position of px
          </li>
        </ul>
        <li>
          <b>Left</b>(<i>px</i>)
        </li>
        <ul>
          <li>
            Draw line from current position left to an absolute position of px
          </li>
        </ul>
      </ul>
      <p>One more path command helper</p>
      <ul>
        <li>
          <b>close</b>()
        </li>
        <ul>
          <li>
            Produces a "Z" command which draws a stright line back to the first
            point of the path.
          </li>
        </ul>
      </ul>

      <h3 class='ui-header'>Path Attributes</h3>
      <p>
        If you intend to output an actual path element ad not just the set of
        commands attrubtes can be set on the element using the <b>attr</b>{' '}
        helper.
      </p>
      <ul>
        <li>
          <b>attr</b>(<i>key, value</i>)
        </li>
        <ul>
          <li>
            example: attr('id', 'my-id') will result in &lt;path
            id="my-id">&lt;/path>
          </li>
        </ul>
      </ul>
      <p>Built-in attribute helpers</p>
      <ul>
        <li>
          <b>fill</b>(<i>val</i>)
        </li>
        <li>
          <b>stroke</b>(<i>val</i>)
        </li>
        <li>
          <b>strokeWidth</b>(<i>val</i>)
        </li>
        <li>
          <b>style</b>(<i>val</i>)
        </li>
      </ul>
      <h3 class='ui-header'>Rendering</h3>
      <p>
        Depending on your needs there are few ways to use the data generated by
        react-svg-path.
        <ul>
          <li>
            <b>toArray</b>
            <ul>
              <li>Returns an array of path commands</li>
            </ul>
          </li>
          <li>
            <b>toString</b>
            <ul>
              <li>Returns a string of path commands</li>
            </ul>
          </li>
          <li>
            <b>toElement</b>
            <ul>
              <li>Returns path jsx incuding attributes</li>
            </ul>
          </li>
          <li>
            <b>toComponent(key)</b>
            <ul>
              <li>same as toElement, but you can assign a key</li>
            </ul>
          </li>
        </ul>
      </p>
    </>
  );
};

export default App;