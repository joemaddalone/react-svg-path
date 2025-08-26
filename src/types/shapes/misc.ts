import { BasicShapeProps, BasicShapeWithCenterEnd } from './common';


// Misc
export interface IsocubeProps extends BasicShapeWithCenterEnd {
  size: number;
  cx?: number;
  cy?: number;
}

export interface OminoProps extends BasicShapeProps {
  size: number;
  shape: number[][];
  sx?: number;
  sy?: number;
  lined?: boolean;
}
