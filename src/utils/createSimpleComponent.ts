import Path from '../components/path/Path';
import renderElement from './renderElement';
import validateProps from './validateProps';
import cleanAttributes from './cleanAttributes';
import applyPathTransforms from './applyPathTransforms';

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
 * Executes the path commands based on the component documentation
 */
function applyPathCommands(doc: any, propsWithDefaults: any, path: Path): Path {
  const { args, command, preCommand, preArgs, postCommand } = doc;

  // Commands/components like Line require an initial moveTo/M command.
  // We provide this in the component as sx & sy props, but need to translate
  // that into path.preCommand(preArgs)
  if (preCommand) {
    const prePathArgs = preArgs.map((k: any) => propsWithDefaults[k]);
    (path[preCommand as keyof Path] as any).apply(path, prePathArgs);
  }

  // Apply our initial command from the component doc.
  (path[command as keyof Path] as any).apply(
    path,
    args.map((k: any) => propsWithDefaults[k])
  );

  // Commands/components like Quad allow for T/t/S/s commands.
  // We provide this in the component as T, t, S, & s props, but need
  // to translate that into path.postCommand()
  if (postCommand) {
    const relativePostCommand = Object.prototype.hasOwnProperty.call(
      propsWithDefaults,
      postCommand
    );
    const absolutePostCommand = Object.prototype.hasOwnProperty.call(
      propsWithDefaults,
      postCommand.toUpperCase()
    );

    if (relativePostCommand) {
      const relativePropValue = propsWithDefaults[postCommand];
      if (relativePropValue && relativePropValue.length) {
        relativePropValue.forEach((cmd: any) =>
          (path[postCommand as keyof Path] as any).apply(path, cmd)
        );
      }
    }

    if (absolutePostCommand) {
      const absolutePropValue = propsWithDefaults[postCommand.toUpperCase()];
      if (absolutePropValue && absolutePropValue.length) {
        absolutePropValue.forEach((cmd: any) =>
          (path[postCommand.toUpperCase() as keyof Path] as any).apply(path, cmd)
        );
      }
    }
  }

  return path;
}

/**
 * Builds a Path instance, cleaned attributes, and cursor-derived nesting anchors
 * for a shape component.
 */
export function buildPath(doc: any, props: any) {
  const { propsWithDefaults, attributes } = validateAndAugmentProps(doc, props);
  const path = applyPathCommands(doc, propsWithDefaults, new Path());
  applyPathTransforms(path, propsWithDefaults, {
    cx: propsWithDefaults.cx,
    cy: propsWithDefaults.cy
  });
  const { x: sx, y: sy } = path.startPoint;
  const { x: ex, y: ey } = path.currentPoint;

  return {
    path,
    propsWithDefaults,
    attributes,
    nesting: { sx, sy, ex, ey }
  };
}

/**
 * This process uses the doc for any given component and creates a component where the
 * output is simply `path.toComponent()`. We provide props validation and defaults
 * and derive nesting anchors directly from the Path cursor state.
 */
export default (doc: any, props: any) => {
  const { path, propsWithDefaults, attributes, nesting } = buildPath(doc, props);
  const children = propsWithDefaults.children;

  return renderElement({
    path,
    pathMethod: () => path,
    attributes,
    ...nesting,
    children
  });
};
