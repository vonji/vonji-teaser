import React, { Component } from 'react';
import $ from 'jquery';

class IKnow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'On',
      activity: 'tous faire quelque chose.',
    };
    this.requestRandomPair = this.requestRandomPair.bind(this);
  }

  componentDidMount() {
    const f = () => {
      console.log('called f');
      this.requestRandomPair()
      .then(() => setTimeout(f, 2000));
    };
    f();
  }

  requestRandomPair() {
    return new Promise((resolved, rejected) => {
      $.ajax({
        type: 'GET',
        url: '/api/iknow',
        success: (data) => {
          const { name, activity } = data;
          this.setState({ name, activity });
          resolved(data);
        },
        error: (xhr, type, exception) => {
          console.error(xhr, type, exception);
          rejected(xhr);
        },
      });
    });
  }

  render() {
    const { name, activity } = this.state;
    return (
      <div className="row" style={{ width: '100%' }} id="iknow">
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
}

export default IKnow;
