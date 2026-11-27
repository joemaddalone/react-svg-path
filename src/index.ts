import Path from "./components/path/Path";

/**  path basicShapes */
export {
  Circle,
  Isocube,
  Kite,
  Ellipse,
  Lens,
  Polygon,
  Polygram,
  Polyline,
  RadialLines,
  Rect,
  RegPolygon,
  Sector,
  Segment,
  Square,
  Star,
  Triangle,
  Line,
  Arc,
  Cubic,
  Quad,
  Cross,
  SymV,
  SymX,
  SymH,
  SymI,
  RoundedRect,
  RoundedSquare,
  Omino,
} from "./components/shapes";

/** react-svg-path specific  */
export { Text } from "./components/text/Text";
export { Group } from "./components/containers/Group";
export { Svg } from "./components/containers/Svg";
export { PathMerge } from "./components/path/PathMerge";
export { MarkerArrow } from "./components/markers/MarkerArrow";
export { MarkerTriangle } from "./components/markers/MarkerTriangle";
export { MarkerLine } from "./components/markers/MarkerLine";
export { MarkerSquare } from "./components/markers/MarkerSquare";
export { TextPath } from "./components/text/TextPath";
export { Distance } from "./components/dimension/Distance";
export { AlongPath } from "./components/path/AlongPath";
export { CanvasPath } from "./components/canvas/CanvasPath";
export { usePath } from "./hooks/usePath";

export type {
  BoundingBox,
  CanvasPathSink,
  DocumentLike,
  Matrix,
  PathDescriptor,
  PathSegment,
  Point,
  SegmentType,
  Subpath,
  Tangent,
  ToCanvasOptions,
  ToElementOptions,
} from "@joemaddalone/path";

export type {
  AttachTarget,
  BBoxAnchor,
  PathTransformProps,
  RotateProp,
  ScaleProp,
  TranslateProp,
  CoordinateMode,
} from "./types/shapes/common";

export type { UsePathResult } from "./hooks/usePath";
export type { AlongPathProps, AlongPathSample } from "./components/path/AlongPath";
export type { CanvasPathProps } from "./types/canvas";

export default Path;
