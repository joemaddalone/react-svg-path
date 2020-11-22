import React from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import {basicShapes, curves} from './docs/docs';
import Introduction from './components/Introduction';
import Nav from './components/Nav';
import { PathIntro } from './components/PathIntro';
import { BasicShapeDemo } from './components/BasicShapeDemo';
import { CurveDemo } from './components/CurveDemo';
import { Nesting } from './components/demos/nesting';
import { MergeDemo } from './components/demos/merge/MergeDemo';
import { MarkerDemo } from './components/demos/markers/MarkerDemo';
import { ToComponent } from './components/ToComponent';
import './App.css';

const App = () => {
  const shapesDemos = Object.keys(basicShapes);
  const curveDemos = Object.keys(curves);

  return (
    <Router basename='/'>
      <header className='app-header'>
        <NavLink to='/'>react-svg-path</NavLink>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/joemaddalone/react-svg-path'
        >
          github
        </a>
      </header>
      <main className='app-main'>
        <Nav />
        <div className='content-area'>
          <Route exact path='/' component={Introduction} />
          <Route exact path={`/nesting`} render={() => <Nesting />} />
          <Route exact path={`/pathmerge`} render={() => <MergeDemo />} />
          <Route exact path={`/path`} render={() => <PathIntro />} />
          <Route exact path={`/tocomponent`} render={() => <ToComponent />} />
          <Route exact path={`/markers`} render={() => <MarkerDemo />} />

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
        </div>
      </main>
    </Router>
  );
};

export default App;
