import { Circle, RadialLines, Triangle } from 'react-svg-path';
import './Targets.css';

export const Target1 = ({ cx, cy, size }) => {
  return (
    <Circle cx={cx} cy={cy} size={size} fill='none' className='line-high'>
      <Circle className='fill-low' size={size * 0.65} />
      <RadialLines
        innerSize={0}
        outerSize={size * 0.25}
        points={4}
        className='rotate45 line-high'
      />
      <RadialLines
        innerSize={size}
        outerSize={size * 1.5}
        points={4}
        className='rotate45 line-high'
      />
    </Circle>
  );
};

export const Target2 = ({ cx, cy, size }) => {
  return (
    <Circle cx={cx} cy={cy} size={size} fill='none' className='line-high'>
      <Circle className='fill-low' size={size * 0.75} />
      <RadialLines
        innerSize={0}
        outerSize={size / 3}
        points={4}
        className='line-high'
      />
      <RadialLines
        innerSize={size}
        outerSize={size * 1.3}
        points={4}
        className='line-high'
      />
    </Circle>
  );
};

export const Target3 = ({ cx, cy, size }) => {
  return (
    <Circle cx={cx} cy={cy} size={size} fill='none' className='line-high'>
      <Circle className='fill-low' size={size * 0.75} />
      <RadialLines
        innerSize={size * 0.15}
        outerSize={size * 0.4}
        points={4}
        className='line-high'
      />
      <RadialLines
        innerSize={size}
        outerSize={size * 1.3}
        points={4}
        className='line-high'
      />
    </Circle>
  );
};

export const Target4 = ({ cx, cy, size }) => {
  return (
    <Circle cx={cx} cy={cy} size={size} fill='none' className='line-high'>
      <Circle className='fill-low' size={size * 0.75} />
      <RadialLines
        innerSize={size * 0.15}
        outerSize={size * 0.4}
        points={4}
        className='line-high rotate45'
      />
      <RadialLines
        innerSize={size * 0.8}
        outerSize={size * 1.3}
        points={4}
        className='line-high'
      />
    </Circle>
  );
};

export const Target5 = ({ cx, cy, size }) => {
  return (
    <Circle cx={cx} cy={cy} size={size} fill='none' className='line-high'>
      <Circle className='fill-low' size={size * 0.75} />
      <RadialLines
        innerSize={size * 0.07}
        outerSize={size * 0.3}
        points={4}
        className='line-high rotate45'
      />
      <RadialLines
        innerSize={size * 0.8}
        outerSize={size * 1.3}
        points={4}
        className='line-dark'
        strokeWidth={5}
      />
    </Circle>
  );
};

export const Target6 = ({ cx, cy, size }) => {
  return (
    <Circle cx={cx} cy={cy} size={size} fill='none' className='line-high'>
      <Circle className='fill-low' size={size * 0.25} />
      <RadialLines
        innerSize={size * 0.8}
        outerSize={size * 1.3}
        points={4}
        className='line-dark'
        strokeWidth={8}
      />
      <RadialLines
        innerSize={size * 0.5}
        outerSize={size * 1.25}
        points={4}
        className='line-high'
      />
    </Circle>
  );
};

export const Target7 = ({ cx, cy, size }) => {
  return (
    <Circle cx={cx} cy={cy} size={size} fill='none' className='line-high'>
      <Circle className='fill-low' size={size * 0.45} />
      <RadialLines
        innerSize={size * 0.275}
        outerSize={size * 0.45}
        points={4}
        className='line-high'
      />
      <RadialLines
        innerSize={size * 0.75}
        outerSize={size}
        points={4}
        className='line-high rotate45'
      />
    </Circle>
  );
};

export const Target8 = ({ cx, cy, size }) => {
  return (
    <Circle cx={cx} cy={cy} size={size} fill='none' className='line-high'>
      <Circle className='fill-low' size={size * 0.25} />
      <RadialLines
        innerSize={size * 0.8}
        outerSize={size * 1.3}
        points={4}
        className='line-dark rotate45'
        strokeWidth={8}
      />
      <RadialLines
        innerSize={size}
        outerSize={size * 1.25}
        points={4}
        className='line-high'
      />
    </Circle>
  );
};

export const Target9 = ({ cx, cy, size }) => {
  return (
    <Circle cx={cx} cy={cy} size={size} fill='none' className='line-high'>
      <Circle className='fill-low' size={size * 0.7} />
      <Circle className='line-high' size={size * 0.3} fill='none' />
      <RadialLines
        innerSize={size * 0.8}
        outerSize={size * 1.3}
        points={4}
        className='line-dark'
        strokeWidth={4}
      />
      <RadialLines
        innerSize={size * 0.3}
        outerSize={size}
        points={4}
        className='line-high rotate45'
      />
    </Circle>
  );
};

export const Target10 = ({ cx, cy, size }) => {
  return (
    <Circle cx={cx} cy={cy} size={size} fill='none' className='line-high'>
      <Circle className='fill-low' size={size * 0.75} />
      <Triangle
        className='line-high rotate180'
        oy={3}
        size={size * 0.25}
        fill='none'
      />
      <RadialLines
        innerSize={size}
        outerSize={size * 1.2}
        points={4}
        className='line-high'
        strokeWidth={4}
      />
      <RadialLines
        innerSize={size * 0.5}
        outerSize={size * 0.75}
        points={4}
        className='line-high'
      />
    </Circle>
  );
};

export const Target11 = ({ cx, cy, size }) => {
  return (
    <Circle cx={cx} cy={cy} size={size} fill='none' className='line-high'>
      <Circle className='line-high fill-low' size={size * 0.6} />
      <RadialLines
        innerSize={0}
        outerSize={size * 0.15}
        points={4}
        className='rotate45 line-high'
      />
      <RadialLines
        innerSize={size * 0.8}
        outerSize={size * 0.9}
        points={45}
        className='line-high thin'
      />
      <RadialLines
        innerSize={size * 0.4}
        outerSize={size * 0.6}
        points={8}
        className='line-high'
      />
    </Circle>
  );
};
