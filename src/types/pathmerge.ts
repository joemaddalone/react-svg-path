import React from "react";
import { PathTransformProps } from "./shapes/common";

export interface PathMergeProps
  extends Omit<
      React.SVGProps<SVGPathElement>,
      "rotate" | "scale" | "translate"
    >,
    PathTransformProps {
  children?: React.ReactNode;
  rest?: any;
}