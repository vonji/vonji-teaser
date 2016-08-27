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
          <h1>Combien ça va coûter ?</h1>
        </div>
        <div className="vj-inner-page">
          <h3>
            Pour être une plateforme <strong>performante</strong>, et offrir un service de <strong>qualité</strong>, l'utilisation de Vonji nécessite une participation.
            Le montant de la participation est simple et <strong>accessible à tous</strong> :
          </h3>

          <div>
            <h1 style={{marginBottom: 0, textAlign: "center"}}>0 €/mois*</h1>
            <p style={{marginTop: 0, textAlign: "center"}} className="vj-small">
              *pendant 1 an puis 0€ ensuite.
            </p>
          </div>

          <h3>Participation libre et soutien associatif</h3>

          <p>
            Néanmois pour ceux qui le peuvent, s'ils souhaitent participer aux frais de fonctionnement de la plateforme, la participation est libre.
            Vonji s'engage à reverser 15% des de ses revenus à des associations partenaires.
          </p>

          <h3>Associations partenaires de Vonji :</h3>

          <ul>
            <li>Protection de l'environnement : www.fne.asso.fr</li>
            <li>Recherche médicale : fondationdelavenir.org</li>
            <li>Actions sociales et humanitaires : lafabriquenomade.com</li>
            <li>Aides aux pays en voie de développement : espoirsansfrontieres.org</li>
            <li>Engagement citoyen (éducation, droits de l'homme,...) : simplon.co</li>
            <li>Développement collaboratif des connaissances : wikipedia.fr</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect()(WhyView);
