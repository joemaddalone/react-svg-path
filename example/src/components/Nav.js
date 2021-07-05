import React from 'react';
import { NavLink } from 'react-router-dom';
import { basicShapes, curves } from '../docs/docs';
import { translate as t } from '../i18n/i18n';
import './Nav.css';

export const Nav = ({ overlay }) => {
  return (
    <div
      className={`nav-area ui vertical menu ${overlay ? 'overlay' : ''}`}
      style={{ paddingBottom: overlay ? 0 : 50 }}
    >
      <div className='item'>
        <div className='menu'>
          <NavLink exact className='item' to='/'>
            {t('nav.introduction')}
          </NavLink>
          <NavLink exact className='item' to='/demos'>
            Demos
          </NavLink>
        </div>
      </div>
      <div className='item'>
        <div className='header'>{t('nav.usage')}</div>
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
        <div className='active  header'>{t('nav.shapes')}</div>
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
        <div className='active  header'>{t('nav.curves')}</div>
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
        <div className=' header'>{t('nav.behaviors')}</div>
        <div className='menu'>
          <NavLink className='item' to='/nesting'>
            {t('nav.nesting')}
          </NavLink>
          <NavLink className='item' to={`/centerend`}>
            centerEnd
          </NavLink>
        </div>
      </div>
      <div className='item'>
        <div className='active  header'>{t('nav.additionalComponents')}</div>
        <div className='menu'>
          <NavLink className='item' to={`/distance`}>
            Distance
          </NavLink>
          <NavLink className='item' to={`/markers`}>
            Markers
          </NavLink>
          <NavLink className='item' to='/pathmerge'>
            PathMerge
          </NavLink>
          <NavLink className='item' to={`/svg`}>
            Svg
          </NavLink>
          <NavLink className='item' to={`/textpath`}>
            TextPath
          </NavLink>
        </div>
      </div>
      <blockquote style={{paddingTop: 80}} />
    </div>
  );
};
