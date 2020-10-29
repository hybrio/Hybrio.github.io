import React from 'react';
import {Link} from "react-router-dom";
import Repository from '../Repository';
var parse = require('html-react-parser');

class ProjectsPage extends React.Component {

  constructor() {
    super()
    this.state = { projects: [], width:0, height:0, previewData:"" }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    let myRequest = new Request("https://api.github.com/users/hybrio/starred");
    let projects = [];

    fetch(myRequest)
      .then(response => response.json())
      .then(data => {
        this.setState({ projects: data });
        this.state.projects.forEach((project, key) => {
          let readmeRequest = new Request(project.url + "/readme",{
            method: 'Get',
            headers: {
              'Accept': 'application/vnd.github.VERSION.html',
            }
          });
          fetch(readmeRequest).then(response => response.text()).then(data => {
            let updatedState = this.state.projects;
            updatedState[key].data = data;
            this.setState({
              projects: updatedState
          })});
          console.log(this.state.projects);
        });
      });

      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  updatePreview(data) {
    this.setState({ previewData: data });

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
              return <a href={project.html_url} target="_blank" rel="noopener noreferrer" onMouseEnter={() => this.updatePreview(project.data)} ><Repository key={`project-${project.id}`} name={project.name} target={project.html_url} data={project.data} >{project.name}</Repository></a>
            })}
            {(this.state.width >= 768) ? <div className="preview">{parse(this.state.previewData)}</div>: <></> }
          </ul>
        </div>
      </div>
    )
  }
}

export default ProjectsPage;