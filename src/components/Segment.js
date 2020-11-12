import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Segment = (props) => {
  const doc = docs.basicShapes.segment;
  return createSimpleComponent(doc, props);
};
