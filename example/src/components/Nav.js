import React from 'react';
import { NavLink } from 'react-router-dom';
import docs from '../docs/docs';

const Nav = () => {
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
          {Object.keys(docs.basicShapes)
            .sort()
            .map((c, index) => (
              <NavLink
                key={c}
                className='item'
                to={`/${docs.basicShapes[c].Component.toLowerCase()}`}
              >
                {docs.basicShapes[c].Component}
              </NavLink>
            ))}
        </div>
      </div>
      <div className='item'>
        <div className='active  header'>Curves</div>
        <div className='menu'>
          {Object.keys(docs.curves)
            .sort()
            .map((c, index) => (
              <NavLink
                key={c}
                className='item'
                to={`/${docs.curves[c].Component.toLowerCase()}`}
              >
                {docs.curves[c].Component}
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
        </div>
      </div>
      <div className='item'>
        <div className=' header'>Behaviors</div>
        <div className='menu'>
          <NavLink className='item' to='/nesting'>
            Nesting
          </NavLink>
          <NavLink className='item' to='/pathmerge'>
            PathMerge
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
