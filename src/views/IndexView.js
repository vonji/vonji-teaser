import React, { Component } from 'react';

import MainLayout from '../layouts/MainLayout';
import SubscribeForm from '../components/SubscribeForm';

import { db } from '../../firebase';

require('./IndexView.scss');

class IndexView extends Component {

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
            Et toi tu sais faire quoi ?<br />
            <small>Fais-nous rêver :)</small>
          </h1>
          <SubscribeForm onSubmit={data => {
            this.onSubmitData(data);
          }} />
        </div>
      </MainLayout>
    );
  }
}

/*
{"name":{"error":"","value":"fdsqf"},"skill":{"error":"","value":"fdsqf"},"postcode":{"error":"","value":"fdsfds"},"email":{"error":"","value":"dfsfd@fdjks.com"},"wantsNewsLetter":{"error":"","value":true},"mentionAccepted":{"error":"","value":true}}
*/

export default IndexView;
