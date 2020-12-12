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
          augment[k] =
            doc.props[k].default !== undefined ? doc.props[k].default : null;
        }
        return true;
      }
      if (componentProps[k].type === 'boolean') {
        return props[k] === true || props[k] === false;
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

  const { result, msg, augment } = propsValidation(props);
  if (!result) {
    msg.forEach((m) => console.error(m));
    throw new Error(`${msg.join(',')}`);
  }

  const propsWithDefaults = { ...props, ...augment };

  // pathArgs are the arguments in order for the 'command'.
  const pathArgs = args.map((k) => propsWithDefaults[k]);
  const children = propsWithDefaults.children;
  const attributes = { ...propsWithDefaults };
  // Remove any expected props.
  Object.keys(componentProps).forEach((k) => delete attributes[k]);
  // Remove children.
  delete attributes.children;
  delete attributes.sx;
  delete attributes.sy;
  delete attributes.cy;
  delete attributes.cx;

  // Create nesting ex, ey, sx, and sy values.
  let nesting;
  if (typeof nestingProps === 'function') {
    nesting = nestingProps(propsWithDefaults);
  } else {
    nesting = Object.keys(nestingProps).reduce(
      (a, c) => ({ ...a, [c]: props[nestingProps[c]] }),
      {}
    );
  }

  let pathMethod;
  const p = new Path();
  if (doc.preCommand) {
    const prePathArgs = doc.preArgs.map((k) => propsWithDefaults[k]);
    p[doc.preCommand].apply(p, prePathArgs);
  }

  if (doc.postCommand) {
    const pcmd = doc.postCommand;
    // this is cubic or quad
    // what are the commands?  s, S, t, T
    // eslint-disable-next-line no-prototype-builtins
    const relativePostCommand = propsWithDefaults.hasOwnProperty(pcmd);
    // eslint-disable-next-line no-prototype-builtins
    const absolutePostCommand = propsWithDefaults.hasOwnProperty(
      pcmd.toUpperCase()
    );
    if (relativePostCommand || absolutePostCommand) {
      pathMethod = () => {
        p[command].apply(p, pathArgs);
        const relativePropValue = propsWithDefaults[pcmd];
        const absolutePropValue = propsWithDefaults[pcmd.toUpperCase()];
        if (
          relativePostCommand &&
          relativePropValue &&
          relativePropValue.length
        ) {
          relativePropValue.forEach((cmd) => p[pcmd].apply(p, cmd));
        }
        if (
          absolutePostCommand &&
          absolutePropValue &&
          absolutePropValue.length
        ) {
          absolutePropValue.forEach((cmd) =>
            p[pcmd.toUpperCase()].apply(p, cmd)
          );
        }
        return p;
      };
    }
  }

  if (!pathMethod) {
    pathMethod = p[command].bind(p, ...pathArgs);
  }

  return render({
    pathMethod,
    attributes,
    ...nesting,
    children
  });
};
