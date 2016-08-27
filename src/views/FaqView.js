import React, { Component } from 'react';
import { connect } from 'react-redux';

class FaqView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <div className="vj-page-title">
          <h1>La Foire Aux vQuestions</h1>
        </div>
        <div className="vj-inner-page">
          <h2>Quels sont les modes de revenus de la plateformes?</h2>
          <p>
            Le fondateurs souhaitent offrir aux utilisateurs de Vonji, une
            plateforme sécurisée, performante, et de qualité. Tout cela a un coût
            non négligeable : hébergemement de serveurs:  salaires des développeurs
            web, des community managers,...).
            Le choix des fondateurs a été de ne pas prendre de comissions sur
            l'échange de services.. Les seuls revenus de la plateforme sont les
            fonds propres des fondateurs, la publicité de marques éthiques et
            responsables et la participation libre des membres.
          </p>

          <h2>Quelle est l'utilité de la monnaie d'échange, le vCoin?</h2>
          <p>
            Le vCoin est une monnaie exclusive à la plateforme Vonji. Elle sert de
            monnaie d'échange pour les services rendus entre les membres. La mise en
            place d'une monnaie est indispensable pour valoriser les compétences et
            les services : l'installation d'une cuisine équipée n'a pas la même
            valeur que d'aller chercher un colis au bureau de poste. Le montant de
            vCoin demandé pour un service est libre. L''avantage est que chaque mois
            un montant de vCoin est attribué automatiquement à chaque membre de la
            plateforme, pour qu'il puisse bénéficier des compétences des membres de
            plateforme.
          </p>

          <h2>Comment est calculé le montant de vCoin attribué chaque mois à chaque membre?</h2>
          <p>
            Le montant de vCoin attribué chaque mois à chaque membre, est calculé
            via un modèle mathématiques conçu en 2010 par l'ingénieur Stéphane
            Labordes, inventeur de laThéorie Relative de la Monnaie (TRM). La TRM
            est fondée sur le principe qu'une monnaie libre doit être
            systématiquement répartie également entre tous les individus. Plus
            d'infos sur allocation-universelle.net ou creationmonetaire.info
          </p>

          <h2>Quels sont les domaines de compétences disponibles sur Vonji?</h2>
          <p>
            Telle qu'est conçue la plateforme Vonji, aucun domaine de compétences
            est privilégié, l' objectif de Vonji est de valoriser et promouvoir
            toutes les compétences, quelqu'elles soient. Par défaut , les fondateurs
            ont initialisés quelque domaines de compétences communs : Bricolage,
            Jardinage, Décoration, Travaux d'intérieurs,..., mais le but de Vonji
            est de donner à ses membres la capacité de promouvoir eux mêmes les
            domaines de compétences qu'ils souhaitent valoriser.
          </p>

          <h2>Comment ont été sélectionnées les associations partenaires?</h2>
          <p>
            Vonji et ses associations partenaires partagent les mêmes valeurs et le
            même état d'esprit : la solidarité, le partage des connaissances et des
            sarvoirs-faire, le développement de l'intelligence collective,
            l'optimisation des ressources, le développement durable.
          </p>
        </div>
      </div>
    )
  }
}

export default connect()(FaqView);
