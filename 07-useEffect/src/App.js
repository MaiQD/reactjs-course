import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext, { AuthContextProvider } from './context/auth-context';

function App() {
  const authContext = React.useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {!authContext.isLoggedIn && <Login />}
        {authContext.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
