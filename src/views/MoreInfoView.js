import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

require('gridlex/src/gridlex.scss');
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
      }, 100);
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
      <div id="vj-more-info">
        <div className="vj-more-info-inner">
          <div className="vj-header">
            <h1>Voici la page explicative&#8239;!</h1>
            <p>Cliquez sur les gros blocs bleus si vous voulez.</p>
          </div>
          <div className="grid-3_md-1-equalHeight">
            <div className="col">
              <InfoBlock
                title="Pourquoi ?"
                to="/prez/why">
                <p>Notre ambition est de <strong>sauver le monde</strong>&#8230;</p>
                <p>Mais si on a pas le temps on s'occupera d'abord du <em>skill-funding</em>.</p>
              </InfoBlock>
            </div>
            <div className="col">
              <InfoBlock
                title="Quoi ?"
                to="/prez/what">
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
                to="/prez/who">
                Ils sont un peu secrets mais pas introuvables&#8230;
              </InfoBlock>
            </div>
            <div className="col">
              <InfoBlock
                title="Combien ?"
                to="/prez/howmuch">
                <p className="vj-huge vj-center">0€</p>
                <p>C'est-à-dire &#171;&#8239;pas un rond&#8239;&#187;, pour être précis.</p>
              </InfoBlock>
            </div>
            <div className="col">
              <InfoBlock
                title="Pour qui ?"
                to="/prez/forwhom">
                <div>
                  <p>Vonji c'est fait par des <a href="https://en.wikipedia.org/wiki/Nerd">Nerds</a> mais c'est ouvert à tous&#8239;!</p>
                  <p>Donc n'ayez pas peur, venez en profiter&#8239;!</p>
                </div>
              </InfoBlock>
            </div>
            <div className="col">
              <InfoBlock
                title="Quand ?"
                to="/prez/what">
                <div className="vj-center">
                  <p> Dans environ&#8239;:</p>
                  <p className="vj-timing">{this.state.timing ? `${this.state.timing}s`: ''}</p>
                </div>
              </InfoBlock>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoreInfoView;
