import React from 'react';

const Header = ({ pseudo }) => {
  const formatHeader = (pseudo) => {
    return /[aeioyu]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
  }

  return (
    <header>
      <h1>La boite à recette {formatHeader(pseudo)}</h1>
    </header>
  );
};

export default Header;