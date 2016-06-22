import React, { Component } from 'react';
import SubscribeForm from './SubscribeForm';
import $ from 'jquery';

require('./SubscribePage.scss');

/*
$r.setState({
  email: { error: '', value: 'loup.peluso@gmail.com' },
  name: { error: '', value: 'Loup Peluso' },
  mentionAccepted: { error: '', value: true },
  postcode: { error: '', value: '75015' },
  skill: { error: '', value: 'Coder' },
});
*/

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
    return (
      <div className="section" id="subscribe-page">
        <div className="column fullsize">
          <h1>Et toi tu sais faire quoi ?</h1>
          <h2>Fais nous rêver :)</h2>
          {this.state.postFailure &&
            <div className="big-message">
              Erf... quelque chose <strong>de pas très grave</strong> est arrivé.<br />
              Peut-être que vos infos ne sont pas bonnes, peut-être qu'on a merdé quelque part...
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
              $.ajax({
                url: '/api/iknow',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                error: (xhr) => {
                  this.setState({
                    isPosting: false,
                    postFailure: true,
                  });
                  console.error(xhr);
                },
                success: (resp) => {
                  this.setState({
                    isPosting: false,
                    hasPosted: true,
                  });
                  console.log(resp);
                },
              });
            }}
          />

        </div>
      </div>
    );
  }
}

export default SubscribePage;
