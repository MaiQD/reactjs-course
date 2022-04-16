import React, { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('2019-12-31');
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmont: '',
	// 	enteredDate: ''
	// })
	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate)
		};
		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('2019-12-31');
		props.onClickCancel();
	}
	const titleChangeHandler = (event) => {
		// setUserInput({...userInput,enteredTitle: event.target.value});

		//	use when you depend on previous state
		// setUserInput((previousState)=>{
		// 	console.log({...previousState,enteredTitle: event.target.value});
		// 	return {...previousState,enteredTitle: event.target.value}
		// })
		setEnteredTitle(event.target.value)
	};
	const amountChangeHandler = (event) => {
		// setUserInput({...userInput,enteredAmont: event.target.value});
		setEnteredAmount(event.target.value)
	};
	const dateChangeHandler = (event) => {
		// setUserInput({...userInput,enteredDate: event.target.value});
		setEnteredDate(event.target.value)
	};
	return (
		<>
			
				<form onSubmit={submitHandler}>
					<div className='new-expense__controls'>
						<div className='new-expense__control'>
							<label>Title</label>
							<input type='text' value={enteredTitle} onChange={titleChangeHandler} />
						</div>
						<div className='new-expense__control'>
							<label>Amount</label>
							<input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
						</div>
						<div className='new-expense__control'>
							<label>Date</label>
							<input type='date' value={enteredDate} min={"2019-01-01"} max={"2022-12-31"} onChange={dateChangeHandler} />
						</div>
					</div>
					<div className='new-expense__actions'>
						<button type='button' onClick={props.onClickCancel}>Cancel</button>
						<button type='submit'>Add Expense</button>
					</div>
				</form>

		</>
	);
}

export default ExpenseForm;