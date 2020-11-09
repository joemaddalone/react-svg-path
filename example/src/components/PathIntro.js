import React from 'react';
const pathCommands = {
  primitives: [
    { cmd: 'A', args: 'rx,ry,rotation,arc,sweep,ex,ey' },
    { cmd: 'a', args: 'rx, ry,rotation,arc,sweep,ex,ey' },
    { cmd: 'C', args: 'cx1,cy1,cx2,cy2,ex,ey' },
    { cmd: 'c', args: 'cx1,cy1,cx2,cy2,ex,ey' },
    { cmd: 'H', args: 'x' },
    { cmd: 'h', args: 'x' },
    { cmd: 'L', args: 'x,y' },
    { cmd: 'l', args: 'x,y' },
    { cmd: 'M', args: 'x,y' },
    { cmd: 'm', args: 'x,y' },
    { cmd: 'Q', args: 'cx,cy,ex,ey' },
    { cmd: 'q', args: 'cx,cy,ex,ey' },
    { cmd: 'S', args: 'cx,cy,ex,ey' },
    { cmd: 's', args: 'cx,cy,ex,ey' },
    { cmd: 'T', args: 'ex,ey' },
    { cmd: 't', args: 'ex,ey' },
    { cmd: 'V', args: 'y' },
    { cmd: 'v', args: 'y' }
  ],
  friendly: [
    {
      cmd: 'arc',
      args: 'rx,ry,rotation,arc,sweep,ex,ey,relative = false',
      description:
        'relative is optional, its default is false. Setting relative to true is equivalent to a'
    },

    {
      cmd: 'cCurve',
      args: 'cx,cy,ex,ey,relative = false',
      description:
        'relative is optional, its default is false. Setting relative to true is equivalent to c'
    },

    {
      cmd: 'horizontalTo',
      args: 'x,relative = false',
      description:
        'relative is optional, its default is false. Setting relative to true is equivalent to h'
    },

    {
      cmd: 'verticalTo',
      args: 'x,relative = false',
      description:
        'relative is optional, its default is false. Setting relative to true is equivalent to v'
    },

    {
      cmd: 'lineTo',
      args: 'x,y,relative = false',
      description:
        'relative is optional, its default is false. Setting relative to true is equivalent to l'
    },

    {
      cmd: 'moveTo',
      args: 'x,y,relative = false',
      description:
        'relative is optional, its default is false. Setting relative to true is equivalent to m'
    },

    {
      cmd: 'qCurve',
      args: 'cx,cy,ex,ey,relative = false',
      description:
        'relative is optional, its default is false. Setting relative to true is equivalent to q'
    },

    {
      cmd: 'sCurveTo',
      args: 'cx,cy,ex,ey,relative = false',
      description:
        'relative is optional, its default is false. Setting relative to true is equivalent to s'
    },

    {
      cmd: 'tCurveTo',
      args: 'cx,cy,ex,ey,relative = false',
      description:
        'relative is optional, its default is false. Setting relative to true is equivalent to t	'
    }
  ],
  helpers: [
    {
      cmd: 'down',
      args: 'px',
      description: 'Draw line from current position down by px'
    },
    {
      cmd: 'up',
      args: 'px',
      description: 'Draw line from current position up by px'
    },
    {
      cmd: 'right',
      args: 'px',
      description: 'Draw line from current position right by px'
    },
    {
      cmd: 'left',
      args: 'px',
      description: 'Draw line from current position left by px'
    },
    {
      cmd: 'close',
      description:
        'Produces a "Z" command which draws a stright line back to the first point of the path.'
    }
  ],
  shapes: [
    {
      cmd: '.circle',
      args: 'size, cx, cy',
      description:
        '.circle is drawn from center points (cx & cy). The cursor is then moved to the center points.'
    },

    {
      cmd: '.ellipse',
      args: 'width, height, cx, cy',
      description:
        '.ellipse is drawn from center point (cx & cy). The cursor is then moved to the center point.'
    },

    {
      cmd: '.polygon',
      args: '[points]',
      description:
        '.polygon accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the first point - closing the shape.'
    },

    {
      cmd: '.polygram',
      args: 'size, points, cx, cy, vertexSkip = 2',
      description:
        '.polygram is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.  Skipping a vertex is what makes a polygram appear as intersecting lines, a vertexSkip of 1 will result in a regular polygon.'
    },

    {
      cmd: '.polyline',
      args: '[points], relative = false',
      description:
        '.polyline accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the last.  points can be absolute or relative.'
    },

    {
      cmd: '.radialLines',
      args: 'outerSize, innerSize, points, cx, cy',
      description:
        '.radialLines is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.'
    },

    {
      cmd: '.rect',
      args: 'width, height, cx, cy',
      description:
        '.rect is drawn from center point (cx & cy). The cursor is then moved to the center point.'
    },

    {
      cmd: '.regPolygon',
      args: 'size, sides, cx, cy',
      description:
        '.regPolygon is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.'
    },

    {
      cmd: '.sector',
      args: 'cx, cy, size, startAngle, endAngle',
      description:
        '.sector is drawn from center point (cx & cy). The cursor is then moved to the center point.'
    },

    {
      cmd: '.segment',
      args: 'cx, cy, size, startAngle, endAngle',
      description:
        '.segment is drawn from center point (cx & cy). The cursor is then moved to the center point.'
    },

    {
      cmd: '.square',
      args: 'size, cx, cy',
      description:
        '.square is drawn from center point (cx & cy). The cursor is then moved to the center point.'
    },

    {
      cmd: '.star',
      args: 'outerSize, innerSize, points, cx, cy',
      description:
        '.star is drawn from center point (cx & cy). The first outer point of the shape will always be at top center. The cursor is then moved to the center point.'
    },

    {
      cmd: '.triangle',
      args: 'size, cx, cy',
      description:
        '.triangle draws an equilateral triangle from center point (cx & cy). The cursor is then moved to the center point.  '
    }
  ]
};

