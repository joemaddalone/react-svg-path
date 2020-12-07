import React from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import { basicShapes, curves } from './docs/docs';
import { Nav } from './components/Nav';
/** demo builders */
import { BasicShapeDemo } from './components/demo-builders/BasicShapeDemo';
import { CurveDemo } from './components/demo-builders/CurveDemo';
/** pages */
import { Nesting } from './components/pages/nesting';
import { MergeDemo } from './components/pages/merge/MergeDemo';
import { Introduction } from './components/pages/Introduction';
import { MarkerDemo } from './components/pages/markers/MarkerDemo';
import { TextPathDemo } from './components/pages/textpath/TextPathDemo';
import { CenterEndDemo } from './components/pages/CenterEndDemo';
import { SvgDemo } from './components/pages/svg/SvgDemo';
import { TextDemo } from './components/pages/text/TextDemo';
import { ToComponent } from './components/pages/ToComponent';
import { PathIntro } from './components/pages/PathIntro';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

const App = () => {
  const shapesDemos = Object.keys(basicShapes);
  const curveDemos = Object.keys(curves);

  return (
    <Router basename='/'>
      <header className='app-header'>
        <NavLink to='/' style={{ color: 'white' }}>
          react-svg-path
        </NavLink>
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
        <Nav />
        <div className='content-area' tabIndex={0}>
          <ScrollToTop>
            <Route exact path='/' component={Introduction} />
            <Route exact path={`/nesting`} render={() => <Nesting />} />
            <Route exact path={`/pathmerge`} render={() => <MergeDemo />} />
            <Route exact path={`/path`} render={() => <PathIntro />} />
            <Route exact path={`/tocomponent`} render={() => <ToComponent />} />
            <Route exact path={`/markers`} render={() => <MarkerDemo />} />
            <Route exact path={`/textpath`} render={() => <TextPathDemo />} />
            <Route exact path={`/centerend`} render={() => <CenterEndDemo />} />
            <Route exact path={`/svg`} render={() => <SvgDemo />} />
            <Route exact path={`/text`} render={() => <TextDemo />} />
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
        </div>
      </main>
    </Router>
  );
};

export default App;
