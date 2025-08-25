import React from 'react'
import OriginalPath from '@joemaddalone/path'

class Path extends OriginalPath {
	toComponent(props = {}) {
    return React.createElement('path', { d: this.toString(), ...props });
  }
}

export default Path;