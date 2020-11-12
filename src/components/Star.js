import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Star = (props) => {
  const doc = docs.basicShapes.star;
  return createSimpleComponent(doc, props);
};
