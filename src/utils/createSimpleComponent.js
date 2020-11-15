import Path from '../components/Path';
import render from '../utils/render';

export default (doc, props) => {
  const { args, command, props: componentProps, nestingProps } = doc;

  const propsValidation = (obj) => {
    return Object.keys(componentProps).every((k) => {
      // eslint-disable-next-line no-prototype-builtins
      const hasProp = obj.hasOwnProperty(k);
      if (!componentProps[k].isRequired && !hasProp) {
        return true;
      }
      if (componentProps[k].type === 'boolean') {
        return true;
      }
      if (componentProps[k].isRequired && !hasProp) {
        return false;
      }
      return hasProp && componentProps[k].validator(obj[k]);
    });
  };

  const isValid = propsValidation(props);
  if (!isValid) {
    throw new Error('invalid props');
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
