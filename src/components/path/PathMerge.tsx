import React from 'react';
import Path from './Path';
import attach from '../../utils/attach';
import applyPathTransforms from '../../utils/applyPathTransforms';
import cleanAttributes from '../../utils/cleanAttributes';
import { PathMergeProps } from '../../types/pathmerge';

type MergePart = Path | string;

type ShapeComponent = React.FC<any> & {
  __buildPath?: (props: any) => {
    path: Path;
    nesting: { sx: number; sy: number; ex: number; ey: number };
  };
};

const appendPath = (parts: MergePart[], path: Path) => {
  const last = parts[parts.length - 1];
  if (last instanceof Path) {
    last.concat(path);
  } else {
    const merged = new Path();
    merged.concat(path);
    parts.push(merged);
  }
};

const collectPaths = (
  node: React.ReactNode,
  inheritedProps: Record<string, any>,
  parts: MergePart[]
) => {
  React.Children.forEach(node, (child) => {
    if (!React.isValidElement(child)) return;

    if (child.type === React.Fragment) {
      collectPaths(child.props.children, inheritedProps, parts);
      return;
    }

    const mergedProps = { ...inheritedProps, ...child.props };

    if (child.type === 'path') {
      if (typeof mergedProps.d === 'string' && mergedProps.d.length > 0) {
        parts.push(mergedProps.d);
      }
      return;
    }

    const componentType = child.type as ShapeComponent;
    if (typeof componentType === 'function' && componentType.__buildPath) {
      const { path, nesting } = componentType.__buildPath(mergedProps);
      appendPath(parts, path);

      if (child.props.children) {
        React.Children.forEach(child.props.children, (nestedChild) => {
          if (!React.isValidElement(nestedChild)) return;
          const attachedProps = attach(
            nestedChild.props,
            nesting.sx,
            nesting.sy,
            nesting.ex,
            nesting.ey
          );
          collectPaths(nestedChild, attachedProps, parts);
        });
      }
      return;
    }

    if (typeof child.type === 'function') {
      const rendered = (child.type as (props: any) => React.ReactNode)(
        mergedProps
      );
      collectPaths(rendered, {}, parts);
      return;
    }

    if (child.props && child.props.children) {
      collectPaths(child.props.children, inheritedProps, parts);
    }
  });
};

export const PathMerge: React.FC<PathMergeProps> = ({
  children,
  rotate,
  scale,
  translate,
  matrix,
  reverse,
  coordinateMode,
  ...rest
}) => {
  const parts: MergePart[] = [];
  collectPaths(children, rest, parts);

  const transformProps = {
    rotate,
    scale,
    translate,
    matrix,
    reverse,
    coordinateMode
  };
  const pivotHint = {
    cx: (rest as any).cx,
    cy: (rest as any).cy
  };

  parts.forEach((part) => {
    if (part instanceof Path) {
      applyPathTransforms(part, transformProps, pivotHint);
    }
  });

  const d = parts
    .map((part) => (part instanceof Path ? part.toString() : part))
    .join('');

  // strip off any parent positioning attributes.
  const attributes = cleanAttributes(rest);
  return <path d={d} {...attributes} />;
};
