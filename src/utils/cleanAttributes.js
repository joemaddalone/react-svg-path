const cleanAttributes = (attributes, additionalRemoves = []) => {
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
    ...additionalRemoves
  ];
  removeAttributes.forEach((attr) => delete allowedAttributes[attr]);
  return allowedAttributes;
};

export default cleanAttributes;
