import React, { useCallback, useState } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import Button from '../Button/Button.tsx';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileNav from '../MobileNav/MobileNav.tsx';

interface IAppHeader {}

const AppHeader: React.FC<IAppHeader> = () => {
	const BEMBlock = 'app-header';
	const location = useLocation();

	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const toggleIsMobileOpen = () => setIsMobileOpen(!isMobileOpen);

	const isActiveLink = useCallback((link: string) => location?.pathname?.includes(link.toLowerCase()), [location.pathname]);

	return (
		<motion.nav
			initial={{ y: '-100%', opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: 'tween', duration: 0.25 }}
			className={generateBEMClassName({ block: BEMBlock })}
		>
			<motion.div className={generateBEMClassName({ block: BEMBlock, element: 'logo-container' })} whileHover={{ scale: 1.03 }}>
				<Link to={'/'}>
					<img
						src='src/assets/assets/shared/desktop/logo.svg'
						alt='Logo'
						className={generateBEMClassName({ block: BEMBlock, element: 'logo' })}
					/>
				</Link>
			</motion.div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'nav-container' })}>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'links-container' })}>
					{['Pricing', 'About', 'Contact'].map((link, index) => (
						<Link
							to={`/${link.toLowerCase()}`}
							className={generateBEMClassName({ block: BEMBlock, element: 'link' })}
							key={`header-link-${link}-${index}`}
						>
							<span
								className={generateBEMClassName({
									block: BEMBlock,
									element: 'link-text',
									modifier: { name: 'active', condition: isActiveLink(link) },
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
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'mobile-container' })}>
				<MobileNav isOpen={isMobileOpen} toggleOpen={toggleIsMobileOpen} />
			</div>
		</motion.nav>
	);
};

export default AppHeader;
