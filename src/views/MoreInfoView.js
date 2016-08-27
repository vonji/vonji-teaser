import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import numeral from 'numeral';

require('gridlex/src/gridlex.scss');
require('./MoreInfoView.scss');

numeral.languageData().delimiters.thousands = ' ';

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
          <h1>Construisons la plus grande base de compétences du monde&nbsp;!</h1>
        </div>
        <div className="vj-inner-page vj-more-info">
          <div className="grid-3_md-1-equalHeight">
            <div className="col">
              <InfoBlock>
                <div className="vj-block-heading">
                  <h1>Vonji c'est...</h1>
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
                  <h1>Vonji c'est...</h1>
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
                  <h1>Vonji c'est...</h1>
                </div>
                <div className="vj-block-body">
                  Une équipe un peu secrète mais pas introuvable&#8230;
                </div>
                <div className="vj-block-footer">
                  <a href="/more/who">En savoir plus !</a>
                </div>
              </InfoBlock>
            </div>
            <div className="col">
              <InfoBlock>
                <div className="vj-block-heading">
                  <h1>Vonji c'est...</h1>
                </div>
                <div className="vj-block-body">
                  <p className="vj-huge vj-center">0€</p>
                  <p>Quedal, peanuts, walou, nada... La participation est libre.</p>
                </div>
                <div className="vj-block-footer">
                  <a href="/more/howmuch">En savoir plus</a>
                </div>
              </InfoBlock>
            </div>
            <div className="col">
              <InfoBlock>
                <div className="vj-block-heading">
                  <h1>Vonji c'est...</h1>
                </div>
                <div className="vj-block-body">
                  <p>Pour tout le monde, les petits, les grands, les gros, les jeunes, les vieux, les girafes... oui même les girafes.</p>
                </div>
                <div className="vj-block-footer">
                  <a href="/more/forwhom">En savoir plus</a>
                </div>
              </InfoBlock>
            </div>
            <div className="col">
              <InfoBlock>
                <div className="vj-block-heading">
                  <h1>Vonji c'est...</h1>
                </div>
                <div className="vj-block-body">
                  <p className="vj-center">Dans environ&#8239;:<br /><br /><span className="vj-timing">{this.state.timing ? `${numeral(this.state.timing).format('0,0')}s`: ''}</span></p>
                </div>
                <div className="vj-block-footer">
                  <a href="/more/when">En savoir plus</a>
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
