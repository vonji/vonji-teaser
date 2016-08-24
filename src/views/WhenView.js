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
          <h1>Vonji sera disponible en <strong>septembre 2017</strong></h1>
          <hr />
          <p>Si vous croyez en ce projet, nous vous invitons à faire un don :</p>
          <button>Donner pour Vonji</button>
          <h2>Sinon... </h2>
          <div style={{margin: "auto", textAlign: "center"}}>
            <img style={{width: '40%'}} src="https://i.imgflip.com/19gc89.jpg" title="made at imgflip.com"/>
          </div>
          <p>Contactez-nous sur contact@vonji.fr :)</p>
        </div>
      </div>
    )
  }
}

export default connect()(WhenView);
