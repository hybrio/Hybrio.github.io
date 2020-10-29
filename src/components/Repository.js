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
            <div className="Repository">
                &nbsp;{this.props.name}  {archived}
            </div>
    );
  }
}

export default TagChecker;