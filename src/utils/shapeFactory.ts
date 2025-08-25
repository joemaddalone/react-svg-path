/* eslint-disable no-prototype-builtins */
import createSimpleComponent from "./createSimpleComponent";
import shorthand from "./shorthand";
import docs from "../docs/docs.mjs";

export const shapes = Object.keys(docs).reduce(
  (accum, cur) => {
    const component = (props: any) => {
      const p = props ? shorthand(props) : props;
      return createSimpleComponent(docs[cur as keyof typeof docs], p);
    };
    component.displayName = docs[cur as keyof typeof docs].Component;
    accum[docs[cur as keyof typeof docs].Component] = component;
    return accum;
  },
  {} as Record<string, any>
);
