import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { newAlert, clearAlert } from '../actions';

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
    `, 'errorCaptcha');
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
      `, 'successForm');
    })
    .catch(() => {
      alertError(`
        Erf... quelque chose de <strong>pas très grave</strong> est arrivé.
        Nous avons dépêché notre équipe de choc sur le problème.
        Sois rassuré, tu pourras bientôt retenter ta chance!
      `, 'errorServer');
    });
  }

  render() {
    return (
      <div id="vj-index-content">
        <div className="vj-page-title">
          <h1>Et toi, tu sais faire quoi&#8239;?</h1>
          <p>Fais-nous rêver :)</p>
        </div>

        {this.props.alerts.map(alert => {
          return (
            <div key={alert.id}  className={`vj-alert ${alert.type ? 'vj-alert-'+alert.type : ''}`}>
              <div className="vj-alert-content" dangerouslySetInnerHTML={{ __html: alert.message }}>
              </div>
              <i className="fa fa-times" onClick={() => this.props.alertRemove(alert.id)}></i>
            </div>
          );
        })}

        <div className="vj-menu centered">
          <Link to="/more">je veux en savoir plus</Link>
        </div>

        <SubscribeForm
          className="big inline"
          onSubmit={this.onSubmitData}
          onCaptchaError={this.onCaptchaError}
        />
      </div>
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
    alertError: (message, id) => dispatch(newAlert(message, 'error', id)),
    alertSuccess: (message, id) => dispatch(newAlert(message, 'success', id)),
    alertRemove: id => dispatch(clearAlert(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexView);
