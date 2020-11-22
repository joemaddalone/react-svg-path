import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Polygram = (props) => {
  const doc = docs.polygram;
  return createSimpleComponent(doc, props);
};
