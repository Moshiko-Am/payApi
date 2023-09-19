import React from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';

interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	placeholder?: string;
	bBlock?: string;
}

const Input: React.FC<IInput> = ({ placeholder, bBlock, ...rest }) => {
	const BEMBlock = bBlock ? ['input', bBlock] : 'input';

	return (
		<div className={generateBEMClassName({ block: BEMBlock, element: 'wrapper' })}>
			<input
				className={generateBEMClassName({ block: BEMBlock, element: 'input' })}
				placeholder={placeholder ? placeholder : 'Enter Text Here...'}
				{...rest}
			/>
		</div>
	);
};

export default Input;
