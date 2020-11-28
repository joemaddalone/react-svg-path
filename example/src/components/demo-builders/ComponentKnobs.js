import React from 'react';

export const ComponentKnobs = ({ label, type, value, onChange }) => {
  if (type === 'number') {
    return (
      <div className='ui labeled input'>
        <label htmlFor='amount' className='ui label'>
          {label}
        </label>
        <input
          type='number'
          value={value}
          onChange={(e) => onChange(label, +e.target.value)}
        />
      </div>
    );
  }
  if (type === 'point-array') {
    return 'point array knob not yet implemented';
  }
  return null;
};
