import React from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import { Link } from 'react-router-dom';

interface IAppFooter {}

const AppFooter: React.FC<IAppFooter> = () => {
	const BEMBlock = 'app-footer';

	return (
		<footer className={generateBEMClassName({ block: BEMBlock })}>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'logo-container' })}>
				<Link to={'/'}>
					<img
						src='src/assets/assets/shared/desktop/logo-white.svg'
						alt='Logo'
						className={generateBEMClassName({ block: BEMBlock, element: 'logo' })}
					/>
				</Link>
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'links-container' })}>
				{['Pricing', 'About', 'Contact'].map((link, index) => (
					<Link to={`/${link.toLowerCase()}`} key={index} className={generateBEMClassName({ block: BEMBlock, element: 'link' })}>
						<span className={generateBEMClassName({ block: BEMBlock, element: 'link-text' })}>{link}</span>
					</Link>
				))}
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'social-container' })}>
				{['Facebook', 'Twitter', 'Linkedin'].map((link, index) => (
					<img
						key={`social-logo-${link}-${index}`}
						src={`src/assets/assets/shared/desktop/${link.toLowerCase()}.svg`}
						alt={`${link} icon`}
						className={generateBEMClassName({ block: BEMBlock, element: 'icon' })}
					/>
				))}
			</div>
		</footer>
	);
};

export default AppFooter;
