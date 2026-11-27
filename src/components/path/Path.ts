import React from 'react';
import OriginalPath from '@joemaddalone/path';

class Path extends OriginalPath {
  override clone = (): Path => {
    const copy = new Path();
    copy.concat(this);
    return copy;
  };

  toComponent(props: React.SVGProps<SVGPathElement> = {}) {
    return React.createElement('path', { d: this.toString(), ...props });
  }
}

export default Path;
