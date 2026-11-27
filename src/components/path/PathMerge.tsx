import React from 'react';
import Path from './Path';
import applyPathTransforms from '../../utils/applyPathTransforms';
import cleanAttributes from '../../utils/cleanAttributes';
import { collectPathsFromChildren } from '../../utils/resolvePath';
import { PathMergeProps } from '../../types/pathmerge';

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
  const parts = collectPathsFromChildren(children, rest);

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
