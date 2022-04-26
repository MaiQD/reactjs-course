import React, { useState } from 'react';
import Input from '../../Common/Input/Input';
import Button from '../../Common/Button/Button';
import styles from './TaskAdd.module.css'
function TaskAdd(props) {
	const [name, setName] = useState('');
	const onChangeNameHandler = (e) => {
		setName(e.target.value);
	}
	const onAddTaskHandler = (e) => {
		e.preventDefault();
		if (name.trim() !== '') {
			const task = {
				id: Math.random(),
				name: name,
				status: "notYet",
				active: true,
			}
			setName('');
			props.onAddTask(task);
		}
	}
	return (
		<div className={styles.container}>
			<h4 className={styles.title}>Tạo mới</h4>
			<form onSubmit={onAddTaskHandler} className={styles["add-form"]}>
				<Input value={name} onChange={onChangeNameHandler} className={styles["add-form__input"]} placeholder="Nhập tên task" />
				<input className={styles["add-form__submit"]} type='submit' value='+' />
			</form>
		</div>
	);
}

export default TaskAdd;