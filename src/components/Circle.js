import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Circle = (props) => {
  const doc = docs.basicShapes.circle;
  return createSimpleComponent(doc, props);
};
