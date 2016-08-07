import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainLayout from '../layouts/MainLayout';
import SubscribeForm from '../components/SubscribeForm';

import { db } from '../../firebase';

require('./IndexView.scss');

/*
Erf... quelque chose <strong>de pas très grave</strong> est arrivé.<br />
Soit vos infos sont pas bonnes, soit on a loupé un truc...
Bref, en tout cas <strong>ça n'a pas fonctionné</strong>, peut-être plus tard ?
*/

/*
Merci ! Après analyse (approfondie) de votre candidature vous aurez peut-être l'honneur{' '}
d'apparaître dans la superbe liste déroulante de l'accueil !
Nous vous tiendrons au courant de la suite des évènements :)
*/

class IndexView extends Component {

  constructor(props) {
    super(props);
    this.onSubmitData = ::this.onSubmitData;
  }

  onSubmitData(data) {
    data.createdAt = Date.now();
    data.validated = false;
    const key = db.ref('/entries').push().key;
    db.ref('/entries/' + key).update(data);
  }

  render() {
    return (
      <MainLayout>
        <div className="vj-inner-content">
          <h1>
            Et toi tu sais faire quoi&#8239;?<br />
            <small>Fais-nous rêver :)</small>
          </h1>

          {this.props.alerts.map(alert => {
            return (
              <div className={`vj-alert vj-alert-${alert.type}`}>
                alert.message
              </div>
            );
          })}

          <SubscribeForm
            onSubmit={this.onSubmitData}
          />
        </div>
      </MainLayout>
    );
  }
}

/*
{"name":{"error":"","value":"fdsqf"},"skill":{"error":"","value":"fdsqf"},"postcode":{"error":"","value":"fdsfds"},"email":{"error":"","value":"dfsfd@fdjks.com"},"wantsNewsLetter":{"error":"","value":true},"mentionAccepted":{"error":"","value":true}}
*/

function mapStateToProps(state) {
  return {
    alerts: state.alerts,
  };
}

export default connect(mapStateToProps)(IndexView);
