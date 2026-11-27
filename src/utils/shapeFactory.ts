import createSimpleComponent, { buildPath } from "./createSimpleComponent";
import shorthand from "./shorthand";
import docs from "../docs/docs.mjs";

export const shapes = Object.keys(docs).reduce(
  (accum, cur) => {
    const doc = docs[cur as keyof typeof docs];
    const component = (props: any) => {
      const p = props ? shorthand(props) : props;
      return createSimpleComponent(doc, p);
    };
    component.displayName = doc.Component;
    (component as any).__buildPath = (props: any) => {
      const p = props ? shorthand(props) : props;
      return buildPath(doc, p);
    };
    accum[doc.Component] = component;
    return accum;
  },
  {} as Record<string, any>
);
