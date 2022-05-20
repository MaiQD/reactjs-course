import { useContext, useEffect } from "react";
import { globalContext } from "../contexts/global";
import { useNavigate } from "react-router-dom";

function withAuth(WrappedComponent) {
  return (props) => {
    const { user, setUser, checkUserIsAvailable } = useContext(globalContext);
    const navigate = useNavigate();

    useEffect(() => {
      debugger
      const sessionUser = checkUserIsAvailable();
      if (sessionUser) {
        setUser(sessionUser);
      }
    }, [])
    useEffect(() => {
      const sessionUser = checkUserIsAvailable();
      if (!user && !sessionUser) {
        navigate("/login");
      }
    }, [user]);

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
