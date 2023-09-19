import React, { useRef } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import Button from '../Button/Button.tsx';
import { Link } from 'react-router-dom';
import teslaLogo from '../../assets/assets/shared/desktop/tesla.svg';
import microsoftLogo from '../../assets/assets/shared/desktop/microsoft.svg';
import hpLogo from '../../assets/assets/shared/desktop/hewlett-packard.svg';
import oracleLogo from '../../assets/assets/shared/desktop/oracle.svg';
import googleLogo from '../../assets/assets/shared/desktop/google.svg';
import nvidiaLogo from '../../assets/assets/shared/desktop/nvidia.svg';
import { useInView, motion } from 'framer-motion';

interface IHomePageAbout {}

const HomePageAbout: React.FC<IHomePageAbout> = () => {
	const BEMBlock = 'home-page-about';

	const brandsLogoSources = [teslaLogo, microsoftLogo, hpLogo, oracleLogo, googleLogo, nvidiaLogo];

	const infoRef = useRef(null);
	const brandsRef = useRef(null);

	const isInfoInView = useInView(infoRef, { once: true });
	const isBrandsInView = useInView(brandsRef, { once: true });

	return (
		<div className={generateBEMClassName({ block: BEMBlock })}>
			<motion.div
				className={generateBEMClassName({ block: BEMBlock, element: 'info-wrapper' })}
				initial={{ y: '50%', opacity: 0 }}
				animate={{ y: isInfoInView ? 0 : '50%', opacity: isInfoInView ? 1 : 0 }}
				ref={infoRef}
			>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'info-text-container' })}>
					<h2>Who we work with</h2>
					<p>
						Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We
						provide developers with the tools they need to create easy and accessible experiences for their users.
					</p>
				</div>
				<Link to={'/about'}>
					<Button category='secondary'>About Us</Button>
				</Link>
			</motion.div>
			<motion.div
				className={generateBEMClassName({ block: BEMBlock, element: 'brands-wrapper' })}
				ref={brandsRef}
				initial={{ y: '50%', opacity: 0 }}
				animate={{ y: isBrandsInView ? 0 : '50%', opacity: isBrandsInView ? 1 : 0 }}
			>
				{brandsLogoSources.map((logoSrc, index) => (
					<div className={generateBEMClassName({ block: BEMBlock, element: 'brand-container' })} key={`logo-src-${index}`}>
						<img src={logoSrc} />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default HomePageAbout;
