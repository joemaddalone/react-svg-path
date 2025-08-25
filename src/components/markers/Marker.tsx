import React from 'react';
import { MarkerProps } from '../../types/markers';

export const Marker: React.FC<MarkerProps> = ({
  children,
  id,
  refX,
  refY,
  markerWidth,
  markerHeight,
  orient = 'auto-start-reverse' ,
  markerUnits = 'userSpaceOnUse'
}) => {
  return (
    <defs>
      <marker
        id={id}
        markerWidth={markerWidth}
        markerHeight={markerHeight}
        refX={refX}
        refY={refY}
        orient={orient}
        markerUnits={markerUnits}
      >
        {children}
      </marker>
    </defs>
  );
};

Marker.displayName = 'Marker';
