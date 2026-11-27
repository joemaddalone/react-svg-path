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
  /** Automatically compute a tight viewBox from child path bounding boxes (SSR-safe). */
  autoFit?: boolean;
  /** Extra padding around the computed bounding box when autoFit is enabled. */
  padding?: number;
}
