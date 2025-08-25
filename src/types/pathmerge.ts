import React from "react";

export interface PathMergeProps  extends React.SVGProps<SVGPathElement> {
  children?: React.ReactNode,
  rest?: any
}