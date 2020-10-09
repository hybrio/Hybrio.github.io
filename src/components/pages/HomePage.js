import React from 'react';
import {Link} from "react-router-dom";
import MyCV from '../../Docs/Alexander-CV.pdf';
import Typer from '../Typer';

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
          <Typer
    heading={'My name is Alexander,'}
    dataText={["I make things.","I develop applications.","I design backend systems.", "I build tooling.", "I integrate cloud platforms."]} 
  /> 
          </p>
        </div>
      </>
    );
  }
}

export default Homepage;