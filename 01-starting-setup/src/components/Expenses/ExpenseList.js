import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'
function ExpenseList(props) {
	let expensesContent = <h2 className='expenses-list__fallback'>Found no expenses.</h2>
	if (props.items.length > 0)
		expensesContent = props.items.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />);
	return (
		<ul className='expenses-list'>
			{expensesContent}
		</ul>
	);
}

export default ExpenseList;