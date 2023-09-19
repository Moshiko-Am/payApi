import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import { Link } from 'react-router-dom';
import Button from "../Button/Button.tsx";

interface IMobileNav {
	isOpen: boolean;
	toggleOpen: () => void;
	placement?: 'start' | 'end' | 'top' | 'bottom';
}

const MobileNav: React.FC<IMobileNav> = ({ isOpen, toggleOpen, placement = 'end' }) => {
	const BEMBlock = 'mobile-nav';

	return (
		<div onClick={toggleOpen}>
			<svg width='28' height='17' xmlns='http://www.w3.org/2000/svg'>
				<g fill='#36536B' fill-rule='evenodd'>
					<path d='M0 0h28v3H0zM0 7h28v3H0zM0 14h28v3H0z' />
				</g>
			</svg>

			<Offcanvas show={isOpen} onHide={toggleOpen} placement={placement}>
				<Offcanvas.Header closeButton></Offcanvas.Header>
				<Offcanvas.Body>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'links-container' })}>
						{['Home','Pricing', 'About', 'Contact'].map((link, index) => (
							<Link
								to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
								className={generateBEMClassName({ block: BEMBlock, element: 'link' })}
								key={`header-link-${link}-${index}`}
							>
								<span
									className={generateBEMClassName({
										block: BEMBlock,
										element: 'link-text',
									})}
								>
									{link}
								</span>
							</Link>
						))}
					</div>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'cta-container' })}>
						<Link to={'/contact'} className={generateBEMClassName({ block: BEMBlock, element: 'link' })}>
							<Button category={'primary'}>Schedule a Demo</Button>
						</Link>
					</div>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
};

export default MobileNav;
