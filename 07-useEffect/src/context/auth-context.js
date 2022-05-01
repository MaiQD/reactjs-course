import React, { useEffect } from "react";

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => { },
	onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	useEffect(() => {
    const storedUserLoggerdInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggerdInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

	const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", '1');
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

	return <AuthContext.Provider
		value={{
			isLoggedIn: isLoggedIn,
			onLogout: logoutHandler,
			onLogin: loginHandler
		}}>
		{props.children}
	</AuthContext.Provider>
}
export default AuthContext;