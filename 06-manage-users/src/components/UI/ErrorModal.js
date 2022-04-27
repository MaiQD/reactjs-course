import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';
import styles from './ErrorModal.module.css';

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onClick} />;
}
const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}><h2>{props.header || 'Modal header'}</h2></header>
			<div className={styles.content}><p>{props.content || 'Lorem 12312424'}</p></div>
			<footer className={styles.actions}>
				<Button onClick={props.onCancel} >{props.actionName || "Cancel"}</Button>
			</footer>
		</Card>
	)
}

function ErrorModal(props) {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop  onClick={props.onCancel} />, document.getElementById('backdrop-root'))}
			{ReactDOM.createPortal(<ModalOverlay header={props.header} content={props.content} actionName={props.actionName} onCancel={props.onCancel} />, document.getElementById('overlay-root'))}
		</>
	);
}

export default ErrorModal;