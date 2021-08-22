import React from 'react';
import { PointArray } from './PointArray';
import { TwoDArray } from './TwoDArray';

export const ComponentKnobs = ({
  label,
  type,
  value,
  onChange,
  pointLength
}) => {
  if (type === 'number') {
    return (
      <div className='ui labeled input'>
        <label htmlFor={label} className='ui label'>
          {label}
        </label>
        <input
          id={label}
          inputMode='numeric'
          type='number'
          value={value}
          onChange={(e) => onChange(label, +e.target.value)}
        />
      </div>
    );
  }
  if (type === 'point-array') {
    return (
      <PointArray
        value={value}
        inputMode='numeric'
        pointLength={pointLength}
        onChange={onChange}
        label={label}
      />
    );
  }
  if (type === '2d-array') {
    return (
      <TwoDArray
        value={value}
        inputMode='numeric'
        pointLength={pointLength}
        onChange={onChange}
        label={label}
      />
    );
  }
  if (type === 'boolean') {
    return (
      <div
        className='flex flex-wrap items-center'
        style={{
          flexBasis: '100%',
          width: '100%',
          padding: '10px'
        }}
      >
        <div className='field'>
          <div className='ui checkbox'>
            <input
              id={label}
              type='checkbox'
              tabIndex='0'
              checked={value}
              onChange={(e) => onChange(label, e.target.checked)}
            />
            <label htmlFor={label}>{label}</label>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
