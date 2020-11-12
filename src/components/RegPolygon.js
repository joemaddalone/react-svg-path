import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const RegPolygon = (props) => {
  const doc = docs.basicShapes.regPolygon;
  return createSimpleComponent(doc, props);
};
