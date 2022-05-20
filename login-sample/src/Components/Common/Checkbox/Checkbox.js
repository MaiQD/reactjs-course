import React from 'react';
import styles from './Checkbox.module.css';
function Checkbox(props) {
	return (
		<div className={styles.container}>
			<input type={'checkbox'} onChange={props.onChange} defaultChecked={props.checked} className={styles["checkbox"]} />
			<span className={props.labelClassName || styles.label}>{props.content}</span>
		</div>
	);
}

export default Checkbox;