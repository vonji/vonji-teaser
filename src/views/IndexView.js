import React, { Component } from 'react';

import MainLayout from '../layouts/MainLayout';
import SubscribeForm from '../components/SubscribeForm';

class IndexView extends Component {
  render() {
    return (
      <MainLayout>
        <h1 style={{ textAlign: 'center', marginTop: 0 }}>
          Et toi tu sais faire quoi ?<br />
          <small>Fais-nous rêver :)</small>
        </h1>

        <SubscribeForm />
      </MainLayout>
    );
  }
}

export default IndexView;
