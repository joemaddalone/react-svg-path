import React, { SVGProps } from "react";

export interface SvgProps extends Omit<SVGProps<SVGSVGElement>, 'x' | 'y' | 'width' | 'height' | 'scale'> {
  children?: React.ReactNode;
  x?: number;
  y?: number;
  sx?: number;
  sy?: number;
  cx?: number;
  cy?: number;
  width?: number;
  height?: number;
  scale?: boolean;
}
