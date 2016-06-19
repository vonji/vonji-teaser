import React, { Component } from 'react';

class IKnow extends Component {
  componentWillReceiveProps(newProps) {
    console.log(newProps);
  }

  render() {
    const { name, activity } = this.props;
    return (
      <div className="row" style={{width: '100%'}} id="iknow">
        <h1
          className="name"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '50%',
          }}
        >
          {name}
        </h1>
        <h1
          className="sait"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '0.2em',
            marginRight: '0.2em',
          }}
        >
          sait
        </h1>
        <h1
          className="activity"
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            width: '50%',
          }}
        >
          {activity}
        </h1>
      </div>
    );
  }
};

export default IKnow;
