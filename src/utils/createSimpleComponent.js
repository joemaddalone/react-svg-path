import Path from '../components/Path';
import render from '../utils/render';
import validateProps from './validateProps';
import cleanAttributes from './cleanAttributes';

/**
 * This process uses the doc for any given component and creates a component where the
 * output is simply `path.method.toComponent()`. We provide props validation and defaults
 * and incorporate the nesting function for a component where available.
 */

export default (doc, props) => {
  const { args, command, props: componentProps, nestingProps } = doc;
  // Validate props according to the componentProps.
  const { result, msg, augment } = validateProps(props, doc, componentProps);
  if (!result) {
    msg.forEach((m) => console.error(m));
    throw new Error(`${msg.join(',')}`);
  }

  // Augment contains any defaults where a required prop was not provided - think defaultProps.
  const propsWithDefaults = { ...props, ...augment };

  // pathArgs are the arguments in order for the 'command'.
  const pathArgs = args.map((k) => propsWithDefaults[k]);
  const children = propsWithDefaults.children;

  // Remove any expected props. Leaving only path attributes, merge, and attach.
  const attributes = cleanAttributes({ ...propsWithDefaults }, [
    ...Object.keys(componentProps),
    'children'
  ]);

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
  const path = new Path();

  // Commands/components like Line require an initial moveTo/M command.
  // We provide this in the component as sx & sy props, but need to translate
  // that into path.preCommand(preArgs)
  if (doc.preCommand) {
    const prePathArgs = doc.preArgs.map((k) => propsWithDefaults[k]);
    path[doc.preCommand].apply(path, prePathArgs);
  }

  // Commands/components like Quad allow for T/t/S/s commands.
  // We provide this in the component as T, t, S, & s props, but need
  // to translate that into path.postCommand()
  if (doc.postCommand) {
    const postCommand = doc.postCommand;
    // This is cubic or quad
    // What are the commands?  s, S, t, T
    // eslint-disable-next-line no-prototype-builtins
    const relativePostCommand = propsWithDefaults.hasOwnProperty(postCommand);
    // eslint-disable-next-line no-prototype-builtins
    const absolutePostCommand = propsWithDefaults.hasOwnProperty(
      postCommand.toUpperCase()
    );
    if (relativePostCommand || absolutePostCommand) {
      pathMethod = () => {
        // Apply our initial command from the component doc.
        path[command].apply(path, pathArgs);
        // Determine if this is the relative or absolute command
        const relativePropValue = propsWithDefaults[postCommand];
        const absolutePropValue = propsWithDefaults[postCommand.toUpperCase()];
        if (
          relativePostCommand &&
          relativePropValue &&
          relativePropValue.length
        ) {
          relativePropValue.forEach((cmd) =>
            path[postCommand].apply(path, cmd)
          );
        }
        if (
          absolutePostCommand &&
          absolutePropValue &&
          absolutePropValue.length
        ) {
          absolutePropValue.forEach((cmd) =>
            path[postCommand.toUpperCase()].apply(path, cmd)
          );
        }
        return path;
      };
    }
  }

  if (!pathMethod) {
    pathMethod = path[command].bind(path, ...pathArgs);
  }

  return render({
    pathMethod,
    attributes,
    ...nesting,
    children
  });
};
