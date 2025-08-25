/* eslint-disable no-prototype-builtins */
import React from 'react';
import { LensProps, RadialLinesProps, SectorProps, SegmentProps } from '../../../types/shapes/radial';
import { shapes } from '../../../utils/shapeFactory';


export const Lens: React.FC<LensProps> = shapes.Lens;
export const RadialLines: React.FC<RadialLinesProps> = shapes.RadialLines;
export const Sector: React.FC<SectorProps> = shapes.Sector;
export const Segment: React.FC<SegmentProps> = shapes.Segment;
