import React from 'react';
import type { Matrix } from '@joemaddalone/path';

export type RotateProp =
  | number
  | [degrees: number, originX?: number, originY?: number];

export type ScaleProp =
  | number
  | [sx: number, sy?: number, originX?: number, originY?: number];

export type TranslateProp = [dx: number, dy: number];

export type CoordinateMode = 'absolute' | 'relative';

export type BBoxAnchor =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'center';

export type AttachTarget = 'start' | 'end' | BBoxAnchor | number;

export interface PathTransformProps {
  /** Rotate clockwise in degrees. Defaults pivot to shape center when omitted. */
  rotate?: RotateProp;
  /** Scale uniformly (number) or [sx, sy?, originX?, originY?]. Defaults pivot to shape center when omitted. */
  scale?: ScaleProp;
  /** Translate every coordinate by [dx, dy]. */
  translate?: TranslateProp;
  /** Apply an arbitrary 2D affine matrix [a, b, c, d, e, f]. */
  matrix?: Matrix;
  /** Reverse traversal direction and winding order of every subpath. */
  reverse?: boolean;
  /** Normalize output path commands to absolute or relative coordinates. */
  coordinateMode?: CoordinateMode;
}

export interface BasicShapeProps
  extends Omit<
      React.SVGProps<SVGPathElement>,
      'points' | 'rotate' | 'scale' | 'translate'
    >,
    PathTransformProps {
  attach?: AttachTarget;
  ox?: number;
  oy?: number;
  /** Rotate this nested child to align with the parent path's tangent at the attachment point. */
  orientToPath?: boolean;
}

export interface BasicShapeWithCenterEnd extends BasicShapeProps {
  centerEnd?: boolean;
}
