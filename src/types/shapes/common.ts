import React from 'react';

export interface BasicShapeProps extends React.SVGProps<SVGPathElement> {
	attach?: string;
  ox?: number;
  oy?: number;
}

export interface BasicShapeWithCenterEnd extends BasicShapeProps {
	centerEnd?: boolean;
}