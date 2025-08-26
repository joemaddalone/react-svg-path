import { BasicShapeWithCenterEnd } from './common';

// Radial
export interface LensProps extends BasicShapeWithCenterEnd {
  width: number;
  height: number;
  cx?: number;
  cy?: number;
}

export interface RadialLinesProps extends BasicShapeWithCenterEnd {
  outerSize: number;
  innerSize: number;
  lineCount: number;
  cx?: number;
  cy?: number;
}

export interface SectorProps extends BasicShapeWithCenterEnd {
  cx?: number;
  cy?: number;
  size: number;
  startAngle: number;
  endAngle: number;
}

export interface SegmentProps extends BasicShapeWithCenterEnd {
  cx?: number;
  cy?: number;
  size: number;
  startAngle: number;
  endAngle: number;
}