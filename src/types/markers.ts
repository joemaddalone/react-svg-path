import React from 'react';

export interface MarkerProps {
  children: React.ReactNode,
  id: string,
  refX: number,
  refY: number,
  markerWidth: number,
  markerHeight: number,
  orient?: string,
  markerUnits?: string
}

export interface MarkerArrowProps {
  id: string,
  color: string,
  markerStyle: { [key: string]: any },
  attributes: { [key: string]: any }
}

export interface MarkerSquareProps {
  id: string,
  size: number,
  color: string,
  markerStyle: { [key: string]: any },
  attributes: { [key: string]: any }
}

export interface MarkerTriangleProps {
  id: string,
  color: string,
  markerStyle: { [key: string]: any },
  attributes: { [key: string]: any }
}

export interface MarkerLineProps {
  id: string,
  size: number,
  color: string,
  markerStyle: { [key: string]: any },
  attributes: { [key: string]: any }
}
