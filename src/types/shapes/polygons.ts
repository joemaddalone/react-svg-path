import React from 'react';
import { BasicShapeWithCenterEnd } from './common';


// Polygons
export interface KiteProps extends BasicShapeWithCenterEnd {
  width: number;
  height: number;
  dh: number;
  cx?: number;
  cy?: number;
}

export interface PolygonProps extends Omit<React.SVGProps<SVGPathElement>, 'points'> {
  attach?: string;
  points: [number, number][];
}

export interface PolygramProps extends BasicShapeWithCenterEnd {
  size: number;
  pointCount: number;
  cx?: number;
  cy?: number;
  vertexSkip?: number;
}

export interface PolylineProps extends Omit<React.SVGProps<SVGPathElement>, 'points'> {
  attach?: string;
  ox?: number;
  oy?: number;
  points: [number, number][];
  relative?: boolean;
}

export interface RegPolygonProps extends BasicShapeWithCenterEnd {
  size: number;
  sides: number;
  cx?: number;
  cy?: number;
}


export interface StarProps extends BasicShapeWithCenterEnd {
  outerSize: number;
  innerSize: number;
  pointCount: number;
  cx?: number;
  cy?: number;
}
