import React from 'react';
import CheckBox from './CheckBox';
import InputGroup from './InputGroup';
import _ from 'lodash';

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentionAccepted: { error: '', value: false },
      name: { error: '', value: '' },
      skill: { error: '', value: '' },
      postcode: { error: '', value: '' },
      email: { error: '', value: '' },
    };
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.validateEmail(this.state.email.value)) {
      this.setState({
        email: _.assign({}, this.state.email, { error: "Dis donc, c'est pas un vrai email ça ;)" }),
      });
    } else {
      this.setState({
        email: _.assign({}, this.state.email, { error: '' }),
      });
    }
    if (!this.state.mentionAccepted.value) {
      this.setState({
        mentionAccepted: _.assign({}, this.state.mentionAccepted, { error: 'Et les mentions légales ?' }),
      });
    } else {
      this.setState({
        mentionAccepted: _.assign({}, this.state.mentionAccepted, { error: '' }),
      });
    }
  }

  toggleMentions(newStatus) {
    this.setState({ mentionAccepted: _.assign({}, this.state.mentionAccepted, { value: newStatus }) });
  }

  changeName(newName) {
    this.setState({ name: _.assign({}, this.state.name, { value: newName }) });
  }

  changeEmail(newEmail) {
    this.setState({ email: _.assign({}, this.state.email, { value: newEmail }) });
  }

  changePostcode(newPostcode) {
    this.setState({ postcode: _.assign({}, this.state.postcode, { value: newPostcode }) });
  }

  changeSkill(newSkill) {
    this.setState({ skill: _.assign({}, this.state.skill, { value: newSkill }) });
  }

  render() {
    const {
      name,
      skill,
      postcode,
      email,
      mentionAccepted,
    } = this.state;

    return (
      <div className="form">
        <InputGroup
          label="Je m'appelle" text={name.value} placeholder="Jean" id="name"
          onChange={text => this.changeName(text)}
          error={name.error}
        />

        <InputGroup
          label="Je sais" text={skill.value} placeholder="faire des crêpes" id="skill"
          onChange={text => this.changeSkill(text)}
          error={skill.error}
        />

        <InputGroup
          label="Je vis dans le" text={postcode.value} placeholder="63100" id="postcode"
          onChange={text => this.changePostcode(text)}
          error={postcode.error}
        />

        <InputGroup
          label="Tenez-moi au courant sur" text={email.value} placeholder="jean@gmail.com" id="email"
          onChange={text => this.changeEmail(text)}
          error={email.error}
        />

        <div className="controls-group">
          <CheckBox id="accept" onClick={checked => this.toggleMentions(checked)} error={mentionAccepted.error}>
            J'accepte les mentions légales !
          </CheckBox>
          <div>
            <button onClick={(event) => this.handleSubmit(event)}>
              Et voilà !
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SubscribeForm;
