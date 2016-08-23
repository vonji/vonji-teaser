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
          <h1>Aujourd'hui,</h1>
          <hr />
          <ul className="vj-list">
            <li>1% de la population mondiale détient 48% des richesses.<br /><span className="vj-small">Source: étude OXFAM 2014</span></li>
            <li>8 millions (soit 12%) de français sont seuls et 22 millions (soit 33%) sont en risque d'exclusion.<br /><span className="vj-small">Source: étude fondation de France 2013</span></li>
            <li>70% des français utilisent internet quotidiennement.<br /><span className="vj-small">Source: INSEE 2013</span></li>
            <li>42% des internautes sont actifs sur les réseaux sociaux.<br /><span className="vj-small">Source: Agence we are social 2014</span></li>
          </ul>
          <hr />
          <h2>Ces chiffres vous interpellent ? Nous aussi.</h2>
          <h3>Chez Vonji nous avons des convictions...</h3>
          <p>
            Chaque individu est dotés de skill (compétences pour les non-anglophones).
            Les valeurs d'entraide et de solidarité sont ancrés en chaque être humain.
            Le développement d'une base de compétence permettra de répondre aux enjeux
            sociétaux de demain : vivre ensemble, réduction des inégalités.
          </p>

          <h3>Et nous partageons des principes...</h3>
          <p>
            Toujours positiver, penser collectif, prendre des initiatives.
          </p>
        </div>
      </div>
    )
  }
}

export default connect()(WhyView);
