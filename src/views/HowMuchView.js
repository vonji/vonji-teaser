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
          <h2>
            Pour être une plateforme performante et offrir un service de qualité,
            l'adhésion à vonji.fr nécessite une cotisation.
          </h2>

          <h2>Le prix de la côtisation est simple et accessible à tous :</h2>

          <div>
            <h1 style={{marginBottom: 0, textAlign: "center"}}>0 €/mois*</h1>
            <p style={{marginTop: 0, textAlign: "center"}} className="vj-small">
              *pendant 1 an puis 0€ ensuite.
            </p>
          </div>

          <h2>Participation libre et soutien associatif</h2>
          <p>
            Il est possible de participer aux frais de fonctionnement de la
            plateforme. Ceux qui le peuvent et qui le souhaitent peuvent nous reverser
            des cadeaux sous forme d'argent ou de gâteaux au chocolat.
          </p>
          <p>
            Sachez que vonji s'engage à reverser 15% de ce que vous lui donnerez
            à une association partenaire de votre choix.
          </p>

          <h2>Associations partenaires de Vonji :</h2>
          <p>Protection de l'environnement : terra-symbiosis.org</p>
          <p>Recherche médicale : fondationdelavenir.org</p>
          <p>Actions sociales et humanitaires : croix-rouge.fr</p>
          <p>Aides aux pays en voie de développement : espoirsansfrontiere.org</p>
          <p>Engagement citoyen : simplon.co</p>
          <p>Developpement collaboratif des connaissances : wikipedia.fr</p>

          <h2>Il n'y a pas de petit montant !</h2>
          <p>Si ça vous parait trop peu sachez que pour nous c'est toujours beaucoup.</p>
        </div>
      </div>
    )
  }
}

export default connect()(WhyView);
