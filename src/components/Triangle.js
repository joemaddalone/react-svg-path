import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Triangle = (props) => {
  const doc = docs.basicShapes.triangle;
  return createSimpleComponent(doc, props);
};
