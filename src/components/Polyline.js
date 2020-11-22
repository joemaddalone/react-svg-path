import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Polyline = (props) => {
  const doc = docs.polyline;
  return createSimpleComponent(doc, props);
};
