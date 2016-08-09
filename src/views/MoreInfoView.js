import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

require('gridlex/dist/gridlex.min.css');
require('./MoreInfoView.scss');

const InfoBlock = (props) => {
  return (
    <div className={`vj-info-block ${props.className}`}>
      <h1 className="vj-block-heading">
        {props.title}
      </h1>
      <div className="vj-block-content">
        {props.children}
      </div>
      <Link className="vj-block-btn" to={props.buttonPath}>{props.buttonTitle}</Link>
    </div>
  );
}

class MoreInfoView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timing: this.getTiming(),
    };
  }

  componentDidMount() {
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.updateTimer();
      }, 500);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  getTiming() {
    const t2 = new Date(2017, 7, 1, 0, 0, 0, 0);
    const timing = Math.floor((t2.getTime() - Date.now()) / 1000);
    return timing;
  }

  updateTimer() {
    this.setState({ timing: this.getTiming() });
  }

  render() {
    return (
      <div id="vj-more-info" className="grid-3_md-1-equalHeight">
        <div className="col">
          <InfoBlock
            title="Pourquoi ?"
            buttonTitle="Moi aussi !"
            buttonPath="/prez/why">
            <p>Notre ambition est de <strong>sauver le monde</strong>&#8230;</p>
            <p>Mais si on a pas le temps on s'occupera d'abord du <em>skill-funding</em>.</p>
          </InfoBlock>
        </div>
        <div className="col">
          <InfoBlock
            title="Quoi ?"
            buttonTitle="Vas-y raconte !"
            buttonPath="/prez/what">
            <div>
              <p><i className="fa fa-check" /> Pensée positive.</p>
              <p><i className="fa fa-check" /> Système vertueux.</p>
              <p><i className="fa fa-check" /> Plateforme agréable.</p>
            </div>
          </InfoBlock>
        </div>
        <div className="col">
          <InfoBlock
            title="Qui ?"
            buttonTitle="D'accord"
            buttonPath="/prez/who">
            Ils sont un peu secrets mais pas introuvables&#8230;
          </InfoBlock>
        </div>
        <div className="col">
          <InfoBlock
            title="Combien ?"
            buttonTitle="Vraiment ?"
            buttonPath="/prez/howmuch">
            <p className="vj-huge vj-center">0€</p>
            <p>C'est-à-dire &#171;&#8239;pas un rond&#8239;&#187;, pour parler très scientifiquement.</p>
          </InfoBlock>
        </div>
        <div className="col">
          <InfoBlock
            title="Pour qui ?"
            buttonTitle="LOL"
            buttonPath="/prez/forwhom">
            <div>
              <p>Les <span className="vj-big-2">hispters</span> et les <span className="vj-big-1">baleines</span>.</p>
              <p>En gros n'importe qui tant qu'il <strong>paye</strong>&#8239;!</p>
              <p className="vj-small">&#8212; Mais t'as pas dit que c'était gratuit&#8239;?</p>
              <p>&#8230;</p>
            </div>
          </InfoBlock>
        </div>
        <div className="col">
          <InfoBlock
            title="Quand ?"
            buttonTitle="Réponse B"
            buttonPath="/prez/what">
            <p>Dans environ&#8239;:</p>
            <p className="vj-timing vj-center">{this.state.timing ? `${this.state.timing}s`: ''}</p>
            <p>Mais on aura probablement&#8239;:</p>
            <p className="vj-timing vj-center">2.628e+6s</p>
            <p>de retard.</p>
          </InfoBlock>
        </div>
      </div>
    )
  }
}

export default MoreInfoView;
