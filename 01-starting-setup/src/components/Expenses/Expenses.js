import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
function Expenses(props) {
	
	const [filteredYear, setFilteredYear] = useState('2020');
	const changeFilterYearHandler = (year)=>{
		console.log(year);
		setFilteredYear(year);
	}
	return (
		<div>
		<Card className='expenses'>
			<ExpensesFilter selected={filteredYear} onChangeFilterYear={changeFilterYearHandler}/>
			{props.items.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)}
		</Card>
		</div>
	);
}

export default Expenses;