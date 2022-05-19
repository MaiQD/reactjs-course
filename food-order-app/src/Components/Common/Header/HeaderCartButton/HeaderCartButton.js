import React from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from './CartIcon'
function HeaderCartButton() {
	return (
		<>
			<button className={styles.button}>
				<span className={styles.icon}><CartIcon /></span>
				<span>Your Cart</span>
				<span className={styles.badge}>5</span>
			</button>
		</>
	);
}

export default HeaderCartButton;