export const PathIntro = () => {
  return (
    <>
      <h2>Path</h2>
      <p>
        This library wraps{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/joemaddalone/path'
        >
          https://github.com/joemaddalone/path
        </a>{' '}
        and further documentation can be found there. This library adds one
        additional rendering method to path.
        <br />
        <i>Path.toComponent(props)</i> returns a jsx function including
        attributes and props.
      </p>
      <h3>import</h3>
      <code>import Path from 'react-svg-path'</code>

      <h3>Example</h3>
      <code>{`<path d="M0 0, L0 100"></path>`}</code>

      <p>This path can be produced with:</p>

      <code>
        {`const path = new Path().M(0,0).L(0,100);
console.log(path.toString()) // M0 0, L0 100`}
      </code>

      <h3>Path Commands</h3>
      <p>
        For every svg path command there is an equivalent command available in
        path.
      </p>
      <ul>
        {pathCommands.primitives.map(({ cmd, args }, index) => {
          return (
            <li key={index}>
              <b>{cmd}</b>(<i>{args}</i>)
            </li>
          );
        })}
      </ul>
      <p>
        And then for most of these is there is a semantically named helper
        method. Not required, but for complex paths it may be easier to read for
        those not familiar with path commmands.
      </p>
      <ul>
        {pathCommands.friendly.map(({ cmd, args, description }, index) => {
          return (
            <li key={index}>
              <b>{cmd}</b>(<i>{args}</i>)
              <ul>
                <li>{description}</li>
              </ul>
            </li>
          );
        })}
      </ul>
      <p>Some additional path command helpers:</p>
      <ul>
        {pathCommands.helpers.map(({ cmd, args, description }, index) => {
          return (
            <li key={index}>
              <b>{cmd}</b>(<i>{args}</i>)
              <ul>
                <li>{description}</li>
              </ul>
            </li>
          );
        })}
      </ul>
      <p>Shapes:</p>
      <ul>
        {pathCommands.shapes.map(({ cmd, args, description }, index) => {
          return (
            <li key={index}>
              <b>{cmd}</b>(<i>{args}</i>)
              <ul>
                <li>{description}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};
