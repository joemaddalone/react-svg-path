import React from "react";
import uuid from "../../utils/id";
import cleanAttributes from "../../utils/cleanAttributes";
import { TextPathProps } from "../../types/text";

export const TextPath: React.FC<TextPathProps> = ({
  path,
  children,
  id,
  ...attributes
}) => {
  const pathId = id || uuid();
  const textPathProps: { [key: string]: any } = {};
  const textProps: { [key: string]: any } = {};
  const allowedTextPathProps = [
    "textLength",
    "startOffset",
    "spacing",
    "side",
    "method",
    "lengthAdjust",
    "alignmentBaseline",
  ];

  Object.keys(attributes).forEach((k) => {
    if (allowedTextPathProps.includes(k)) {
      textPathProps[k as keyof typeof textPathProps] =
        attributes[k as keyof typeof attributes];
    } else {
      textProps[k as keyof typeof textProps] =
        attributes[k as keyof typeof attributes];
    }
  });

  const cleanTextPathProps = cleanAttributes(textPathProps);
  const cleanTextProps = cleanAttributes(textProps);

  return (
    <>
      <defs>
        {React.isValidElement(path) ? (
          React.cloneElement(path as React.ReactElement, { id: pathId })
        ) : (
          <path id={pathId} d={path as string} />
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
