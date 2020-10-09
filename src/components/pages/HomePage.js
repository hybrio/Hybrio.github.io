import React from 'react';
import {Link} from "react-router-dom";
import MyCV from '../../Docs/Alexander-CV.pdf';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <nav>
            <ul>
              <li> <a href={MyCV} target="_blank" rel="noopener noreferrer" download="Alexander-CV.pdf"> Download CV </a> </li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        &nbsp; Homepage Under Construction
      </div>
    );
  }
}

export default Homepage;