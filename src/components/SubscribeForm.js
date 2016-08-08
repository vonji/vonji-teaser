import React from 'react';
import CheckBox from './CheckBox';
  import InputText from './InputText';
import _ from 'lodash';
import $ from 'jquery';

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = SubscribeForm.defaultState();
  }

  static defaultState = () => ({
    name: { error: '', value: '' },
    skill: { error: '', value: '' },
    postcode: { error: '', value: '' },
    email: { error: '', value: '' },
    wantsNewsLetter: { error: '', value: false },
    mentionAccepted: { error: '', value: false },
  });

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

  validatePostcode(postcode) {
    const re = /^\d{2} ?(?:\d{3})?$/;
    return re.test(postcode);
  }

  handleSubmit(event) {
    event.preventDefault();



    const stateCopy = _.assign({}, this.state);

    const {
      name, skill, postcode, email,
      mentionAccepted, wantsNewsLetter,
    } = _.mapValues(this.state, value => value.value);

    // Treat captcha response.
    const captchaToken = grecaptcha.getResponse();
    if (!captchaToken) {
      this.props.onCaptchaError();
    }

    if (!name || name === '') {
      this.setError(stateCopy, 'name', "Un p'tit nom peut-être ?");
    } else {
      this.removeError(stateCopy, 'name');
    }

    if (!skill || skill === '') {
      this.setError(stateCopy, 'skill', 'Allez, ne soit pas timide, nous on est persuadés que tu sais faire quelque chose.');
    } else {
      this.removeError(stateCopy, 'skill');
    }

    if (!postcode || postcode === '') {
      this.setError(stateCopy, 'postcode', 'Tu vis bien quelque part quand même :)');
    } else if (!this.validatePostcode(postcode)) {
      this.setError(stateCopy, 'postcode', 'Je connais pas cet endroit moi...');
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
        name, skill, postcode, email,
        wantsNewsLetter, captchaToken,
      });
      this.setState(SubscribeForm.defaultState());
    } else {
      this.setState(stateCopy);
    }
  }

  toggleMentions() {
    this.setState({ mentionAccepted: _.assign({}, this.state.mentionAccepted, { value: !this.state.mentionAccepted.value }) });
  }

  toggleWantsNewsletter() {
    this.setState({ wantsNewsLetter: _.assign({}, this.state.wantsNewsLetter, { value: !this.state.wantsNewsLetter.value }) });
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
      name, skill, postcode, email,
      mentionAccepted, wantsNewsLetter,
    } = this.state;

    return (


      <form className={["form", this.props.className].join(' ')}>
        <InputText
          className="centered"
          label="Je m'appelle&nbsp;" text={name.value} placeholder="Jean" id="name"
          onChange={text => this.changeName(text)}
          error={name.error}
        />

        <InputText
          className="centered"
          label="Je sais&nbsp;" text={skill.value} placeholder="faire des crêpes" id="skill"
          onChange={text => this.changeSkill(text)}
          error={skill.error}
        />

        <InputText
          className="centered"
          label="Je vis dans le&nbsp;" text={postcode.value} placeholder="63100" id="postcode"
          onChange={text => this.changePostcode(text)}
          error={postcode.error}
        />

        <InputText
          className="centered"
          label="Écrivez-moi sur&nbsp;" text={email.value} placeholder="jean@gmail.com" id="email"
          onChange={text => this.changeEmail(text)}
          error={email.error}
        />

        <CheckBox
          className="small centered"
          id="accept"
          onClick={() => this.toggleMentions()}
          error={mentionAccepted.error}
          isChecked={mentionAccepted.value}
        >
          J'accepte les <a href="https://gist.github.com/Ephasme/990b56c806ace432db64c218bea15d07">mentions légales</a>&#8239;!
        </CheckBox>

        <CheckBox
          className="small centered"
          id="accept"
          onClick={() => this.toggleWantsNewsletter()}
          isChecked={wantsNewsLetter.value}
        >
          Je veux m'inscrire à la news letter&#8239;!
        </CheckBox>

        <div className="control-group centered">
          <div className="g-recaptcha" data-sitekey="6LdORSMTAAAAAFVbERHbxDoIdq59EFVMTO92KHlx"></div>
        </div>
        <div className="control-group centered">
          <button onClick={(event) => this.handleSubmit(event)}>
            Gros bouton pour envoyer&#8239;!
          </button>
        </div>
      </form>
    );
  }
}

export default SubscribeForm;
