import React from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';

interface ICheckbox {
	isChecked: boolean;
}

const Checkbox: React.FC<ICheckbox> = ({ isChecked }) => {
	const BEMBlock = 'checkbox';

	return (
		<div className={generateBEMClassName({ block: BEMBlock, modifier: { name: 'checked', condition: isChecked } })}>
			{isChecked && (
				<svg width='14' height='11' xmlns='http://www.w3.org/2000/svg'>
					<path d='M1 5.718L4.893 9.56l8.107-8' stroke={isChecked ? '#fff' : '#BA4270'} stroke-width='2' fill='none' fill-rule='evenodd' />
				</svg>
			)}
		</div>
	);
};

export default Checkbox;
