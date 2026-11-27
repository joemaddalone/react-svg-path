import React from 'react';
import Path from './Path';
import { isShapeComponent, resolvePathFromSource } from '../../utils/resolvePath';

export interface AlongPathSample {
  x: number;
  y: number;
  angle: number;
  index: number;
  progress: number;
  distance: number;
}

export interface AlongPathProps {
  /** A Path instance or react-svg-path shape element to sample along. */
  path: Path | React.ReactElement;
  /** Number of items to place when using a render function or single child template. */
  count?: number;
  /** Start fraction along the path (0..1, default 0). */
  start?: number;
  /** End fraction along the path (0..1, default 1). */
  end?: number;
  /** Rotate placed elements to follow the path tangent (default false). */
  orient?: boolean;
  /** Additional angle offset in degrees when orient is true (default 0). */
  angleOffset?: number;
  /** Render the underlying path element alongside the distributed items (default false). */
  showPath?: boolean;
  /** Attributes applied to the path when showPath is true. */
  pathProps?: React.SVGProps<SVGPathElement>;
  /** Render function or child element(s) to distribute along the path. */
  children: ((sample: AlongPathSample) => React.ReactNode) | React.ReactNode;
}

const computeProgress = (
  index: number,
  total: number,
  start: number,
  end: number
): number => {
  if (total <= 1) return start;
  return start + ((end - start) * index) / (total - 1);
};

export const AlongPath: React.FC<AlongPathProps> = ({
  path: source,
  count,
  start = 0,
  end = 1,
  orient = false,
  angleOffset = 0,
  showPath = false,
  pathProps = {},
  children
}) => {
  const resolvedPath = resolvePathFromSource(source);
  if (!resolvedPath) {
    return null;
  }

  const totalLength = resolvedPath.getTotalLength();

  const makeSample = (index: number, total: number): AlongPathSample => {
    const progress = Math.max(
      0,
      Math.min(1, computeProgress(index, total, start, end))
    );
    const distance = totalLength * progress;
    const pt = resolvedPath.getPointAtLength(distance);
    const tangent = resolvedPath.getTangentAt(distance);
    return {
      x: pt.x,
      y: pt.y,
      angle: tangent.angle + angleOffset,
      index,
      progress,
      distance
    };
  };

  let items: React.ReactNode = null;

  if (typeof children === 'function') {
    const total = count ?? 2;
    items = Array.from({ length: total }, (_, index) =>
      children(makeSample(index, total))
    );
  } else {
    const childArray = React.Children.toArray(children).filter(
      React.isValidElement
    ) as React.ReactElement[];

    if (childArray.length === 1 && count !== undefined && count > 0) {
      const template = childArray[0];
      items = Array.from({ length: count }, (_, index) => {
        const sample = makeSample(index, count);
        const placementProps: Record<string, any> = {
          key: index,
          cx: sample.x,
          cy: sample.y,
          sx: sample.x,
          sy: sample.y
        };
        if (orient) {
          if (isShapeComponent(template.type)) {
            placementProps.rotate = [sample.angle, sample.x, sample.y];
          } else {
            const rotateTransform = `rotate(${sample.angle} ${sample.x} ${sample.y})`;
            placementProps.transform = template.props.transform
              ? `${rotateTransform} ${template.props.transform}`
              : rotateTransform;
          }
        }
        return React.cloneElement(template, placementProps);
      });
    } else {
      const total = childArray.length;
      items = childArray.map((child, index) => {
        const sample = makeSample(index, total);
        const placementProps: Record<string, any> = {
          key: child.key ?? index,
          cx: sample.x,
          cy: sample.y,
          sx: sample.x,
          sy: sample.y
        };
        if (orient) {
          if (isShapeComponent(child.type)) {
            placementProps.rotate = [sample.angle, sample.x, sample.y];
          } else {
            const rotateTransform = `rotate(${sample.angle} ${sample.x} ${sample.y})`;
            placementProps.transform = child.props.transform
              ? `${rotateTransform} ${child.props.transform}`
              : rotateTransform;
          }
        }
        return React.cloneElement(child, placementProps);
      });
    }
  }

  return (
    <>
      {showPath ? resolvedPath.toComponent(pathProps) : null}
      {items}
    </>
  );
};

AlongPath.displayName = 'AlongPath';
