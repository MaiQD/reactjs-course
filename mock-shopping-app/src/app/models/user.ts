interface User {
	id: number,
	createdAt: Date,
	name?: string,
	avatar?: string,
	password: string,
	username: string,
}

export default User;
