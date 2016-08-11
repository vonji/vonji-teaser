import React from 'react';

const logoOrange = require('../assets/img/logo-orange.png');
const logoWhite = require('../assets/img/logo-white.png');
//require('./Logo.scss');

const Logo = (props) => {
  const { color } = props;
  const logoUrl = color === 'orange' ? logoOrange : logoWhite;

  return (
    <div className="logo-wrapper">
      <img
        className="logo"
        src={logoUrl}
        alt="Vonji Main Logo"
      />
    </div>
  );
};

export default Logo;
