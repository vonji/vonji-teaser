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

  setError(origin, key, error) {
    _.assign(origin, {
      [key]: _.assign({}, origin[key], { error }),
    });
  }

  anyErrors(source) {
    return _(source).some(v => v.error && v.error !== '');
  }

  removeError(origin, key) {
    _.assign(origin, {
      [key]: _.assign({}, origin[key], { error: '' }),
    });
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleSubmit(event) {
    event.preventDefault();

    const stateCopy = _.assign({}, this.state);

    const {
      name,
      skill,
      postcode,
      email,
      mentionAccepted,
    } = _.mapValues(this.state, value => value.value);

    if (!name || name === '') {
      this.setError(stateCopy, 'name', "Un p'tit nom peut-être ?");
    } else {
      this.removeError(stateCopy, 'name');
    }

    if (!skill || skill === '') {
      this.setError(stateCopy, 'skill', 'Nous on sait que tu sais faire quelque chose.');
    } else {
      this.removeError(stateCopy, 'skill');
    }

    if (!postcode || postcode === '') {
      this.setError(stateCopy, 'postcode', 'Tu vis bien quelque part quand même :)');
    } else {
      this.removeError(stateCopy, 'postcode');
    }

    if (!email || email === '') {
      this.setError(stateCopy, 'email', "Un email pour t'envoyer des infos (ou pas).");
    } else if (!this.validateEmail(email)) {
      this.setError(stateCopy, 'email', "Dis donc, c'est pas un vrai email ça ;)");
    } else {
      this.removeError(stateCopy, 'email');
    }

    if (!mentionAccepted) {
      this.setError(stateCopy, 'mentionAccepted', 'T-t-t... Et les mentions légales ?');
    } else {
      this.removeError(stateCopy, 'mentionAccepted');
    }

    if (!this.anyErrors(stateCopy)) {
      this.props.onSubmit({
        name,
        skill,
        postcode,
        email,
      });
      this.setState({
        name: { error: '', value: '' },
        skill: { error: '', value: '' },
        postcode: { error: '', value: '' },
        email: { error: '', value: '' },
        mentionAccepted: { error: '', value: false },
      });
    } else {
      this.setState(stateCopy);
    }
  }

  toggleMentions() {
    this.setState({ mentionAccepted: _.assign({}, this.state.mentionAccepted, { value: !this.state.mentionAccepted.value }) });
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
          <CheckBox
            id="accept"
            onClick={() => this.toggleMentions()}
            error={mentionAccepted.error}
            isChecked={mentionAccepted.value}
          >
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
