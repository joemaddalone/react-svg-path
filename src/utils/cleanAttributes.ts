import { TRANSFORM_PROP_KEYS } from './applyPathTransforms';

const cleanAttributes = (attributes: any, additionalRemoves: string[] = []) => {
  const allowedAttributes = { ...attributes };
  const removeAttributes = [
    'sx',
    'sy',
    'cx',
    'cy',
    'oy',
    'ox',
    'ex',
    'ey',
    ...TRANSFORM_PROP_KEYS,
    ...additionalRemoves
  ];
  removeAttributes.forEach((attr) => delete allowedAttributes[attr]);
  return allowedAttributes;
};

export default cleanAttributes;
