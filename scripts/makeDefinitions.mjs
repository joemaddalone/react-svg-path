import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { basicShapes, curves } from '../src/docs/docs.mjs';

const makeDefinitions = () => {
  console.log('Generating type definitions...');
  const mapType = (t) => {
    switch (t) {
      case '2d-array':
        return 'any[][]';
      case 'point-array':
        return 'number[][]';
      default:
        return t;
    }
  };

  const definitions = [];
  for (const doc in basicShapes) {
    const shape = basicShapes[doc];
    const props = shape.props;
    definitions.push(
      `export interface ${shape.Component}Props  extends SVGAttributes<SVGElement> {`
    );
    for (const prop in props) {
      const p = props[prop];
      definitions.push(`  ${prop}?: ${mapType(p.type)};`);
    }
    definitions.push(`}`);
    definitions.push(``);
    definitions.push(
      `export declare const ${shape.Component}: React.FC<${shape.Component}Props>;`
    );
    definitions.push(``);
  }

  for (const doc in curves) {
    const shape = curves[doc];
    const props = shape.props;
    definitions.push(
      `export interface ${shape.Component}Props  extends SVGAttributes<SVGElement> {`
    );
    for (const prop in props) {
      const p = props[prop];
      definitions.push(`  ${prop}?: ${mapType(p.type)};`);
    }
    definitions.push(`}`);
    definitions.push(``);
    definitions.push(
      `export declare const ${shape.Component}: React.FC<${shape.Component}Props>;`
    );
    definitions.push(``);
  }

  definitions.unshift(`import { SVGAttributes } from "react";`);

  const content = definitions.join('\n');

  // read the contents of ../node_modules/@joemaddalone/path/dist/path.d.ts
  const pathContent = `
  export declare class Path {
    pathData: string[];
    attributes: object[];
    static angleInRadians(angle: number): number;
    static polarToCartesian(cx: number, cy: number, radius: number, angle: number): any;
    static clockwisePoint(cx: number, cy: number, radius: number, angle: number): any;
    static radialPoints(radius: number, cx: number, cy: number, numOfPoints: number, offsetAngle: number, vertexSkip?: number): object[];
    static positionByArray(size: number, shape: any[], sx: number, sy: number): object[];
    static macro(name: string, fn: (...params: any[]) => any): (...params: any[]) => any;
    static attr(key: string, val: any): void;
    fill(val: string | number): Path;
    stroke(val: string): Path;
    strokeWidth(val: string | number): Path;
    style(val: string): Path;
    m(x: number, y: number): Path;
    M(x: number, y: number): Path;
    moveTo(x: number, y: number, relative?: boolean): Path;
    l(x: number, y: number): Path;
    L(x: number, y: number): Path;
    lineTo(x: number, y: number, relative?: boolean): Path;
    H(x: number): Path;
    h(x: number): Path;
    horizontalTo(x: number, relative?: boolean): Path;
    V(y: number): Path;
    v(y: number): Path;
    verticalTo(y: number, relative?: boolean): Path;
    Q(cx: number, cy: number, ex: number, ey: number): Path;
    q(cx: number, cy: number, ex: number, ey: number): Path;
    qCurve(cx: number, cy: number, ex: number, ey: number, relative?: boolean): Path;
    T(x: number, y: number): Path;
    t(x: number, y: number): Path;
    tCurveTo(x: number, y: number, relative?: boolean): Path;
    C(cx1: number, cy1: number, cx2: number, cy2: number, ex: number, ey: number): Path;
    c(cx1: number, cy1: number, cx2: number, cy2: number, ex: number, ey: number): Path;
    cCurve(cx1: number, cy1: number, cx2: number, cy2: number, ex: number, ey: number, relative?: boolean): Path;
    S(cx: number, cy: number, ex: number, ey: number): Path;
    s(cx: number, cy: number, ex: number, ey: number): Path;
    sCurveTo(cx: number, cy: number, ex: number, ey: number, relative?: boolean): Path;
    A(rx: number, ry: number, rotation: number, arc: boolean, sweep: boolean, ex: number, ey: number): Path;
    a(rx: number, ry: number, rotation: number, arc: boolean, sweep: boolean, ex: number, ey: number): Path;
    arc(rx: number, ry: number, rotation: number, arc: boolean, sweep: boolean, ex: number, ey: number, relative?: boolean): Path;
    down(px: number): Path;
    up(px: number): Path;
    right(px: number): Path;
    left(px: number): Path;
    toArray(): Path;
    toArray(): Path;
    toString(): string;
    toCommands(): any[][];
    toAnnotatedCommands(): object[];
    toElement(attributes?: any): Element;
    circle(size: number, cx: number, cy: number, centerEnd?: boolean): Path;
    cross(width: number, height: number, cx: number, cy: number, centerEnd?: boolean): Path;
    ellipse(width: number, height: number, cx: number, cy: number, centerEnd?: boolean): Path;
    lens(width: number, height: number, cx: number, cy: number, centerEnd?: boolean): Path;
    omino(size: number, shape: any[], sx: number, sy: number, lined?: boolean): Path;
    polygon(points: number[]): Path;
    polygram(size: number, points: number[], cx: number, cy: number, vertexSkip?: number, centerEnd?: boolean): Path;
    polyline(points: number[], relative?: boolean): Path;
    radialLines(outerSize: number, innerSize: number, points: number, cx: number[], cy: number, centerEnd?: boolean): Path;
    rect(width: number, height: number, cx: number, cy: number, centerEnd?: boolean): Path;
    regPolygon(size: number, sides: number, cx: number, cy: number, centerEnd?: boolean): Path;
    roundedRect(width: number, height: number, radius: number, cx: number, cy: number, centerEnd?: boolean): Path;
    roundedSquare(size: number, radius: number, cx: number, cy: number, centerEnd?: boolean): Path;
    sector(cx: number, cy: number, size: number, startAngle: number, endAngle: number, centerEnd?: boolean): Path;
    segment(cx: number, cy: number, size: number, startAngle: number, endAngle: number, centerEnd?: boolean): Path;
    square(size: number, cx: number, cy: number, centerEnd?: boolean): Path;
    star(outerSize: number, innerSize: number, points: number[], cx: number, cy: number, centerEnd?: boolean): Path;
    symH(width: number, height: number, cx: number, cy: number, centerEnd?: boolean): Path;
    symI(width: number, height: number, cx: number, cy: number, centerEnd?: boolean): Path;
    symX(width: number, height: number, cx: number, cy: number, centerEnd?: boolean): Path;
    triangle(size: number, cx: number, cy: number, centerEnd?: boolean): Path;
  }`;

  const fileContent = `${content}\n\n${pathContent}`;
  // write fileContent to ../src/components/definitions.d.ts
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, '../dist/react-svg-path.d.ts');
  fs.writeFileSync(filePath, fileContent);
};

export default makeDefinitions;
