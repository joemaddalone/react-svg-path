import Path from '../components/path/Path';
import type { PathTransformProps } from '../types/shapes/common';

export const TRANSFORM_PROP_KEYS = [
  'rotate',
  'scale',
  'translate',
  'matrix',
  'reverse',
  'coordinateMode'
] as const;

const getDefaultPivot = (
  path: Path,
  pivotHint?: { cx?: number; cy?: number }
): { x: number; y: number } => {
  if (
    typeof pivotHint?.cx === 'number' &&
    !Number.isNaN(pivotHint.cx) &&
    typeof pivotHint?.cy === 'number' &&
    !Number.isNaN(pivotHint.cy)
  ) {
    return { x: pivotHint.cx, y: pivotHint.cy };
  }
  const bbox = path.getBBox();
  return {
    x: bbox.minX + bbox.width / 2,
    y: bbox.minY + bbox.height / 2
  };
};

export const applyPathTransforms = (
  path: Path,
  props: PathTransformProps,
  pivotHint?: { cx?: number; cy?: number }
): Path => {
  const { rotate, scale, translate, matrix, reverse, coordinateMode } = props;

  if (rotate !== undefined) {
    if (Array.isArray(rotate)) {
      const [degrees, originX, originY] = rotate;
      if (originX !== undefined && originY !== undefined) {
        path.rotate(degrees, originX, originY);
      } else {
        const pivot = getDefaultPivot(path, pivotHint);
        path.rotate(degrees, originX ?? pivot.x, originY ?? pivot.y);
      }
    } else {
      const pivot = getDefaultPivot(path, pivotHint);
      path.rotate(rotate, pivot.x, pivot.y);
    }
  }

  if (scale !== undefined) {
    if (Array.isArray(scale)) {
      const [sx, sy = sx, originX, originY] = scale;
      if (originX !== undefined && originY !== undefined) {
        path.scale(sx, sy, originX, originY);
      } else {
        const pivot = getDefaultPivot(path, pivotHint);
        path.scale(sx, sy, originX ?? pivot.x, originY ?? pivot.y);
      }
    } else {
      const pivot = getDefaultPivot(path, pivotHint);
      path.scale(scale, scale, pivot.x, pivot.y);
    }
  }

  if (Array.isArray(translate) && translate.length >= 2) {
    path.translate(translate[0], translate[1]);
  }

  if (Array.isArray(matrix) && matrix.length === 6) {
    path.transform(matrix);
  }

  if (reverse) {
    path.reverse();
  }

  if (coordinateMode === 'absolute') {
    path.toAbsolute();
  } else if (coordinateMode === 'relative') {
    path.toRelative();
  }

  return path;
};

export default applyPathTransforms;
