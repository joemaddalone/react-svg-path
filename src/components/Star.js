import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Star = (props) => {
  const doc = docs.star;
  return createSimpleComponent(doc, props);
};
