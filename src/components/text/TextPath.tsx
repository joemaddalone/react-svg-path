import React from "react";
import uuid from "../../utils/id";
import cleanAttributes from "../../utils/cleanAttributes";
import { isShapeComponent } from "../../utils/resolvePath";
import Path from "../path/Path";
import { TextPathProps } from "../../types/text";

export const TextPath: React.FC<TextPathProps> = ({
  path,
  children,
  id,
  reverse = false,
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

  let defElement: React.ReactElement;
  if (path instanceof Path) {
    const resolved = reverse ? path.clone().reverse() : path;
    defElement = <path id={pathId} d={resolved.toString()} />;
  } else if (React.isValidElement(path)) {
    const cloneProps: Record<string, any> = { id: pathId };
    if (reverse && isShapeComponent(path.type)) {
      cloneProps.reverse = !(path.props as { reverse?: boolean })?.reverse;
    }
    defElement = React.cloneElement(path as React.ReactElement, cloneProps);
  } else {
    defElement = <path id={pathId} d={path as string} />;
  }

  return (
    <>
      <defs>{defElement}</defs>
      <text {...cleanTextProps}>
        <textPath startOffset={0} href={`#${pathId}`} {...cleanTextPathProps}>
          {children}
        </textPath>
      </text>
    </>
  );
};
