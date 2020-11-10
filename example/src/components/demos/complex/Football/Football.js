import React from "react";
import { Svg, Rect, Line, Text, Polyline } from "react-svg-path";
import Dimension from "./Dimension";
import "./Football.css";

const Football = ({ width }) => {
  const marginX = 50;
  const marginY = 50;
  const canvasWidth = width || 800;
  const scale = canvasWidth / 360;
  const canvasHeight = 160 * scale;

  const field = {
    width: canvasWidth,
    height: canvasHeight,
    endzoneWidth: 30 * scale,
    playingWidth: 300 * scale,
    tickLength: 2 * scale,
    topTickY: 59 * scale,
    bottomTickY: 100 * scale,
    bottomNumY: 130 * scale,
    topNumY: 30 * scale,
    tickCount: 101,
    scale,
  };
  Object.keys(field).forEach((k) => (field[k] = +field[k].toFixed(2)));

  const commonTickProps = {
    ex: 0,
    relative: true,
    ey: -field.tickLength,
  };

  return (
    <Svg width={canvasWidth + marginX} height={canvasHeight + marginY}>
      <defs>
        <marker
          id="arrow-marker"
          markerWidth="10"
          markerHeight="11"
          refX="9"
          refY="5"
          orient="auto-start-reverse"
          markerUnits="userSpaceOnUse"
        >
          <Polyline
            points={[
              [0, 0],
              [8, 5],
              [1, 10],
            ]}
            stroke="green"
            fill="none"
          />
        </marker>
      </defs>
      <g
        transform={`translate(${marginX / 2},${marginY / 2})`}
        className="football-diagram"
      >
        <Rect
          cx={field.width / 2}
          cy={field.height / 2}
          width={field.width}
          height={field.height}
        />
        {Array.from({ length: field.tickCount }).map((_, index) => {
          const sx = field.endzoneWidth + (field.playingWidth / 100) * index;
          const isFifth = index % 5 === 0;
          return (
            <g key={index}>
              <Line
                {...commonTickProps}
                sx={sx}
                sy={0}
                ey={isFifth ? field.height : field.tickLength}
              />
              {!isFifth ? (
                <>
                  <Line {...commonTickProps} sx={sx} sy={field.height} />
                  <Line {...commonTickProps} sx={sx} sy={field.topTickY} />
                  <Line
                    {...commonTickProps}
                    ey={field.tickLength}
                    sx={sx}
                    sy={field.bottomTickY}
                  />
                </>
              ) : (
                index !== 0 &&
                index !== field.tickCount - 1 && (
                  <>
                    <Line
                      {...commonTickProps}
                      sx={sx - field.tickLength / 2}
                      sy={field.topTickY}
                      ey={0}
                      ex={field.tickLength}
                    />
                    <Line
                      {...commonTickProps}
                      sx={sx - field.tickLength / 2}
                      sy={field.bottomTickY}
                      ey={0}
                      ex={field.tickLength}
                    />
                    {index % 10 === 0 && (
                      <g>
                        <Text
                          className="field-marker-number"
                          x={sx - field.tickLength / 2 - (index < 50 ? 12 : 4)}
                          y={field.bottomNumY}
                        >
                          {index < 50 && "-"}
                          {index <= 50 ? index : 50 - Math.abs(index - 50)}
                          {index > 50 && "-"}
                        </Text>
                        <Text
                          className="field-marker-number"
                          x={sx - field.tickLength / 2 - (index < 50 ? 12 : 4)}
                          y={field.topNumY}
                          transform="rotate(180)"
                        >
                          {index > 50 && "-"}
                          {index <= 50 ? index : 50 - Math.abs(index - 50)}
                          {index < 50 && "-"}
                        </Text>
                      </g>
                    )}
                  </>
                )
              )}
            </g>
          );
        })}

        <Dimension
          sx={0}
          sy={field.height + 15}
          ex={field.width}
          ey={field.height + 15}
          scale={field.scale}
          text="360'"
          markerId="arrow-marker"
        />
        <Dimension
          sx={field.width - field.endzoneWidth}
          sy={0}
          ex={field.width}
          ey={0}
          scale={field.scale}
          text="30'"
          markerId="arrow-marker"
        />
        <Dimension
          sx={-15}
          sy={0}
          ex={-15}
          ey={field.height}
          scale={field.scale}
          text="160'"
          markerId="arrow-marker"
        />
        <Dimension
          sx={field.endzoneWidth}
          sy={0}
          ex={field.endzoneWidth}
          ey={field.topTickY}
          scale={field.scale}
          text="60'"
          markerId="arrow-marker"
        />
        <Dimension
          sx={field.endzoneWidth}
          sy={field.bottomTickY}
          ex={field.endzoneWidth}
          ey={field.height}
          scale={field.scale}
          text="60'"
          markerId="arrow-marker"
        />
        <Dimension
          sx={field.width - field.endzoneWidth}
          sy={field.topTickY}
          ex={field.width - field.endzoneWidth}
          ey={field.bottomTickY}
          scale={field.scale}
          text="40'"
          markerId="arrow-marker"
        />
      </g>
    </Svg>
  );
};

export default Football;
