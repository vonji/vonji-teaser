import React from 'react';
import _ from 'lodash';
require('./SignInForm.scss');

import RollingInput from '../RollingInput/RollingInput.jsx';

const dummyList = [
  {name: "jfdksl", skill: "fjieojfdkslfd"},
  {name: "jkliuyre", skill: 'paofk fjksmiez rueioz'},
  {name: "jfdi", skill: 'paomiez rueioz'},
  {name: "iopezrej", skill: 'paofk fjkseioz'},
  {name: "xcjis", skill: 'iofk fjksmiez ruz'},
];

class SignInForm extends React.Component {

  constructor() {
    super();
    this.state = {
      name: 'Pierre',
      skill: 'sait faire du chameau sur neige.',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(_.sample(dummyList));
    }, 5000);
  }

  render() {
    return (
      <div className="sign-in">
        <div className="form">
          <RollingInput className="rl-lastname rl-align-right" placeholder={this.state.name} />
          <span>sait</span>
          <RollingInput className="rl-skill" placeholder={this.state.skill} />
        </div>
      </div>
    );
  }
}

export default SignInForm;
