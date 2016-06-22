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
  render() {
    return (
      <div className="section" id="subscribe-page">
        <div className="column fullsize">
          <h1>Et toi tu sais faire quoi ?</h1>
          <h2>Fais nous rêver :)</h2>
          <SubscribeForm
            onSubmit={data => {
              $.ajax({
                url: '/api/iknow',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                error: (xhr) => {
                  console.error(xhr);
                },
                success: (resp) => {
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
