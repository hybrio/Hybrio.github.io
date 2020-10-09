import React from 'react';

class TagChecker extends React.Component {
  render() {
      let archived;
    if (this.props.archived) {
        archived = <div className="Archived"> Archived </div>;
      } else {
        archived = <></>;
      }
    return (
        <a href={this.props.target} target="_blank" rel="noopener noreferrer">
            <div className="Repository">
                &nbsp;{this.props.name}  {archived}
            </div>
        </a>
    );
  }
}

export default TagChecker;