import React from 'react';
require('./Page.scss');

class Page extends React.Component {
  render() {
    return (
      <div className="page" id={this.props.id}>
        <div className="bg"></div>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
