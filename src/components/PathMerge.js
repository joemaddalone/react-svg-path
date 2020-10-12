import React from 'react';

export const PathMerge = ({ children, ...rest }) => {
  const paths = [];
  React.Children.forEach(children, (child) => {
    paths.push(child.type.path(child.props).toString());
  });
  return <path d={paths.join(' ')} />;
};
