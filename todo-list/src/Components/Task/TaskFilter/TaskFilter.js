import React from 'react';
import Checkbox from '../../Common/Checkbox/Checkbox';
import Dropdownlist from '../../Common/Dropdownlist/Dropdownlist';
import Input from '../../Common/Input/Input';
import styles from './TaskFilter.module.css';
const status = [
	{
		"text": "Tất cả",
		"value": "all"
	}
	,{
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

function TaskFilter(props) {
	const [filterKeyword, setFilterKeyword] = React.useState("");
	const inputChangeHandler = (e) => {
		setFilterKeyword(e.target.value);
	}
	const formSubmitHandler = (e) => {
		e.preventDefault();
		props.onFilterByKeyWord(filterKeyword);
	}
	const activeCheckBoxChangeHandler = (e) => {
		props.onFilterByActive(e.target.checked);
	}
	const statusChangeHandler = (e) => {
		props.onFilterByStatus(e.target.value);
	}

	return (
		<div className={styles.container}>
			<h4 className={styles.title}>Bộ lọc</h4>
			<form onSubmit={formSubmitHandler} className={styles["filter-form"]}>
				<div className={styles["filter-form__row"]}>
					<Input label='Tìm theo tên' value={filterKeyword} onChange={inputChangeHandler} className={styles["filter-form__input"]} placeholder="Nhập keyword" />
					<input className={styles["filter-form__submit"]} type='submit' value='Tìm' /></div>
				<div className={styles["filter-form__row"]}>
					<Checkbox onChange={activeCheckBoxChangeHandler} labelClassName={styles["filter-form__row__label"]} content="Chỉ hiện task được Active" />
				</div>
				<label className={styles["filter-form__row__label"]}>Lọc theo trạng thái</label>
				<div className={styles["filter-form__row"]}>
					<Dropdownlist onChange={statusChangeHandler} items={status}  displayValue="text" value="value" />
				</div>
			</form>
		</div>
	);
}

export default TaskFilter;