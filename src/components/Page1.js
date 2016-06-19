import React, { Component } from 'react';

import LogoImg from './LogoImg';
import IKnow from './IKnow';

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      my_name: '',
      my_activity: '',
    };
  }

  render() {
    const { myName, myActivity } = this.state;

    setTimeout(() => {
      this.setState({
        myName: 'loup',
        myActivity: 'fuck it!',
      });
    }, 2000);
    return (
      <div className="section">
        <div className="column fullsize space-around">
          <div className="column" style={{ width: '100%' }}>
            <LogoImg />
            <IKnow name={myName} activity={myActivity} />
            <a href="#">On sait tous faire quelque chose</a>
            <form>
              <input type="text" />
              <input type="text" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Page1;
