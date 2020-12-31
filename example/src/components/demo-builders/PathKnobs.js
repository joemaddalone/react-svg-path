import React from 'react';
const pathAttributes = {
  stroke: {
    type: 'color',
    default: '#0e98dd'
  },
  fill: {
    type: 'color',
    default: '#ffffff'
  },
  strokeWidth: {
    type: 'number',
    default: 1,
    step: 0.5
  },
  strokeMiterlimit: {
    type: 'number',
    default: 4
  },
  strokeLinecap: {
    type: 'select',
    default: 'butt',
    options: [
      { label: 'butt', value: 'butt' },
      { label: 'round', value: 'round' },
      { label: 'square', value: 'square' }
    ]
  },
  strokeDashoffset: {
    type: 'number',
    default: 0
  },
  strokeDasharray: {
    type: 'string',
    default: 0,
    pattern: /^(\s*[0-9]+\s*)+/
  },
  strokeLinejoin: {
    default: 'miter',
    options: [
      { label: 'arcs', value: 'arcs' },
      { label: 'bevel', value: 'bevel' },
      { label: 'miter', value: 'miter' },
      { label: 'miter-clip', value: 'miter-clip' },
      { label: 'round', value: 'round' }
    ]
  },
  strokeOpacity: {
    type: 'number',
    min: 0,
    max: 1,
    default: 1,
    step: 0.1
  },
  fillOpacity: {
    type: 'number',
    min: 0,
    max: 1,
    default: 1,
    step: 0.1
  }
};

export const PathKnobs = ({ onChange, initData }) => {
  return (
    <form>
      {Object.keys(pathAttributes).map((k, index) => {
        // eslint-disable-next-line default-case
        switch (pathAttributes[k].type) {
          case 'number':
            return (
              <div key={index} className='ui labeled input'>
                <label htmlFor={k} className='ui label'>
                  {k}
                </label>
                <input
                  id={k}
                  type='number'
                  inputMode="numeric"
                  max={pathAttributes[k].max || null}
                  min={pathAttributes[k].min || null}
                  step={pathAttributes[k].step || null}
                  value={initData?.[k] ?? pathAttributes[k].default}
                  onChange={(e) => onChange(+e.target.value, k)}
                />
              </div>
            );
          case 'select':
            return (
              <div key={index} className='ui labeled input'>
                <label htmlFor={k} className='ui label'>
                  {k}
                </label>
                <select
                  className='ui fluid dropdown'
                  id={k}
                  value={initData?.[k] ?? pathAttributes[k].default}
                  onChange={(e) => onChange(e.target.value, k)}
                >
                  {pathAttributes[k].options.map((opt, index) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          case 'string':
            return (
              <div key={index} className='ui labeled input'>
                <label htmlFor={k} className='ui label'>
                  {k}
                </label>
                <input
                  id={k}
                  type='text'
                  pattern={pathAttributes[k].pattern}
                  value={initData?.[k] ?? pathAttributes[k].default}
                  onChange={(e) => onChange(e.target.value, k)}
                />
              </div>
            );
          case 'color':
            return (
              <div key={index} className='ui labeled input'>
                <label htmlFor={k} className='ui label'>
                  {k}
                </label>
                <input
                  id={k}
                  style={{
                    paddingLeft: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    width: '150px',
                    height: 35
                  }}
                  value={initData?.[k] ?? pathAttributes[k].default}
                  type='color'
                  onChange={(e) => onChange(e.target.value, k)}
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </form>
  );
};
