import Path from '../components/path/Path';
import renderElement from './renderElement';
import validateProps from './validateProps';
import cleanAttributes from './cleanAttributes';

/**
 * Validates props and augments them with defaults
 */
function validateAndAugmentProps(doc: any, props: any) {
  const { props: componentProps } = doc;
  const { result, msg, augment } = validateProps(props, doc, componentProps);

  if (!result) {
    msg.forEach((m: any) => console.error(m));
    throw new Error(`${msg.join(',')}`);
  }

  // Augment contains any defaults where a required prop was not provided - think defaultProps.
  const propsWithDefaults = { ...props, ...augment };

  // Remove any expected props. Leaving only path attributes, merge, and attach.
  const attributes = cleanAttributes({ ...propsWithDefaults }, [
    ...Object.keys(componentProps),
    'children'
  ]);

  return { propsWithDefaults, attributes };
}

/**
 * Creates nesting ex, ey, sx, and sy values
 */
function handleNesting(nestingProps: any, props: any, propsWithDefaults: any) {
  if (typeof nestingProps === 'function') {
    return nestingProps(propsWithDefaults);
  } else {
    return Object.keys(nestingProps).reduce(
      (a: any, c: any) => ({ ...a, [c]: props[nestingProps[c]] }),
      {}
    );
  }
}

/**
 * Creates the path method based on the component documentation
 */
function createPathMethod(doc: any, propsWithDefaults: any, path: Path) {
  const { args, command, preCommand, preArgs, postCommand } = doc;

  // Commands/components like Line require an initial moveTo/M command.
  // We provide this in the component as sx & sy props, but need to translate
  // that into path.preCommand(preArgs)
  if (preCommand) {
    const prePathArgs = preArgs.map((k: any) => propsWithDefaults[k]);
    (path[preCommand as keyof Path] as any).apply(path, prePathArgs);
  }

  // Commands/components like Quad allow for T/t/S/s commands.
  // We provide this in the component as T, t, S, & s props, but need
  // to translate that into path.postCommand()
  if (postCommand) {
    const relativePostCommand = Object.prototype.hasOwnProperty.call(propsWithDefaults, postCommand);
    const absolutePostCommand = Object.prototype.hasOwnProperty.call(propsWithDefaults, postCommand.toUpperCase());

    if (relativePostCommand || absolutePostCommand) {
      return () => {
        // Apply our initial command from the component doc.
        (path[command as keyof Path] as any).apply(path, args.map((k: any) => propsWithDefaults[k]));

        // Determine if this is the relative or absolute command
        const relativePropValue = propsWithDefaults[postCommand];
        const absolutePropValue = propsWithDefaults[postCommand.toUpperCase()];

        if (relativePostCommand && relativePropValue && relativePropValue.length) {
          relativePropValue.forEach((cmd: any) =>
            (path[postCommand as keyof Path] as any).apply(path, cmd)
          );
        }

        if (absolutePostCommand && absolutePropValue && absolutePropValue.length) {
          absolutePropValue.forEach((cmd: any) =>
            (path[postCommand.toUpperCase() as keyof Path] as any).apply(path, cmd)
          );
        }

        return path;
      };
    }
  }

  // Default path method
  return (path[command as keyof Path] as any).bind(path, ...args.map((k: any) => propsWithDefaults[k]));
}

/**
 * This process uses the doc for any given component and creates a component where the
 * output is simply `path.method.toComponent()`. We provide props validation and defaults
 * and incorporate the nesting function for a component where available.
 */
export default (doc: any, props: any) => {
  const { nestingProps } = doc;

  // Validate props and get augmented props with defaults
  const { propsWithDefaults, attributes } = validateAndAugmentProps(doc, props);

  // Get children
  const children = propsWithDefaults.children;

  // Create nesting ex, ey, sx, and sy values
  const nesting = handleNesting(nestingProps, props, propsWithDefaults);

  // Create the path method
  const path = new Path();
  const pathMethod = createPathMethod(doc, propsWithDefaults, path);

  return renderElement({
    pathMethod,
    attributes,
    ...nesting,
    children
  });
};
