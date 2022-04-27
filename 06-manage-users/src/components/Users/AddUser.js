import React, { useRef, useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css'
const defaultUser = {
	enteredUsername: '',
	enteredAge: ''
}
const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [errorContent, setErrorContent] = useState('');
	const [isError, setIsError] = useState(false);

	const addUserHandler = (event) => {
		event.preventDefault();
		const name = nameInputRef.current.value;
		const age = ageInputRef.current.value;

		if (age.trim().length === 0 || name.trim().length === 0) {
			setErrorContent('Username or age is empty');
			setIsError(true);
			return;
		}
		if (+age < 1) {
			setErrorContent('Age is smaller than 1');
			setIsError(true);
			return;
		}
		props.onAddUser({ name: name, age: age, id: Math.random() })
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
	}
	const closeErrorModalHandler = () => {
		setIsError(false);
	}
	

	return (
		<>
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input ref={nameInputRef} id='username' type='text' />
					<label htmlFor='age'>Age (Years)</label>
					<input ref={ageInputRef} id='age' type='number' />
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
			{isError && <ErrorModal onCancel={closeErrorModalHandler} header="Error" content={errorContent} actionName="Cancel" />}
		</>
	);
}

export default AddUser;