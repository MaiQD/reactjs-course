import React from 'react';
import TaskListItem from './TaskListItem/TaskListItem';
import styles from './TaskList.module.css';
function TaskList(props) {
	const content = props.items?.length > 0 ?
		props.items.map(item => <TaskListItem key={item.id} item={item} onUpdateState={props.onUpdateState} onDelete={props.onDelete} />) :
		<p>No tasks match the filter criteria.</p>
	return (
		<div className={styles.container}>
			<h4 className={styles.title}>ToDo List</h4>
			{content}
		</div>
	);
}

export default TaskList;