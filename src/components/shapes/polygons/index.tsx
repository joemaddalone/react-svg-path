/* eslint-disable no-prototype-builtins */
import React from 'react';
import { KiteProps, PolygonProps, PolygramProps, PolylineProps, RegPolygonProps, StarProps } from '../../../types/shapes/polygons';
import { shapes } from '../../../utils/shapeFactory';

export const Kite: React.FC<KiteProps> = shapes.Kite;
export const Polygon: React.FC<PolygonProps> = shapes.Polygon;
export const Polygram: React.FC<PolygramProps> = shapes.Polygram;
export const Polyline: React.FC<PolylineProps> = shapes.Polyline;
export const RegPolygon: React.FC<RegPolygonProps> = shapes.RegPolygon;
export const Star: React.FC<StarProps> = shapes.Star;