import React, { Component } from 'react';
import SubscribeForm from './SubscribeForm';
import $ from 'jquery';

import { db } from '../../firebase.js';

require('./SubscribePage.scss');

class SubscribePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPosting: false,
      hasPosted: false,
      postFailure: false,
    };
  }

  render() {
    const error = (xhr) => {
      this.setState({
        isPosting: false,
        postFailure: true,
      });
      console.error(xhr);
    };
    const success = (resp) => {
      this.setState({
        isPosting: false,
        hasPosted: true,
      });
      console.log(resp);
    };

    return (
      <div className="section" id="subscribe-page">
        <div className="column fullsize">
          <h1>Et toi tu sais faire quoi ?</h1>
          <h2>Fais nous rêver :)</h2>
          {this.state.postFailure &&
            <div className="big-message">
              Erf... quelque chose <strong>de pas très grave</strong> est arrivé.<br />
              Soit vos infos sont pas bonnes, soit on a loupé un truc...
              Bref, en tout cas <strong>ça n'a pas fonctionné</strong>, peut-être plus tard ?
            </div>
          }
          {this.state.hasPosted &&
            <div className="big-message">
              Merci ! Après analyse (approfondie) de votre candidature vous aurez peut-être l'honneur{' '}
              d'apparaître dans la superbe liste déroulante de l'accueil !
              Nous vous tiendrons au courant de la suite des évènements :)
            </div>
          }
          {this.state.isPosting &&
            <div className="big-message">
              On envoie tout ça !
            </div>
          }
          <SubscribeForm
            onSubmit={data => {
              this.setState({
                isPosting: true,
                hasPosted: false,
                postFailure: false,
              });
              const key = database.ref('/entries').push().key;
              console.log(key);
            }}
          />

        </div>
      </div>
    );
  }
}

export default SubscribePage;
