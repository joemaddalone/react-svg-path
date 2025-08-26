/* eslint-disable no-prototype-builtins */
import React from 'react';
import { IsocubeProps, OminoProps } from '../../../types/shapes/misc';
import { shapes } from '../../../utils/shapeFactory';

export const Isocube: React.FC<IsocubeProps> = shapes.Isocube;
export const Omino: React.FC<OminoProps> = shapes.Omino;
