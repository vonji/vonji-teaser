import React from 'react';

const mainLogoUrl = require('../assets/img/vonji-logo-white.png');

const LogoImg = (props) => {
  const { size } = props;
  const height = 180;
  const width = 350;
  const scale = size === 'small' ? 0.6 : 1;

  return (
    <div>
      <img
        id="main-logo"
        src={mainLogoUrl}
        alt="Vonji Main Logo"
        style={{
          height: (height * scale),
          width: (width * scale),
        }}
      />
    </div>
  );
};

export default LogoImg;
