import React from 'react';

class TagChecker extends React.Component {
  render() {
    return (
      <div className="MenuText">
        &nbsp;{this.props.name}
      </div>
    );
  }
}

export default TagChecker;