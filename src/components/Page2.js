import React from 'react';

import LogoImg from './LogoImg';

const Page2 = () => (
  <div className="section">
    <div className="column fullsize v-center">
      <LogoImg size="small" />
      <h1 style={{ marginTop: '5px' }}>On sait tous faire quelque chose</h1>
      <button
        className="pure-button vj-btn"
      >
        Je suis curieux !
      </button>
    </div>
  </div>
);

export default Page2;
