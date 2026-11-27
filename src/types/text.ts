import React from "react";
import type Path from "../components/path/Path";
import type { AttachTarget } from "./shapes/common";

export interface TextProps extends React.SVGProps<SVGTextElement> {
  children: React.ReactNode;
  x?: number;
  y?: number;
  sx?: number;
  sy?: number;
  attach?: AttachTarget;
  ox?: number;
  oy?: number;
  orientToPath?: boolean;
}

export interface TextPathProps extends Omit<React.SVGProps<SVGTextElement>, 'path'> {
  path: Path | React.ReactElement | string;
  children: React.ReactNode;
  id?: string;
  /** Reverse the path direction so text renders right-side-up on inverted arcs/circles. */
  reverse?: boolean;
}
