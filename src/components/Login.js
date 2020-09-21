import React from 'react';

const Login = ({ authentificate }) => {
  return (
    <div className="login">
      <h2>Connecte toi pour créer tes recettes !</h2>
      <button onClick={authentificate} className="facebook-button">Me connecter avec Facebook</button>
    </div>
  );
};

export default Login;