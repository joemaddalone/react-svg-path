import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const RadialLines = (props) => {
  const doc = docs.basicShapes.radialLines;
  return createSimpleComponent(doc, props);
};
