import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Sector = (props) => {
  const doc = docs.basicShapes.sector;
  return createSimpleComponent(doc, props);
};
