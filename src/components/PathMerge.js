import React from 'react';
// import merge from '../utils/merge';
// import render from '../utils/render';

// export const PathMerge = ({ children, ...rest }) => {
//   const paths = [];
//   React.Children.forEach(children, (child) => {
//     paths.push(child.type.path(child.props).toString());
//   });
//   return <path d={paths.join(' ')} {...rest} />;
// };

export const PathMerge = ({ children, ...rest }) => {
  const paths = [];
  React.Children.forEach(children, (child) => {
    paths.push(child.type.path(child.props).toString());
  });
  return <path d={paths.join(' ')} {...rest} />;
};
