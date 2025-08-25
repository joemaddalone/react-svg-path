import { BasicShapeProps } from './common';

// Curves
export interface ArcProps extends BasicShapeProps {
  sx: number;
  sy: number;
  rx: number;
  ry: number;
  rotation?: number;
  arc?: number;
  sweep?: number;
  ex: number;
  ey: number;
  relative?: boolean;
}

export interface CubicProps extends BasicShapeProps {
  sx: number;
  sy: number;
  cx1: number;
  cy1: number;
  cx2: number;
  cy2: number;
  ex: number;
  ey: number;
  S?: [number, number][];
  s?: [number, number][];
  relative?: boolean;
}

export interface QuadProps extends BasicShapeProps {
  sx: number;
  sy: number;
  cx: number;
  cy: number;
  ex: number;
  ey: number;
  T?: [number, number][];
  t?: [number, number][];
  relative?: boolean;
}
