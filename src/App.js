import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomePage from './components/pages/HomePage';
import ProjectsPage from './components/pages/ProjectsPage';
import ProjectInfoPage from './components/pages/ProjectInfoPage';
import AboutPage from './components/pages/AboutPage';
import TagCheckerPage from './components/pages/TagCheckerPage';

function App() {
    return (
      <Router>
        <div className="App">
          <div className="Content">
            <Switch>
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/projects/:id" component={ProjectInfoPage} />
              <Route exact path="/tag_checker" component={TagCheckerPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

export default App;
