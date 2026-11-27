import React, { useMemo } from 'react';
import Path from '../components/path/Path';
import type {
  BoundingBox,
  PathDescriptor,
  Point,
  Tangent
} from '@joemaddalone/path';

export interface UsePathResult {
  path: Path;
  d: string;
  bbox: BoundingBox;
  length: number;
  startPoint: Point;
  currentPoint: Point;
  pointAt: (distance: number) => Point;
  pointAtPercent: (percent: number) => Point;
  tangentAt: (distance: number) => Tangent;
  tangentAtPercent: (percent: number) => Tangent;
  descriptor: (attributes?: Record<string, unknown>) => PathDescriptor;
  toComponent: (props?: React.SVGProps<SVGPathElement>) => React.ReactElement;
}

const clampPercent = (percent: number): number =>
  Math.max(0, Math.min(1, percent));

export function usePath(
  builder: (path: Path) => Path | void,
  deps: React.DependencyList = []
): UsePathResult {
  return useMemo(() => {
    const initial = new Path();
    const built = builder(initial);
    const path = built instanceof Path ? built : initial;
    const d = path.toString();
    const bbox = path.getBBox();
    const length = path.getTotalLength();
    const startPoint = path.startPoint;
    const currentPoint = path.currentPoint;

    return {
      path,
      d,
      bbox,
      length,
      startPoint,
      currentPoint,
      pointAt: (distance: number) => path.getPointAtLength(distance),
      pointAtPercent: (percent: number) =>
        path.getPointAtLength(length * clampPercent(percent)),
      tangentAt: (distance: number) => path.getTangentAt(distance),
      tangentAtPercent: (percent: number) =>
        path.getTangentAt(length * clampPercent(percent)),
      descriptor: (attributes?: Record<string, unknown>) =>
        path.toDescriptor(attributes),
      toComponent: (props?: React.SVGProps<SVGPathElement>) =>
        path.toComponent(props)
    };
  }, deps);
}

export default usePath;
