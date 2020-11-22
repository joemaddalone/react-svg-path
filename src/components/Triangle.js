import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Triangle = (props) => {
  const doc = docs.triangle;
  return createSimpleComponent(doc, props);
};
