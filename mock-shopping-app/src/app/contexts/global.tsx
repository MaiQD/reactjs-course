import { createContext } from "react";
import useAuth from "../hooks/useAuth";
import User from "app/models/user";

export interface IUserContext {
	user: User | null;
	signIn: (username: string, password: string) => Promise<User | undefined>;
	signOut: () => void;
	signUp: (username: string, password: string) => Promise<User | null>;
	setUserLogin: (user: User) => void;
	checkUserIsAvailable: () => User | null;
}
const initUserContextValue: IUserContext = {
	user: null,
	signIn: async () => Promise.resolve(undefined),
	signOut: () => null,
	signUp: async () => Promise.resolve(null),
	setUserLogin: () => null,
	checkUserIsAvailable: () => null,
};
export const globalContext = createContext(initUserContextValue);

function GlobalContextProvider({ children }: { children: React.ReactNode }) {
	const auth = useAuth();

	return (
		<globalContext.Provider value={auth}>{children}</globalContext.Provider>
	);
}

export default GlobalContextProvider;
