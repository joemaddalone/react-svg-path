import React from 'react';
import Path from '../components/path/Path';
import attach from './attach';

export type MergePart = Path | string;

export type ShapeComponent = React.FC<any> & {
  __buildPath?: (props: any) => {
    path: Path;
    nesting: { sx: number; sy: number; ex: number; ey: number };
  };
};

export const isShapeComponent = (type: unknown): type is ShapeComponent =>
  typeof type === 'function' && typeof (type as ShapeComponent).__buildPath === 'function';

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

export const collectPathsFromChildren = (
  node: React.ReactNode,
  inheritedProps: Record<string, any> = {},
  parts: MergePart[] = []
): MergePart[] => {
  React.Children.forEach(node, (child) => {
    if (!React.isValidElement(child)) return;

    if (child.type === React.Fragment) {
      collectPathsFromChildren(child.props.children, inheritedProps, parts);
      return;
    }

    const mergedProps = { ...inheritedProps, ...child.props };

    if (child.type === 'path') {
      if (typeof mergedProps.d === 'string' && mergedProps.d.length > 0) {
        parts.push(mergedProps.d);
      }
      return;
    }

    if (isShapeComponent(child.type)) {
      const { path, nesting } = child.type.__buildPath!(mergedProps);
      appendPath(parts, path);

      if (child.props.children) {
        React.Children.forEach(child.props.children, (nestedChild) => {
          if (!React.isValidElement(nestedChild)) return;
          const attachedProps = attach(
            nestedChild.props,
            nesting.sx,
            nesting.sy,
            nesting.ex,
            nesting.ey,
            path,
            isShapeComponent(nestedChild.type)
          );
          collectPathsFromChildren(nestedChild, attachedProps, parts);
        });
      }
      return;
    }

    if (typeof child.type === 'function') {
      const rendered = (child.type as (props: any) => React.ReactNode)(
        mergedProps
      );
      collectPathsFromChildren(rendered, {}, parts);
      return;
    }

    if (child.props && child.props.children) {
      collectPathsFromChildren(child.props.children, inheritedProps, parts);
    }
  });

  return parts;
};

export const resolvePathFromSource = (
  source: Path | React.ReactElement
): Path | null => {
  if (source instanceof Path) {
    return source;
  }
  const parts = collectPathsFromChildren(source);
  const merged = new Path();
  let hasPath = false;
  parts.forEach((part) => {
    if (part instanceof Path) {
      merged.concat(part);
      hasPath = true;
    }
  });
  return hasPath ? merged : null;
};
