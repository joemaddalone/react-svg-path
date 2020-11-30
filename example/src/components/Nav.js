import React from 'react';
import { NavLink } from 'react-router-dom';
import { basicShapes, curves } from '../docs/docs';
import './Nav.css'

export const Nav = () => {
  return (
    <div className='nav-area ui vertical menu' style={{ paddingBottom: 50 }}>
      <div className='item'>
        <div className='menu'>
          <NavLink exact className='item' to='/'>
            Introduction
          </NavLink>
        </div>
      </div>
      <div className='item'>
        <div className='header'>Usage</div>
        <div className='menu'>
          <NavLink className='item' to='/path'>
            Path
          </NavLink>
          <NavLink className='item' to='/tocomponent'>
            .toComponent()
          </NavLink>
        </div>
      </div>
      <div className='item'>
        <div className='active  header'>Shapes</div>
        <div className='menu'>
          {Object.keys(basicShapes)
            .sort()
            .map((c, index) => (
              <NavLink
                key={c}
                className='item'
                to={`/${basicShapes[c].Component.toLowerCase()}`}
              >
                {basicShapes[c].Component}
              </NavLink>
            ))}
        </div>
      </div>
      <div className='item'>
        <div className='active  header'>Curves</div>
        <div className='menu'>
          {Object.keys(curves)
            .sort()
            .map((c, index) => (
              <NavLink
                key={c}
                className='item'
                to={`/${curves[c].Component.toLowerCase()}`}
              >
                {curves[c].Component}
              </NavLink>
            ))}
        </div>
      </div>
      <div className='item'>
        <div className='active  header'>Misc</div>
        <div className='menu'>
          <NavLink className='item' to={`/markers`}>
            Markers
          </NavLink>
          <NavLink className='item' to={`/textpath`}>
            TextPath
          </NavLink>
          <NavLink className='item' to={`/svg`}>
            Svg
          </NavLink>
        </div>
      </div>
      <div className='item'>
        <div className=' header'>Behaviors</div>
        <div className='menu'>
          <NavLink className='item' to='/nesting'>
            Nesting
          </NavLink>
          <NavLink className='item' to={`/centerend`}>
            centerEnd
          </NavLink>
          <NavLink className='item' to='/pathmerge'>
            PathMerge
          </NavLink>
        </div>
      </div>
    </div>
  );
};
