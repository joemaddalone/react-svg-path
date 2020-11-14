import React from 'react';

export const Marker = ({
  children,
  id,
  refX,
  refY,
  markerWidth,
  markerHeight,
  orient = 'auto-start-reverse',
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
