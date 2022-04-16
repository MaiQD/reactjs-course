import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020');
	const changeFilterYearHandler = (year) => {
		setFilteredYear(year);
	}
	const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

	
	return (
		<ul>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onChangeFilterYear={changeFilterYearHandler} />
				<ExpenseChart expenses={filteredExpenses}/>
				<ExpenseList items = {filteredExpenses}/>
			</Card>
		</ul>
	);
}

export default Expenses;