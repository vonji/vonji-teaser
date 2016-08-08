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
    this.onCaptchaError = ::this.onCaptchaError;
  }

  onCaptchaError() {
    this.props.alertError(`
      Nous savons que c'est pénible mais il faut remplir le captcha pour
      qu'on soit sûr que tu disposes de l'incroyable intelligence d'un
      être humain.
    `, 'error');
  }

  onSubmitData(data) {
    data.createdAt = Date.now();
    data.validated = false;
    const { alertError, alertSuccess } = this.props;
    const key = db.ref('/entries').push().key;
    db.ref('/entries/' + key).update(data)
    .then(() => {
      alertSuccess(`
        Merci ! Après analyse (approfondie) de ta candidature tu auras
        peut-être l'honneur d'apparaître dans la superbe liste déroulante de l'accueil !<br />
        On te tiens au jus !
      `);
    })
    .catch(() => {
      alertError(`
        Erf... quelque chose de <strong>pas très grave</strong> est arrivé.
        Nous avons dépêché notre équipe de choc sur le problème.
        Sois rassuré, tu pourras bientôt retenter ta chance!
      `);
    });
  }

  render() {
    return (
      <MainLayout>
        <div className="vj-inner-content">
          <h1>
            Et toi, tu sais faire quoi&#8239;?<br />
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
            onCaptchaError={this.onCaptchaError}
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
    alertSuccess: message => dispatch(newAlert(message, 'success')),
    alertRemove: id => dispatch({ type: 'CLEAR_ALERT', alertId: id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexView);
