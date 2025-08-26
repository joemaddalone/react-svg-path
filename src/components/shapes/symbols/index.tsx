/* eslint-disable no-prototype-builtins */
import React from 'react';
import { SymVProps, SymXProps, SymHProps, SymIProps, CrossProps } from '../../../types/shapes/symbols';
import { shapes } from '../../../utils/shapeFactory';

export const SymV: React.FC<SymVProps> = shapes.SymV;
export const SymX: React.FC<SymXProps> = shapes.SymX;
export const SymH: React.FC<SymHProps> = shapes.SymH;
export const SymI: React.FC<SymIProps> = shapes.SymI;
export const Cross: React.FC<CrossProps> = shapes.Cross;