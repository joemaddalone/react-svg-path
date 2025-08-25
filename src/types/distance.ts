export interface DistanceProps {
  sx: number;
  sy: number;
  ex: number;
  ey: number;
  text: string;
  markerId: string;
  color: string;
  precision: number;
  markerEnd: string;
  markerStart: string;
  markers: string;
  dotted: boolean;
  scale: number;
  scaleUnit: string;
  rectStyle: { [key: string]: any };
  attributes: { [key: string]: any };
}
