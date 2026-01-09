import React from 'react';

export interface BasicShapeProps extends Omit<React.SVGProps<SVGPathElement>, 'points'> {
	attach?: string;
	ox?: number;
	oy?: number;
}

export interface BasicShapeWithCenterEnd extends BasicShapeProps {
	centerEnd?: boolean;
}