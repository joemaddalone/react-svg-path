import Path from '../components/Path';
import render from '../utils/render';

export default (doc, props) => {
  const { args, command, props: componentProps, nestingProps } = doc;

  const propsValidation = (obj) => {
    const augment = {};
    const msg = [];
    const result = Object.keys(componentProps).every((k) => {
      // eslint-disable-next-line no-prototype-builtins
      const hasProp = obj.hasOwnProperty(k);
      if (!componentProps[k].isRequired && !hasProp) {
        if (componentProps[k].type !== 'boolean') {
          augment[k] = null;
        }
        return true;
      }
      if (componentProps[k].type === 'boolean') {
        return props?.k ?? componentProps[k]?.default;
      }
      if (componentProps[k].isRequired && !hasProp) {
        msg.push(`Required ${k} prop is missing in ${doc.Component}.`);
        return false;
      }
      const valid = componentProps[k].validator(obj[k]);
      if (!valid) {
        msg.push(`${k} prop is invalid in ${doc.Component}.`);
      }
      return hasProp && valid;
    });
    return { result, augment, msg };
  };

  const { result, msg } = propsValidation(props);
  if (!result) {
    msg.forEach((m) => console.error(m));
    throw new Error(`${msg.join(',')}`);
  }

  // pathArgs are the arguments in order for the 'command'.
  const pathArgs = args.map((k) => props[k]);
  const children = props.children;
  const attributes = { ...props };
  // Remove any expected props.
  Object.keys(componentProps).forEach((k) => delete attributes[k]);
  // Remove children.
  delete attributes.children;

  // Create nesting ex, ey, sx, and sy values.
  let nesting;
  if (typeof nestingProps === 'function') {
    nesting = nestingProps(props);
  } else {
    nesting = Object.keys(nestingProps).reduce(
      (a, c) => ({ ...a, [c]: props[nestingProps[c]] }),
      {}
    );
  }

  const p = new Path();
  const pathMethod = p[command].bind(p, ...pathArgs);
  return render({
    pathMethod,
    attributes,
    ...nesting,
    children
  });
};
