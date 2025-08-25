import React from "react";

export interface TextProps extends React.SVGProps<SVGTextElement> {
  children: React.ReactNode,
  x?: number,
  y?: number,
  sx?: number,
  sy?: number
}

export interface TextPathProps extends Omit<React.SVGProps<SVGTextElement>, 'path'> {
  path: React.ReactElement | string;
  children: React.ReactNode;
  id?: string;
}