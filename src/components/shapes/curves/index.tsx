/* eslint-disable no-prototype-builtins */
import React from 'react';
import { ArcProps, CubicProps, QuadProps } from '../../../types/shapes/curves';
import { shapes } from '../../../utils/shapeFactory';

export const Arc: React.FC<ArcProps> = shapes.Arc;
export const Cubic: React.FC<CubicProps> = shapes.Cubic;
export const Quad: React.FC<QuadProps> = shapes.Quad;