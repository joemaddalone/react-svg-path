import React from "react";
import DagSinglePath from "./components/demos/dag/DagSinglePath";
import DagTwoPaths from "./components/demos/dag/DagTwoPaths";
import DagNodes from "./components/demos/dag/DagNodes";
import Macros from "./components/demos/Macros";

import {
  Rect,
  Square,
  Circle,
  Ellipse,
  Segment,
  Sector,
  Polygon,
  RegPolygon,
  Triangle,
  Polyline,
} from "./components/demos/basic";
import Svg from "./components/helpers/Svg";
import Pie from "./components/demos/complex/Pie";
import Donut from "./components/demos/complex/Donut";
import SparkLine from "./components/demos/complex/SparkLine";

import "./App.css";
const App = () => {
  const basicDemos = [
    Rect,
    Square,
    Triangle,
    RegPolygon,
    Ellipse,
    Circle,
    Sector,
    Segment,
    Polyline,
    Polygon,
  ];

  const pieData = [
    {
      color: "#086972",
      percent: 20,
      nested: [
        { color: "rgba(0,100,25,0.9)", percent: 10 },
        { color: "rgba(0,100,25,0.8)", percent: 10 },
      ],
    },
    {
      color: "#01a9b4",
      percent: 30,
      nested: [
        { color: "rgba(0,100,25,0.7)", percent: 10 },
        { color: "rgba(0,100,25,0.6)", percent: 10 },
        { color: "rgba(0,100,25,0.5)", percent: 10 },
      ],
    },
    {
      color: "#87dfd6",
      percent: 50,
      nested: [
        { color: "rgba(0,100,25,0.4)", percent: 25 },
        { color: "rgba(0,100,25,0.3)", percent: 25 },
      ],
    },
  ];
  return (
    <>
      <h2>react-svg-path</h2>
      <hr />
      <a href="https://github.com/joemaddalone/react-svg-path">
        https://github.com/joemaddalone/react-svg-path
      </a>

      <h3 className="ui-header">Demos</h3>
      <p>
        The svg element below contains only a single path. This may not be
        ideal, depending on your needs, but it demonstrates the ability to
        create complex shapes in a single path with react-svg-path
      </p>
      <div className="dag">
        <div style={{ margin: 20 }}>
          <DagSinglePath />
          <a
            href="https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/dag/DagSinglePath.js"
            rel="noopener noreferrer"
            target="_blank"
          >
            source
          </a>
        </div>
        <p>
          We can easily convert this to two paths. One for the nodes and one for
          the connecting lines.
        </p>
        <div style={{ margin: 20 }}>
          <DagTwoPaths />
          <a
            href="https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/dag/DagTwoPaths.js"
            rel="noopener noreferrer"
            target="_blank"
          >
            source
          </a>
        </div>
        <p>
          Likewise we can use .toComponent() to create reusable components for
          each node. Each of these nodes is clickable.
        </p>
        <div style={{ margin: 20 }}>
          <DagNodes />
          <a
            href="https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/dag/DagNodes.js"
            rel="noopener noreferrer"
            target="_blank"
          >
            source
          </a>
        </div>
      </div>

      <p>Macros are a way to save a common set of path steps for reuse.</p>
      <div style={{ margin: 20 }}>
        <Macros />
        <a
          href="https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/Macros.js"
          rel="noopener noreferrer"
          target="_blank"
        >
          source
        </a>
      </div>
      <p>Macros are so nice we included a bunch for you.</p>
      <div className="basic-shapes">
        <h2 className="ui-header">Basic Shapes</h2>
        {basicDemos.map((C, i) => (
          <span key={i}>
            <C />
            <a
              href={`https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/basic/${C.displayName}.js`}
              rel="noopener noreferrer"
              target="_blank"
            >
              source
            </a>
          </span>
        ))}
      </div>

      <h2 className="ui-header">Combining Shapes</h2>
      <div className="complex">
        <h3 className="ui-header">multiple .sectors</h3>
        <Svg width={250} height={160}>
          <Pie size={150} cx={80} cy={80} data={pieData} />
        </Svg>
        <a
          href={`https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/complex/Pie.js`}
          rel="noopener noreferrer"
          target="_blank"
        >
          source
        </a>
        <h3 className="ui-header">multiple .segments</h3>
        <Svg width={250} height={160}>
          <Donut width={25} size={150} cx={80} cy={80} data={pieData} />
        </Svg>
        <a
          href={`https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/complex/Donut.js`}
          rel="noopener noreferrer"
          target="_blank"
        >
          source
        </a>
        <h3 className="ui-header">multiple .sectors + .segments</h3>
        <Svg width={180} height={180}>
          <Pie size={130} cx={90} cy={90} data={pieData} />
          <Donut
            width={20}
            size={175}
            cx={90}
            cy={90}
            stroke="#fff"
            data={pieData.map((pd) => pd.nested).flat()}
          />
        </Svg>
        <h3 className="ui-header">fitted .polyline</h3>
        <SparkLine
          width={300}
          height={150}
          data={[-10, -45, 10, 0, 35, 10, -9, 25, 15, 75]}
        />
        <a
          href={`https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/complex/SparkLine.js`}
          rel="noopener noreferrer"
          target="_blank"
        >
          source
        </a>
      </div>
    </>
  );
};

export default App;
