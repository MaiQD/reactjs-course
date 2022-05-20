import React from 'react';
import styles from './Input.module.css';
function Input(props) {
	return (
		<div className={styles.container}>
		<label className={`${styles.label} ${props.labelClassName}`}>{props.label}</label>
		<input type={props.type|'text'} className={`${styles.input} ${props.className}`}  placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
		</div>
	);
}

export default Input;