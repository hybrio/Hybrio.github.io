import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About me.</h1>
          <div id="about">
            <p id="about-text">
              Hi i'm Alexander
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