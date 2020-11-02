import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import './markdown.css';
import HomePage from './components/pages/HomePage';
import ProjectsPage from './components/pages/ProjectsPage';
import AboutPage from './components/pages/AboutPage';
import TagCheckerPage from './components/pages/TagCheckerPage';

function App() {
    return (
      <Router>
        <div className="App">
            <Switch>
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route path="/" component={HomePage} />
              <Route exact path="/tag_checker" component={TagCheckerPage} />
            </Switch>
        </div>
      </Router>
    );
  }

export default App;
