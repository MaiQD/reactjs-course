import React from 'react';
import styles from './Button.module.css';
function Button(props) {
	return (
		<button type="button" className={`${styles.button} ${styles.button}`} onClick={props.onClick}>{props.children}</button>
	);
}

export default Button;