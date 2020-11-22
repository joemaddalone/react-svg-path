import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Square = (props) => {
  const doc = docs.square;
  return createSimpleComponent(doc, props);
};
