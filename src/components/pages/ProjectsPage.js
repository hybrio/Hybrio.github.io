import React from 'react';
import {Link} from "react-router-dom";
import Repository from '../Repository';

class ProjectsPage extends React.Component {

  constructor() {
    super()
    this.state = { projects: [] }
  }

  componentDidMount() {
    var myRequest = new Request("https://api.github.com/users/hybrio/starred");
    let projects = [];

    fetch(myRequest)
      .then(response => response.json())
      .then(data => {
        this.setState({ projects: data })
      })
  }

  render() {
    return (
      <div>
          <nav id="pageNav">
            <ul id="pageNavList">
                <li><h1>Projects.</h1></li>
                <li id="noPaddingOrMargin"><Link to="/"  id="noPaddingOrMargin"><h1 id="noPaddingOrMargin" className="grow">{'\u003C'}</h1></Link></li>
            </ul>
          </nav>
        <div id="projects">
          <ul>
            {this.state.projects.map(project => {
              return <Repository key={`project-${project.id}`} name={project.name} target={project.html_url} >{project.name}</Repository>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default ProjectsPage;