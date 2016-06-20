import React, { Component } from 'react';
import $ from 'jquery';

require('./IKnow.scss');

class IKnow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transition: 'none',
      values: { name: 'On', activity: 'tous faire quelque chose!' },
    };
    this.requestRandomPair = this.requestRandomPair.bind(this);
  }

  componentDidMount() {
    const delay = 500;
    const f = () => {
      this.requestRandomPair()
      .then(data => {
        this.setState({ transition: 'out' });
        setTimeout(() => this.setState({ transition: 'in', values: data }), delay);
        setTimeout(() => this.setState({ transition: 'none', values: data }), delay * 2);
        setTimeout(f, delay * 8);
      });
    };
    f();
  }

  requestRandomPair() {
    return new Promise((success, rejected) => {
      $.ajax({
        type: 'GET',
        url: '/api/iknow/random',
        success,
        error: (xhr, type, exception) => {
          console.error(xhr, type, exception);
          rejected(xhr);
        },
      });
    });
  }

  render() {
    const { transition, values } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <div className="row" style={{ width: '100%' }} id="iknow">
          <h1 className={`name ${transition}`}>{values.name}</h1>
          <h1 className={`knows ${transition}`}>sait</h1>
          <h1 className={`activity ${transition}`}>{values.activity}!</h1>
        </div>
        <div className="row">
          <a href="#" onClick={this.displayForm}>On sait tous faire quelque chose</a>
        </div>
      </div>
    );
  }
}

export default IKnow;
