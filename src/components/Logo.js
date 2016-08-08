import React from 'react';

const mainLogoUrl = require('../assets/img/logo.png');
require('./Logo.scss');

const Logo = (props) => {
  const { size } = props;
  const height = 180;
  const width = 350;
  const scale = size === 'small' ? 0.6 : 1;

  return (
    <div className="logo-wrapper">
      <img
        className="logo"
        src={mainLogoUrl}
        alt="Vonji Main Logo"
      />
    </div>
  );
};

export default Logo;
