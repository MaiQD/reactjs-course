import { useState } from "react";
import User from "app/models/user";
import agent from "../api/agent";
import { head, isEmpty } from "lodash";
import { IUserContext } from "app/contexts/global";
const sample: User = {
	id: 0,
	createdAt: new Date(),
	name: "Mrs. Carolyn Predovic",
	password: "",
	username: "",
	avatar:
		"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/104.jpg",
};

export default function useAuth(): IUserContext {
	const [user, setUser] = useState<User | null>(null);

	const saveUserToSession = (value: User) => {
		const userString = JSON.stringify(value);
		sessionStorage.setItem("USER", userString);
	};

	const checkUserIsAvailable = (): User | null => {
		const userString = sessionStorage.getItem("USER");
		const res: User | null = JSON.parse(userString + "");
		return res;
	};

	const clearUserSession = () => {
		sessionStorage.removeItem("USER");
	};

	const signIn = async (username: string, password: string) => {
		const params = new URLSearchParams();
		params.append("username", username);
		params.append("password", password);
		const result = await agent.Users.list(params);
		const userLoggedIn = head(result.filter((u) => u.password === password));
		if (!isEmpty(result) && userLoggedIn) {
			setUser(userLoggedIn);
			saveUserToSession(userLoggedIn);
		}
		return userLoggedIn;
	};

	const signUp = async (username: string, password: string) => {
		debugger
		const list = await agent.Users.list(new URLSearchParams());
		const data:User = { ...sample, username, password };
		const _ = await agent.Users.create(data);
		return data;
	};

	const signOut = async () => {
		clearUserSession();
		setUser(null);
	};

	const setUserLogin = (userLogin: User) => {
		setUser(userLogin);
		saveUserToSession(userLogin);
	};
	return  {
		user,
		signIn,
		signOut,
		signUp,
		setUserLogin,
		checkUserIsAvailable,
	};
}
