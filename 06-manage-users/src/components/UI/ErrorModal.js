import React from 'react';
import Button from './Button';
import Card from './Card';
import styles from './ErrorModal.module.css';

function ErrorModal(props) {
	return (
		<div>
		<div className={styles.backdrop} onClick={props.onCancel}/>
			<Card className={styles.modal}>
				<header className={styles.header}><h2>{props.header || 'Modal header'}</h2></header>
				<div className={styles.content}><p>{props.content || 'Lorem 12312424'}</p></div>
				<footer className={styles.actions}>
					<Button onClick={props.onCancel} >{props.actionName || "Cancel"}</Button>
				</footer>
			</Card>
		</div>
	);
}

export default ErrorModal;