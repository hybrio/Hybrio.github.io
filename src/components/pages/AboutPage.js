import React from 'react';
import {Link} from "react-router-dom";
import me from '../../Images/me-grey.jpg';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
          <nav id="pageNav">
            <ul id="pageNavList">
                <li><h1>About me.</h1></li>
                <li id="noPaddingOrMargin"><Link to="/"  id="noPaddingOrMargin"><h1 id="noPaddingOrMargin" className="grow">{'\u003C'}</h1></Link></li>
            </ul>
          </nav>
          <div id="about">
          <img src={me} alt="image of me"/>
            <p id="about-text">
              Hi I'm Alexander
              <br/><br/><br/>
              I am a software developer from Auckland, New Zealand who enjoys writing code and solving problems.
              <br/><br/>
              I will soon be (covid permitting) a 2020 Computer Systems Engineering (Hons) Graduate from the University of Auckland.
              <br/><br/>
              Unfortunately I don’t have anything too exciting to show you as of yet (I’m still retrieving my older uni projects) but watch this space.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutPage;