import React from 'react';
import type Path from '../components/path/Path';

export interface CanvasPathProps
  extends Omit<React.CanvasHTMLAttributes<HTMLCanvasElement>, 'children'> {
  /** A Path instance to draw onto the canvas. */
  path?: Path;
  /** Optional react-svg-path shape elements to compose and draw onto the canvas. */
  children?: React.ReactNode;
  width: number;
  height: number;
  stroke?: string;
  fill?: string;
  lineWidth?: number;
  lineCap?: 'butt' | 'round' | 'square';
  lineJoin?: 'bevel' | 'miter' | 'round';
  fillRule?: 'nonzero' | 'evenodd';
  /** Clear the canvas before drawing (default true). */
  clear?: boolean;
  /** Custom draw callback invoked after path.toCanvas(ctx) for custom strokes/fills. */
  onDraw?: (ctx: CanvasRenderingContext2D, path: Path) => void;
}
