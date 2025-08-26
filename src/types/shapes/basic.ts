import { BasicShapeProps, BasicShapeWithCenterEnd } from './common';

// Basic Shapes
export interface CircleProps extends BasicShapeWithCenterEnd {
  size: number;
  cx?: number;
  cy?: number;
}

export interface EllipseProps extends BasicShapeWithCenterEnd {
  width: number;
  height: number;
  cx?: number;
  cy?: number;
}

export interface LineProps extends BasicShapeProps {
  sx: number;
  sy: number;
  ex: number;
  ey: number;
  relative?: boolean;
}

export interface RectProps extends BasicShapeWithCenterEnd {
  width: number;
  height: number;
  cx?: number;
  cy?: number;
}

export interface RoundedRectProps extends BasicShapeWithCenterEnd {
  width: number;
  height: number;
  radius: number;
  cx?: number;
  cy?: number;
}

export interface SquareProps extends BasicShapeWithCenterEnd {
  size: number;
  cx?: number;
  cy?: number;
}

export interface RoundedSquareProps extends BasicShapeWithCenterEnd {
  size: number;
  radius: number;
  cx?: number;
  cy?: number;
}

export interface TriangleProps extends BasicShapeWithCenterEnd {
  size: number;
  cx?: number;
  cy?: number;
}
