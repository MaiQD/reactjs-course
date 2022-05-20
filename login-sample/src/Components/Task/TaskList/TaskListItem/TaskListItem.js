import React from 'react';
import Checkbox from '../../../Common/Checkbox/Checkbox';
import Dropdownlist from '../../../Common/Dropdownlist/Dropdownlist';
import styles from './TaskListItem.module.css';

const status = [
	 {
		"text": "Not yet",
		"value": "notYet"
	}, {
		"text": "In progress",
		"value": "inProgress"
	},
	{
		"text": "Done",
		"value": "done"
	}
]
function TaskListItem(props) {
	const onClickDeleteHandler = (event) => {
		props.onDelete(+event.target.value);
	}
	const onUpdateStatusHandler = (event) => {
		props.onUpdateState({...props.item, status: event.target.value})
	}
	const onActiveHandler = (event) => {
		props.onUpdateState({...props.item, active: event.target.checked})
	}
	return (
		<div className={styles["tasklist-item"]}>
			<div className={styles["tasklist-item__left"]}>
				<span className={styles["tasklist-item__name"]}>
					{props.item.name}</span>
				<Checkbox onChange={onActiveHandler} checked={props.item.active} content="Activate" />
			</div>
			<div className={styles["tasklist-item__right"]}>
				<Dropdownlist items={status} selectedValue={props.item.status} onChange={onUpdateStatusHandler} displayValue="text" value="value" />
				<button value={props.item.id} onClick={onClickDeleteHandler} className={styles["tasklist-item__trash"]} ></button>
			</div>
		</div>
	);
}

export default TaskListItem;