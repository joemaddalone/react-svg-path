import React from 'react';
import attach from './attach';
import cleanAttributes from './cleanAttributes';

interface RenderProps {
  pathMethod?: any;
  attributes: any;
  ex: number;
  ey: number;
  sx: number;
  sy: number;
  children?: React.ReactNode;
}

const renderElement = ({ pathMethod, attributes, ex, ey, sx, sy, children }: RenderProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { merge, attach: attachProp, ...restOfComponentProps } = attributes;
  const to = merge ? 'toString' : 'toComponent';
  const cleanComponentProps = cleanAttributes(restOfComponentProps);
  if (!children) {
    const response = pathMethod ? pathMethod()[to](cleanComponentProps) : null;
    return response;
  } else {
    return [
      pathMethod ? pathMethod()[to]({ ...cleanComponentProps, key: -1 }) : undefined,
      React.Children.map(
        children,
        (child, i) => {
          if (!React.isValidElement(child)) return undefined;
          return React.cloneElement(child, {
            key: i,
            merge,
            ...attach(child.props, ex, ey, sx, sy)
          });
        }
      )?.filter((x: any) => x) ?? []
    ];
  }
};

export default renderElement;