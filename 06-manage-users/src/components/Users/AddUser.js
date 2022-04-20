import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css'
const defaultUser = {
	enteredUsername: '',
	enteredAge: ''
}
const AddUser = (props) => {
	const [enteredUser, setEnteredUser] = useState(defaultUser);
	const [errorContent, setErrorContent] = useState('');
const [isError, setIsError] =useState(false);
	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUser.enteredAge.trim().length === 0 || enteredUser.enteredUsername.trim().length === 0) {
			setErrorContent('Username or age is empty');
			setIsError(true);
			return;
		}
		if (+enteredUser.enteredAge < 1) {
			setErrorContent('Age is smaller than 1');
			setIsError(true);
			return;
		}


		props.onAddUser({ name: enteredUser.enteredUsername, age: enteredUser.enteredAge, id: Math.random() })

		setEnteredUser(defaultUser)
	}
	const closeErrorModalHandler = ()=>{
		setIsError(false);
	}
	const usernameChangeHandler = (event) => {
		setEnteredUser((pre) => {
			return { ...pre, enteredUsername: event.target.value };
		})
	}
	const ageChangeHandler = (event) => {
		setEnteredUser((pre) => {
			return { ...pre, enteredAge: event.target.value };
		})
	}

	return (
		<>
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input value={enteredUser.enteredUsername} onChange={usernameChangeHandler} id='username' type='text' />
					<label htmlFor='age'>Age (Years)</label>
					<input value={enteredUser.enteredAge} onChange={ageChangeHandler} id='age' type='number' />
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
			{isError && <ErrorModal onCancel={closeErrorModalHandler} header="Error" content={errorContent} actionName="Cancel" />}
		</>
	);
}

export default AddUser;