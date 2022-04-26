import React from 'react';
import styles from './Dropdownlist.module.css'
function Dropdownlist(props) {
	return (
		<select className={styles.dropdown} onChange={props.onChange} defaultValue={props.selectedValue}>
			{props.items.map(item =>
				<option key={item[props.value]} value={item[props.value]} >{item[props.displayValue]}</option>
			)}
		</select>
	);
}

export default Dropdownlist;