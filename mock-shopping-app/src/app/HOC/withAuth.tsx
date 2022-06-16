import { useContext, useEffect } from "react";
import { globalContext } from "../contexts/global";
import { useNavigate } from "react-router-dom";
import { cartContext } from "app/contexts/cart";

function withAuth<TProps, TInjectedKeys extends keyof TProps>(
	WrappedComponent: React.JSXElementConstructor<TProps>
) {
	return (props: Omit<TProps, TInjectedKeys>) => {
		const { user, setUserLogin, checkUserIsAvailable } =
			useContext(globalContext);
		const { initDataCart } = useContext(cartContext);
		const navigate = useNavigate();

		useEffect(() => {
			const sessionUser = checkUserIsAvailable();
			if (sessionUser) {
				setUserLogin(sessionUser);
				initDataCart();
			}
			if (!user && !sessionUser) {
				navigate("/login");
			}
		}, []);

		return <WrappedComponent {...(props as TProps)} />;
	};
}

export default withAuth;
