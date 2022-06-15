import { useContext, useEffect } from "react";
import { globalContext } from "../contexts/global";
import { useNavigate } from "react-router-dom";

function withAuth(WrappedComponent) {
  return (props) => {
    const { user, setUser, checkUserIsAvailable } = useContext(globalContext);
    const navigate = useNavigate();

    useEffect(() => {
      const sessionUser = checkUserIsAvailable();
      if (sessionUser) {
        setUser(sessionUser);
      }
      if (!user && !sessionUser) {
        navigate("/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
