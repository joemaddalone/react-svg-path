import React from 'react';
import Original from '@joemaddalone/path';

class Path extends Original {
  toComponent(props = {}) {
    return <path d={this.toString()} {...this.attributes} {...props} />;
  }

  strokeWidth(val) {
    return this.attr('strokeWidth', val);
  }
}

export default Path;
