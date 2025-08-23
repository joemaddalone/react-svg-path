const validateProps = (props, componentDoc, componentProps) => {
  const augment = {};
  const msg = [];
  const result = Object.keys(componentProps).every((k) => {
    const hasProp = props.hasOwnProperty(k);
    if (!componentProps[k].isRequired && !hasProp) {
      if (componentProps[k].type !== 'boolean') {
        augment[k] =
          componentDoc.props[k].default !== undefined
            ? componentProps[k].default
            : null;
      }
      return true;
    }
    if (hasProp && componentProps[k].type === 'boolean') {
      return props[k] === true || props[k] === false;
    }
    if (componentProps[k].isRequired && !hasProp) {
      if (componentProps[k].hasOwnProperty('default')) {
        augment[k] = componentDoc.props[k].default;
        return true;
      } else {
        msg.push(`Required ${k} prop is missing in ${componentDoc.Component}.`);
        return false;
      }
    }
    const valid = componentProps[k].validator(props[k]);
    if (!valid) {
      msg.push(`${k} prop is invalid in ${componentDoc.Component}.`);
    }
    return hasProp && valid;
  });
  return { result, augment, msg };
};

export default validateProps;
