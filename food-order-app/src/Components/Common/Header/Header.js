import React from 'react';
import styles from './Header.module.css';
import meals from './../../../assets/images/meals.jpg';
import HeaderCartButton from './HeaderCartButton/HeaderCartButton';
function Header() {
	return (
		<>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<div>
					<HeaderCartButton />
				</div>
			</header>
			<div className={styles['main-image']}>
				<img src={meals} alt="main" />
			</div>
		</>
	);
}

export default Header;