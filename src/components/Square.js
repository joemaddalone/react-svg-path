import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Square = (props) => {
  const doc = docs.basicShapes.square;
  return createSimpleComponent(doc, props);
};
