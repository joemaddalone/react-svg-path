import React from 'react';
import Path from './Path';

export const PathMerge = ({ children, ...rest }) => {
  React.Children.forEach(children, (child) => {
    console.log(child.type.path(child.props).toString());

    // console.log(childType.path({ ...childType.props }));
  });
  return children;
};
