import { Svg, Line, Text } from 'react-svg-path';
import { scaleLinear } from 'd3-scale';

const values = [
  { val: 200 },
  { val: 137 },
  { val: 205 },
  { val: 276 },
  { val: 100 },
  { val: 150 },
  { val: 120 },
  { val: 340 },
  { val: 200 },
  { val: 249 },
  { val: 90 },
  { val: 78 },
  { val: 125 }
];
const max = Math.max.apply(
  Math,
  values.map((o) => o.val)
);

const width = 680;
const margin = 75;
const height = 400;

const yScale = scaleLinear().domain([0, max]).range([0, height]).nice();

const Bars = () => {
  return (
    <div className='App'>
      <Svg width={width + margin} height={height + margin} scale>
        <g transform={`translate(${margin / 2}, ${margin / 2})`}>
          <Line
            strokeWidth={0.5}
            stroke='#ccc'
            sx={25}
            sy={0}
            ex={25}
            ey={height}
          ></Line>
          {yScale.ticks().map((y) => {
            return (
              <g key={y}>
                <Line
                  strokeWidth={0.5}
                  stroke='#888'
                  sx={0}
                  sy={height - y}
                  ex={width}
                  ey={height - y}
                >
                  <Text fontSize='0.75em' oy={-2} sx={0} textAnchor='start'>
                    {y}
                  </Text>
                </Line>
              </g>
            );
          })}
          {values.map(({ val }, index, arr) => {
            const barCount = arr.length;
            const xStart = 50;
            const xSpace = width - xStart;
            const barWidth = xSpace / (barCount * 2);
            const x = barWidth * index * 2;
            const label = String.fromCharCode(index + 65);
            return (
              <g transform={`translate(${xStart}, 0)`} key={index}>
                <Line
                  sx={x}
                  ey={height}
                  ex={x}
                  sy={yScale(height) - yScale(val)}
                  strokeWidth={barWidth}
                  stroke='rebeccapurple'
                />
                <Text fontSize='0.75em' x={x - 5} y={height + 20}>
                  {label}
                </Text>
              </g>
            );
          })}
        </g>
      </Svg>
    </div>
  );
};

export default Bars;
