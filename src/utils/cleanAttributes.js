const cleanAttributes = (attributes) => {
  const allowedAttributes = { ...attributes };
  const removeAttributes = ['sx', 'sy', 'cx', 'cy', 'oy', 'ox', 'ex', 'ey'];
  removeAttributes.forEach((attr) => delete allowedAttributes[attr]);
  return allowedAttributes;
};

export default cleanAttributes;
