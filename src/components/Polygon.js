import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Polygon = (props) => {
  const doc = docs.basicShapes.polygon;
  return createSimpleComponent(doc, props);
};
