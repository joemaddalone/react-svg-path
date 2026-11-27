import type Path from '../components/path/Path';
import type { BBoxAnchor } from '../types/shapes/common';

const BBOX_ANCHORS: ReadonlySet<string> = new Set<BBoxAnchor>([
  'top',
  'bottom',
  'left',
  'right',
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'center'
]);

const resolveBBoxAnchor = (
  anchor: BBoxAnchor,
  path: Path
): { x: number; y: number } => {
  const { minX, minY, maxX, maxY, width, height } = path.getBBox();
  const midX = minX + width / 2;
  const midY = minY + height / 2;

  switch (anchor) {
    case 'top':
      return { x: midX, y: minY };
    case 'bottom':
      return { x: midX, y: maxY };
    case 'left':
      return { x: minX, y: midY };
    case 'right':
      return { x: maxX, y: midY };
    case 'topLeft':
      return { x: minX, y: minY };
    case 'topRight':
      return { x: maxX, y: minY };
    case 'bottomLeft':
      return { x: minX, y: maxY };
    case 'bottomRight':
      return { x: maxX, y: maxY };
    case 'center':
    default:
      return { x: midX, y: midY };
  }
};

const attach = (
  childProps: any,
  sx: number,
  sy: number,
  ex: number,
  ey: number,
  path?: Path,
  isShapeChild = true
) => {
  const {
    attach = 'end',
    ox = 0,
    oy = 0,
    orientToPath = false,
    ...restOfChildProps
  } = childProps;

  let baseX = ex;
  let baseY = ey;
  let tangentAngle: number | undefined;

  if (attach === 'start') {
    baseX = sx;
    baseY = sy;
    if (orientToPath && path) {
      tangentAngle = path.getTangentAt(0).angle;
    }
  } else if (attach === 'end') {
    baseX = ex;
    baseY = ey;
    if (orientToPath && path) {
      tangentAngle = path.getTangentAt(path.getTotalLength()).angle;
    }
  } else if (typeof attach === 'number' && !Number.isNaN(attach) && path) {
    const clamped = Math.max(0, Math.min(1, attach));
    const distance = path.getTotalLength() * clamped;
    const pt = path.getPointAtLength(distance);
    baseX = pt.x;
    baseY = pt.y;
    if (orientToPath) {
      tangentAngle = path.getTangentAt(distance).angle;
    }
  } else if (typeof attach === 'string' && BBOX_ANCHORS.has(attach) && path) {
    const pt = resolveBBoxAnchor(attach as BBoxAnchor, path);
    baseX = pt.x;
    baseY = pt.y;
  }

  const x = baseX + ox;
  const y = baseY + oy;

  const orientationProps: Record<string, any> = {};
  if (orientToPath && tangentAngle !== undefined) {
    if (isShapeChild) {
      if (restOfChildProps.rotate === undefined) {
        orientationProps.rotate = [tangentAngle, x, y];
      }
    } else {
      const rotateTransform = `rotate(${tangentAngle} ${x} ${y})`;
      orientationProps.transform = restOfChildProps.transform
        ? `${rotateTransform} ${restOfChildProps.transform}`
        : rotateTransform;
    }
  }

  return {
    sx: x,
    sy: y,
    cx: x,
    cy: y,
    ...orientationProps,
    ...restOfChildProps
  };
};

export default attach;
