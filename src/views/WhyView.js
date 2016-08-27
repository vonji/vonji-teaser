import React, { Component } from 'react';
import { connect } from 'react-redux';

class WhyView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <div className="vj-page-title">
          <h1>Pourquoi lançons-nous ce projet ?</h1>
        </div>
        <div className="vj-inner-page">
          <ul className="vj-list">
            <li><strong>1%</strong> de la population mondiale détient <strong>48%</strong> des richesses.<br /><span className="vj-small">Source: étude OXFAM 2014</span></li>
            <li><strong>8 millions</strong> (soit 12%) de français sont seuls et <strong>22 millions</strong> (soit 33%) sont en risque d'exclusion.<br /><span className="vj-small">Source: étude fondation de France 2013</span></li>
            <li><strong>70%</strong> des français utilisent internet quotidiennement.<br /><span className="vj-small">Source: INSEE 2013</span></li>
            <li><strong>42%</strong> des internautes sont actifs sur les réseaux sociaux.<br /><span className="vj-small">Source: Agence we are social 2014</span></li>
          </ul>
          <hr />
          <h3>Ces chiffres vous interpellent ? Nous aussi.</h3>
          <h3>Chez Vonji nous avons des convictions...</h3>
          <ul>
            <li>Chaque individu est doté de compétences (skills pour les non-anglophones).</li>
            <li>Les valeurs d'entraide et de solidarité sont ancrés en chaque être humain.</li>
            <li>La mise en oeuvre d'une base de compétence permettra de répondre aux enjeux sociétaux de demain : la réduction des inégalités, le «&nbsp;vivre ensemble.&nbsp;»</li>
          </ul>

          <h3>Et nous partageons des principes...</h3>
          <ul>
            <li>Toujours positiver</li>
            <li>Penser collectif</li>
            <li>Prendre des initiatives</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect()(WhyView);
