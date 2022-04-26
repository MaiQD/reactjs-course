import React from 'react';
import TaskListItem from './TaskListItem/TaskListItem';
import styles from './TaskList.module.css';
function TaskList(props) {
	return (
		<div className={styles.container}>
			<h4 className={styles.title}>ToDo List</h4>
			{props.items.map(item => <TaskListItem key={item.id} item={item} onUpdateState={props.onUpdateState} onDelete={props.onDelete}/>)}
		</div>
	);
}

export default TaskList;