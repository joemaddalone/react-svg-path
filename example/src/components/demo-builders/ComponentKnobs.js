import React from 'react';
import { PointArray } from './PointArray';

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
        pointLength={pointLength}
        onChange={onChange}
        label={label}
      />
    );
  }
  return null;
};
