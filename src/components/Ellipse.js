import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Ellipse = (props) => {
  const doc = docs.ellipse;
  return createSimpleComponent(doc, props);
};
