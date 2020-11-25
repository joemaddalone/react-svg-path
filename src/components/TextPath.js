import React from 'react';
import uuid from '../utils/id';

export const TextPath = ({ path, children, id, ...attributes }) => {
  const pathId = id || uuid();
  const textPathProps = {};
  const textProps = {};
  const allowedTextPathProps = [
    'textLength',
    'startOffset',
    'spacing',
    'size',
    'method',
    'lengthAdjust'
  ];

  Object.keys(attributes).forEach((k) => {
    if (allowedTextPathProps.includes(k)) {
      textPathProps[k] = attributes[k];
    } else {
      textProps[k] = attributes[k];
    }
  });

  return (
    <>
      <defs>
        {React.isValidElement(path) ? (
          React.cloneElement(path, { id: pathId })
        ) : (
          <path id={pathId} d={path} />
        )}
      </defs>
      <text {...textProps}>
        <textPath startOffset={0} href={`#${pathId}`} {...textPathProps}>
          {children}
        </textPath>
      </text>
    </>
  );
};
