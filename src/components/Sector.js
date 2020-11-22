import docs from '../docs/docs';
import createSimpleComponent from '../utils/createSimpleComponent';

export const Sector = (props) => {
  const doc = docs.sector;
  return createSimpleComponent(doc, props);
};
