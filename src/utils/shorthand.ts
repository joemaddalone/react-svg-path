import { shorthands } from '../docs/docs.mjs';
const shorthand = (componentProps: any) => {
  const props = { ...componentProps };
  const shorts = Object.values(shorthands);
  shorts.forEach((sh: any) => {
    if (Object.prototype.hasOwnProperty.call(props, sh.k)) {
      if (isNaN(props[sh.k])) {
        throw new Error(`${sh.k} isNaN.`);
      }
      sh.p.forEach((p: any) => {
        props[p] = props[sh.k];
      });
      delete props[sh.k];
    }
  });
  return props;
};

export default shorthand;
