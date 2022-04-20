import React from 'react';
import styles from './Button.module.css';
function Button(props) {
	return (
		<button onClick={props.onClick} type={props.type || 'button'} className={styles.button} >
			{props.children}
		</button>
	);
}

export default Button;