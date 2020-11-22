import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Rect = (props) => {
  const doc = docs.rect;
  return createSimpleComponent(doc, props);
};
