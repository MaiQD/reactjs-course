import React, { useState } from 'react';
import Card from '../../Components/Common/Card/Card';
import TaskAdd from '../../Components/Task/TaskAdd/TaskAdd';
import TaskFilter from '../../Components/Task/TaskFilter/TaskFilter';
import TaskList from '../../Components/Task/TaskList/TaskList';
import styles from './HomePage.module.css';
const defaultTasks = [
	{
		id: 1,
		name: "Task 1",
		status: "done",
		active: true,
	}, {
		id: 2,
		name: "Task 2",
		status: "inProgress",
		active: false,
	}, {
		id: 3,
		name: "Task 3",
		status: "notYet",
		active: true,
	}, {
		id: 4,
		name: "Task 4",
		status: "done",
		active: false,
	}, {
		id: 5,
		name: "Task 5",
		status: "done",
		active: false,
	}
]
function HomePage(props) {
	const [tasks, setTasks] = useState(defaultTasks);
	const [selectedStatus, setSelectedStatus] = useState("all");
	const [filterKeyword, setFilterKeyword] = useState("");
	const [isShowOnlyActive, setIsShowOnlyActive] = useState(false);
	const addTask = (task) => {
		console.log(task);
		setTasks([...tasks, task]);
	}
	const updateStateTask = (task) => {
		setTasks((pre) => {
			const index = pre.findIndex(item => item.id === task.id);
			if (index > -1) {
				pre.splice(index, 1, task);
				return [...pre];
			}
			return [...pre, task];
		})
	}
	const deleteTask = (id) => {
		setTasks((pre) => {
			const index = pre.findIndex(task => task.id === id);
			if (index > -1)
				pre.splice(index, 1);
			return [...pre];
		})

	}
	const filteredTasks = tasks.filter(task =>
		(selectedStatus === 'all' || task.status === selectedStatus)
		&& (filterKeyword === '' || task.name.toLowerCase().indexOf(filterKeyword.toLowerCase()) > -1)
		&& (!isShowOnlyActive || task.active));
	return (
		<div>
			<h1 className="title">Project 2: datmq1</h1>
			<Card>
				<div className={styles.left}>
					<TaskAdd onAddTask={addTask} />
					<TaskFilter onFilterByStatus={setSelectedStatus} onFilterByActive={setIsShowOnlyActive} onFilterByKeyWord={setFilterKeyword} />
				</div>
				<div className={styles.right}>
					<TaskList items={filteredTasks} onUpdateState={updateStateTask} onDelete={deleteTask} />
				</div>
			</Card>
		</div>
	);
}

export default HomePage;