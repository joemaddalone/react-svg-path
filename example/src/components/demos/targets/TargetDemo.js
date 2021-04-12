import { Svg } from 'react-svg-path';
import { Gridset } from 'gridset';
import {
  Target1,
  Target2,
  Target3,
  Target4,
  Target5,
  Target6,
  Target7,
  Target8,
  Target9,
  Target10,
  Target11
} from './Targets';
import './Targets.css';

const TargetDemo = () => {
  const size = 50;
  const g = new Gridset({
    width: 500,
    height: 500,
    rows: 5,
    cols: 5
  });

  const xy = (c, r) => {
    const { x: cx, y: cy } = g.cell(c, r);
    return { cx, cy };
  };

  return (
    <Svg width={500} height={400} className='bg-dark' scale>
      <Target1 size={size} {...xy(1, 1)} />
      <Target3 size={size} {...xy(1, 2)} />
      <Target2 size={size} {...xy(1, 3)} />
      <Target5 size={size} {...xy(2, 1)} />
      <Target7 size={size} {...xy(2, 2)} />
      <Target8 size={size} {...xy(2, 3)} />
      <Target9 size={size} {...xy(3, 1)} />
      <Target10 size={size} {...xy(3, 2)} />
      <Target11 size={size} {...xy(3, 3)} />
      <Target6 size={size} {...xy(4, 1)} />
      <Target4 size={size} {...xy(4, 2)} />
    </Svg>
  );
};

export default TargetDemo;
