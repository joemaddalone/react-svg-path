import React from 'react';
import ReactDOMServer from 'react-dom/server';
import cleanAttributes from '../utils/cleanAttributes';

const getD = (p) => {
  const rx = / d="([^"]*)"/;
  return p && p.includes('d=') && rx.exec(p)[1];
};

export const PathMerge = ({ children, ...rest }) => {
  const updated = React.Children.map(children, (child) => {
    // passing in ...rest here allows us to inherit parent positioning as needed.
    return React.cloneElement(child, {
      merge: 'true',
      ...rest,
      ...child.props
    });
  });

  // rendered is the html output of each path
  const rendered = ReactDOMServer.renderToStaticMarkup(updated);

  // grab the d attribute off of each rendered path
  const paths = rendered
    .split('<path')
    .map((p) => (p.includes('d=') ? getD(p) : p))
    .filter((b) => b);

  // strip off any parent positioning attributes.
  const attributes = cleanAttributes(rest);
  return <path d={paths.join('')} {...attributes} />;
};
