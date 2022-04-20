import React from 'react';
import Card from '../UI/Card';
import styles from './UserList.module.css'
function UserList(props) {
	let content = "No users";
	if (props.items?.length > 0)
		content = props.items.map(item => <li key={item.id}>{item.name} ({item.age} years old)</li>)
	return (
		<Card className={styles.users}>
			<ul>
				{content}
			</ul>
		</Card>
	);
}

export default UserList;