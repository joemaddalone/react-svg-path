import React, { useState } from 'react';
import {
  HashRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import { basicShapes, curves } from './docs/docs';
import { Nav } from './components/Nav';
/** demo builders */
import { BasicShapeDemo } from './components/demo-builders/BasicShapeDemo';
import { CurveDemo } from './components/demo-builders/CurveDemo';
/** pages */
import { Nesting } from './components/pages/nesting';
import { Demos } from './components/pages/demos';
import { MergeDemo } from './components/pages/merge/MergeDemo';
import { Introduction } from './components/pages/Introduction';
import { MarkerDemo } from './components/pages/markers/MarkerDemo';
import { TextPathDemo } from './components/pages/textpath/TextPathDemo';
import { CenterEndDemo } from './components/pages/CenterEndDemo';
import { SvgDemo } from './components/pages/svg/SvgDemo';
import { DistanceDemo } from './components/pages/distance/DistanceDemo';
import { ToComponent } from './components/pages/ToComponent';
import { PathIntro } from './components/pages/PathIntro';
import ScrollToTop from './components/ScrollToTop';
import { Line, Svg } from 'react-svg-path';

import './App.css';

const App = () => {
  const [overlayNav, setOverlayNav] = useState(false);
  const shapesDemos = Object.keys(basicShapes);
  const curveDemos = Object.keys(curves);

  return (
    <Router basename='/'>
      <header className='app-header'>
        <div className='flex items-center justify-center pointer'>
          <Svg
            className='nav-actuator'
            width={25}
            height={25}
            style={{
              backgroundColor: 'transparent',
              outline: 0,
              marginRight: 10,
              marginLeft: -10,
              cursor: 'pointer',
              borderRadius: '3px',
              border: '1px solid #999'
            }}
            onClick={() => {
              console.log('onCLick!');
              setOverlayNav((state) => !state);
            }}
          >
            <Line
              oy={-7}
              ox={-10}
              ex={20}
              ey={0}
              stroke='#ddd'
              strokeWidth={4}
              relative
            />
            <Line
              ox={-10}
              ex={20}
              ey={0}
              stroke='#ddd'
              strokeWidth={4}
              relative
            />
            <Line
              oy={7}
              ox={-10}
              ex={20}
              ey={0}
              stroke='#ddd'
              strokeWidth={4}
              relative
            />
          </Svg>
          <NavLink to='/' style={{ color: 'white' }}>
            react-svg-path
          </NavLink>
        </div>
        <a
          style={{ color: 'white' }}
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/joemaddalone/react-svg-path'
        >
          github
        </a>
      </header>
      <main className='app-main'>
        <Nav overlay={overlayNav} />
        <div className='content-area' tabIndex={0}>
          <ScrollToTop cb={() => setOverlayNav(false)}>
            <Route exact path='/' component={Introduction} />
            <Route exact path={`/demos`} render={() => <Demos />} />
            <Route exact path={`/nesting`} render={() => <Nesting />} />
            <Route exact path={`/pathmerge`} render={() => <MergeDemo />} />
            <Route exact path={`/path`} render={() => <PathIntro />} />
            <Route exact path={`/tocomponent`} render={() => <ToComponent />} />
            <Route exact path={`/markers`} render={() => <MarkerDemo />} />
            <Route exact path={`/textpath`} render={() => <TextPathDemo />} />
            <Route exact path={`/centerend`} render={() => <CenterEndDemo />} />
            <Route exact path={`/distance`} render={() => <DistanceDemo />} />
            <Route exact path={`/svg`} render={() => <SvgDemo />} />
            <div className='basic-shapes'>
              {shapesDemos.map((s, i) => (
                <Route
                  key={s}
                  exact
                  path={`/${s}`}
                  render={() => <BasicShapeDemo shape={s} />}
                />
              ))}
              {curveDemos.map((c, i) => (
                <Route
                  key={c}
                  exact
                  path={`/${c}`}
                  render={() => <CurveDemo curve={c} />}
                />
              ))}
            </div>
          </ScrollToTop>
          <blockquote style={{paddingTop: 120}} />
        </div>
      </main>
    </Router>
  );
};

export default App;
