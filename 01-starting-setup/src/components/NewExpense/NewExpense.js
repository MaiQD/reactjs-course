import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
function NewExpense(props) {
	const [isShowForm, setIsShowForm] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData)=>{
		var expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		}
		props.onAddExpense(expenseData);
	}
	
	const toggleShowFormHandler = ()=>{
		setIsShowForm((pre) => !pre);
	}
	return (
		<div className='new-expense'>
			{!isShowForm && <button onClick={toggleShowFormHandler}>Add Expense</button>}
			{isShowForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClickCancel={toggleShowFormHandler}/>}
		</div>
	);
}

export default NewExpense;
