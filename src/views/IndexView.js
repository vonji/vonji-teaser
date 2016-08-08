import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newAlert } from '../actions';

import MainLayout from '../layouts/MainLayout';
import SubscribeForm from '../components/SubscribeForm';

import { db } from '../../firebase';

require('./IndexView.scss');

class IndexView extends Component {

  constructor(props) {
    super(props);
    this.onSubmitData = ::this.onSubmitData;
  }

  onSubmitData(data) {
    data.createdAt = Date.now();
    data.validated = false;
    const { alertError, alertSuccess } = this.props;
    const key = db.ref('/entries').push().key;
    db.ref('/entries/' + key).update(data)
    .then(() => {
      alertSuccess(`
        Merci ! Après analyse (approfondie) de votre candidature vous aurez
        peut-être l'honneur d'apparaître dans la superbe liste déroulante de l'accueil !<br />
        Nous vous tiendrons au courant de la suite des évènements :)
      `);
    })
    .catch(() => {
      alertError(`
        Erf... quelque chose de <strong>pas très grave</strong> est arrivé.
        Nous avons dépêché notre équipe de choc sur le problème.
        Soyez rassuré, vous pourrez bientôt retenter votre chance!
      `);
    });
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
              <div key={alert.alertId}  className={`vj-alert ${alert.type ? 'vj-alert-'+alert.type : ''}`}>
                <div className="vj-alert-content" dangerouslySetInnerHTML={{ __html: alert.message }}>
                </div>
                <i className="fa fa-times" onClick={() => this.props.alertRemove(alert.alertId)}></i>
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

function mapStateToProps(state) {
  return {
    alerts: state.alerts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    alertError: message => dispatch(newAlert(message, 'error')),
    alertSuccess: message => dispatch({ type: 'NEW_ALERT', alert: { message } }),
    alertRemove: id => dispatch({ type: 'CLEAR_ALERT', alertId: id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexView);
