import React from 'react';
import uuid from '../utils/id';
import cleanAttributes from '../utils/cleanAttributes';

export const TextPath = ({ path, children, id, ...attributes }) => {
  const pathId = id || uuid();
  const textPathProps = {};
  const textProps = {};
  const allowedTextPathProps = [
    'textLength',
    'startOffset',
    'spacing',
    'side',
    'method',
    'lengthAdjust',
    'alignmentBaseline'
  ];

  Object.keys(attributes).forEach((k) => {
    if (allowedTextPathProps.includes(k)) {
      textPathProps[k] = attributes[k];
    } else {
      textProps[k] = attributes[k];
    }
  });

  const cleanTextPathProps = cleanAttributes(textPathProps);
  const cleanTextProps = cleanAttributes(textProps);

  return (
    <>
      <defs>
        {React.isValidElement(path) ? (
          React.cloneElement(path, { id: pathId })
        ) : (
          <path id={pathId} d={path} />
        )}
      </defs>
      <text {...cleanTextProps}>
        <textPath startOffset={0} href={`#${pathId}`} {...cleanTextPathProps}>
          {children}
        </textPath>
      </text>
    </>
  );
};
