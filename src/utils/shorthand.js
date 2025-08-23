import { shorthands } from '../docs/docs.mjs';
const shorthand = (componentProps) => {
  const props = { ...componentProps };
  const shorts = Object.values(shorthands);
  shorts.forEach((sh) => {
    if (props.hasOwnProperty(sh.k)) {
      if (isNaN(props[sh.k])) {
        throw new Error(`${sh.k} isNaN.`);
      }
      sh.p.forEach((p) => {
        props[p] = props[sh.k];
      });
      delete props[sh.k];
    }
  });
  return props;
};

export default shorthand;
