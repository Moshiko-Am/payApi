import React from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';

interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	category?: 'primary' | 'secondary';
	dark?: boolean;
	children: React.ReactNode;
}

const Button: React.FC<IButton> = ({ category = 'primary', dark = false, children, ...rest }) => {
	const BEMBlock = 'btn';
	const modifiers = [category && `${category}`];

	return (
		<button
			className={generateBEMClassName({
				block: BEMBlock,
				modifier: modifiers,
				utilities: dark ? 'dark' : 'light',
			})}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
