import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

require('gridlex/src/gridlex.scss');
require('./MoreInfoView.scss');

const InfoBlock = (props) => {
  return (
    <div className={`vj-info-block ${props.className}`}>
      {props.children}
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
        <div className="vj-page-title">
          <h1>Voici la page explicative&#8239;!</h1>
          <p>Aussi appelée le PQQCPQ*.</p>
        </div>
        <div className="vj-inner-page vj-more-info">
          <div className="grid-3_md-1-equalHeight">
            <div className="col">
              <InfoBlock>
                <div className="vj-block-heading">
                  <h1>Pourquoi ?</h1>
                </div>
                <div className="vj-block-body">
                  <p>Une ambition, celle de sauver le monde...</p>
                  <p>Mais si on a pas le temps on s'occupera d'abord du skillfunding.</p>
                </div>
                <div className="vj-block-footer">
                  <a href="/more/why">En savoir plus !</a>
                </div>
              </InfoBlock>
            </div>
            <div className="col">
              <InfoBlock>
                <div className="vj-block-heading">
                  <h1>Quoi ?</h1>
                </div>
                <div className="vj-block-body">
                  <p><i className="fa fa-check"/>&nbsp;Une plateforme ludique</p>
                  <p><i className="fa fa-check"/>&nbsp;Un écosystème vertueux et durable</p>
                  <p><i className="fa fa-check"/>&nbsp;Une état d'esprit positif</p>
                </div>
                <div className="vj-block-footer">
                  <a href="/more/what">En savoir plus !</a>
                </div>
              </InfoBlock>
            </div>
            <div className="col">
              <InfoBlock>
                <div className="vj-block-heading">
                  <h1>Qui ?</h1>
                </div>
                <div className="vj-block-body">
                  Ils sont un peu secrets mais pas introuvables&#8230;
                </div>
                <div className="vj-block-footer">
                  <a href="/more/who">En savoir plus !</a>
                </div>
              </InfoBlock>
            </div>
            <div className="col">
              <InfoBlock>
                <div className="vj-block-heading">
                  <h1>Combien ?</h1>
                </div>
                <div className="vj-block-body">
                  <p className="vj-huge vj-center">0€</p>
                  <p>C'est-à-dire &#171;&#8239;pas un rond&#8239;&#187;, pour être précis.</p>
                </div>
                <div className="vj-block-footer">
                  <a href="/more/howmuch">En savoir plus</a>
                </div>
              </InfoBlock>
            </div>
            <div className="col">
              <InfoBlock>
                <div className="vj-block-heading">
                  <h1>Pour qui ?</h1>
                </div>
                <div className="vj-block-body">
                  <p>Vonji c'est fait par des <a href="https://en.wikipedia.org/wiki/Nerd">Nerds</a> mais c'est ouvert à tous&#8239;!</p>
                  <p>Donc n'ayez pas peur, venez en profiter&#8239;!</p>
                </div>
                <div className="vj-block-footer">
                  <a href="/more/forwhom">En savoir plus</a>
                </div>
              </InfoBlock>
            </div>
            <div className="col">
              <InfoBlock>
                <div className="vj-block-heading">
                  <h1>Quand ?</h1>
                </div>
                <div className="vj-block-body">
                  <p className="vj-center">Dans environ&#8239;:<br /><br /><span className="vj-timing">{this.state.timing ? `${this.state.timing}s`: ''}</span></p>
                </div>
                <div className="vj-block-footer">
                  <a href="/more/when">En savoir plus</a>
                </div>
              </InfoBlock>
            </div>
          </div>
          <div className="vj-small vj-align-right">
            *Pourquoi ? Quoi ? Qui ? Combien ? Pour qui ? Quand ?
          </div>
        </div>
      </div>
    )
  }
}

export default MoreInfoView;
