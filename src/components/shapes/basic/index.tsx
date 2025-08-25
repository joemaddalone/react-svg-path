/* eslint-disable no-prototype-builtins */
import React from "react";
import {
  CircleProps,
  EllipseProps,
  RectProps,
  SquareProps,
  TriangleProps,
  LineProps,
  RoundedRectProps,
  RoundedSquareProps,
} from "../../../types/shapes/basic";
import { shapes } from "../../../utils/shapeFactory";

export const Circle: React.FC<CircleProps> = shapes.Circle;
export const Ellipse: React.FC<EllipseProps> = shapes.Ellipse;
export const Rect: React.FC<RectProps> = shapes.Rect;
export const Square: React.FC<SquareProps> = shapes.Square;
export const Triangle: React.FC<TriangleProps> = shapes.Triangle;
export const Line: React.FC<LineProps> = shapes.Line;
export const RoundedRect: React.FC<RoundedRectProps> = shapes.RoundedRect;
export const RoundedSquare: React.FC<RoundedSquareProps> = shapes.RoundedSquare;
