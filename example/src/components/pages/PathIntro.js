import React from 'react';
import { translate as t } from '../../i18n/i18n';
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
      description: t('pages.path.commands.arc.description')
    },

    {
      cmd: 'cCurve',
      args: 'cx,cy,ex,ey,relative = false',
      description: t('pages.path.commands.cCurve.description')
    },

    {
      cmd: 'horizontalTo',
      args: 'x,relative = false',
      description: t('pages.path.commands.horizontalTo.description')
    },

    {
      cmd: 'verticalTo',
      args: 'x,relative = false',
      description: t('pages.path.commands.verticalTo.description')
    },

    {
      cmd: 'lineTo',
      args: 'x,y,relative = false',
      description: t('pages.path.commands.lineTo.description')
    },

    {
      cmd: 'moveTo',
      args: 'x,y,relative = false',
      description: t('pages.path.commands.moveTo.description')
    },

    {
      cmd: 'qCurve',
      args: 'cx,cy,ex,ey,relative = false',
      description: t('pages.path.commands.qCurve.description')
    },

    {
      cmd: 'sCurveTo',
      args: 'cx,cy,ex,ey,relative = false',
      description: t('pages.path.commands.sCurveTo.description')
    },

    {
      cmd: 'tCurveTo',
      args: 'cx,cy,ex,ey,relative = false',
      description: t('pages.path.commands.tCurveTo.description')
    }
  ],
  helpers: [
    {
      cmd: 'down',
      args: 'px',
      description: t('pages.path.commands.down.description')
    },
    {
      cmd: 'up',
      args: 'px',
      description: t('pages.path.commands.up.description')
    },
    {
      cmd: 'right',
      args: 'px',
      description: t('pages.path.commands.right.description')
    },
    {
      cmd: 'left',
      args: 'px',
      description: t('pages.path.commands.left.description')
    },
    {
      cmd: 'close',
      description: t('pages.path.commands.close.description')
    }
  ],
  shapes: [
    {
      cmd: '.circle',
      args: 'size, cx, cy',
      description: t('pages.path.commands.circle.description')
    },

    {
      cmd: '.ellipse',
      args: 'width, height, cx, cy',
      description: t('pages.path.commands.ellipse.description')
    },

    {
      cmd: '.polygon',
      args: '[points]',
      description: t('pages.path.commands.polygon.description')
    },

    {
      cmd: '.polygram',
      args: 'size, points, cx, cy, vertexSkip = 2',
      description: t('pages.path.commands.polygram.description')
    },

    {
      cmd: '.polyline',
      args: '[points], relative = false',
      description: t('pages.path.commands.polyline.description')
    },

    {
      cmd: '.radialLines',
      args: 'outerSize, innerSize, points, cx, cy',
      description: t('pages.path.commands.radialLines.description')
    },

    {
      cmd: '.rect',
      args: 'width, height, cx, cy',
      description: t('pages.path.commands.rect.description')
    },

    {
      cmd: '.regPolygon',
      args: 'size, sides, cx, cy',
      description: t('pages.path.commands.regPolygon.description')
    },

    {
      cmd: '.sector',
      args: 'cx, cy, size, startAngle, endAngle',
      description: t('pages.path.commands.sector.description')
    },

    {
      cmd: '.segment',
      args: 'cx, cy, size, startAngle, endAngle',
      description: t('pages.path.commands.segment.description')
    },

    {
      cmd: '.square',
      args: 'size, cx, cy',
      description: t('pages.path.commands.square.description')
    },

    {
      cmd: '.star',
      args: 'outerSize, innerSize, points, cx, cy',
      description: t('pages.path.commands.star.description')
    },

    {
      cmd: '.triangle',
      args: 'size, cx, cy',
      description: t('pages.path.commands.triangle.description')
    }
  ]
};

export const PathIntro = () => {
  return (
    <>
      <h1>{t('pages.path.title')}</h1>
      <p dangerouslySetInnerHTML={{ __html: t('pages.path.intro') }} />

      <h2>{t('common.import')}</h2>
      <code>import Path from 'react-svg-path'</code>

      <h2>{t('common.example')}</h2>
      <code>{`<path d="M0 0, L0 100"></path>`}</code>

      <p>{t('pages.path.example')}</p>

      <code>
        {`const path = new Path().M(0,0).L(0,100);
console.log(path.toString()) // M0 0, L0 100`}
      </code>

      <h2>{t('pages.path.pathCommands')}</h2>
      <p>{t('pages.path.pathCommandsIntro')}</p>
      <ul>
        {pathCommands.primitives.map(({ cmd, args }, index) => {
          return (
            <li key={index}>
              <b>{cmd}</b>(<i>{args}</i>)
            </li>
          );
        })}
      </ul>
      <p>{t('pages.path.pathHelpers')}</p>
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
      <p>{t('pages.path.pathAdditionalHelpers')}</p>
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
      <p>{t('pages.path.shapes')}</p>
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
