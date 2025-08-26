import { ReactNode, SVGProps } from "react";

export interface GroupProps extends SVGProps<SVGGElement> {
  children?: ReactNode;
  sx?: number;
  sy?: number;
  cx?: number;
  cy?: number;
  ex?: number;
  ey?: number;
}
