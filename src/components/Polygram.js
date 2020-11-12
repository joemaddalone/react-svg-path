import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Polygram = (props) => {
  const doc = docs.basicShapes.polygram;
  return createSimpleComponent(doc, props);
};
