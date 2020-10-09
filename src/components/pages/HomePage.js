import React from 'react';
import {Link} from "react-router-dom";
import MyCV from '../../Docs/Alexander-CV.pdf';

class Homepage extends React.Component {
  render() {
    return (
      <>
        <nav>
            <ul>
              <li> <a href={MyCV} target="_blank" rel="noopener noreferrer" download="Alexander-CV.pdf">Curriculum vitae. </a> </li>
                <li><Link to="/projects">Projects.</Link></li>
                <li><Link to="/about">About.</Link></li>
            </ul>
          </nav>
        <div id="content">
          <p>
            <div class="typewriter">
              <h1>My name is Alexander, I build things.</h1>
            </div>
          </p>
        </div>
      </>
    );
  }
}

export default Homepage;