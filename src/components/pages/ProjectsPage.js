import React from 'react';
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
        <h1>Projects</h1>
        <ul>
          {this.state.projects.map(project => {
            return <Repository key={`project-${project.id}`} name={project.name} target={project.html_url} >{project.name}</Repository>
          })}
        </ul>
      </div>
    )
  }
}

export default ProjectsPage;