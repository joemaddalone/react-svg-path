import React from 'react';
import ReactDOMServer from 'react-dom/server';

export const PathMerge = ({ children, ...rest }) => {
  const updated = React.Children.map(children, (child) => {
    return React.cloneElement(child, { merge: true });
  });
  const str = ReactDOMServer.renderToStaticMarkup(updated);
  return <path d={str} {...rest} />;
};
