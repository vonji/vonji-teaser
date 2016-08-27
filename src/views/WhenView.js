import React, { Component } from 'react';
import { connect } from 'react-redux';

class WhenView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <div className="vj-page-title">
          <h1>Et c'est pour quand tout ça ?</h1>
        </div>
        <div className="vj-inner-page">
          <h2>Quand est ce que Vonji sera disponible?</h2>

          <p>La sortie de la plateforme est prévue pour <strong>Septembre 2017</strong>.</p>
          <p>Vous croyez en notre projet, vous souhaitez participer à son développement </p>
          <p>Vous pouvez, soit :</p>

          <ul>
            <li>Faire un don (Lien vers une plateforme de crowdfunding Kisskissbank ou Ulule)</li>
            <li>Ou nous contactez à helpme@vonji.fr pour participer au Beta Testing Program</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect()(WhenView);
