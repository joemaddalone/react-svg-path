import { BasicShapeProps, BasicShapeWithCenterEnd } from './common';


// Polygons
export interface KiteProps extends BasicShapeWithCenterEnd {
  width: number;
  height: number;
  dh: number;
  cx?: number;
  cy?: number;
}

export interface PolygonProps extends BasicShapeProps {
  points: [number, number][];
}

export interface PolygramProps extends BasicShapeWithCenterEnd {
  size: number;
  points: number;
  cx?: number;
  cy?: number;
  vertexSkip?: number;
}

export interface PolylineProps extends BasicShapeProps {
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
  points: number;
  cx?: number;
  cy?: number;
}
