import React, { useRef } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import Input from '../Input/Input.tsx';
import Button from '../Button/Button.tsx';
import { motion, useInView } from 'framer-motion';

interface IHomePageCTA {}

const HomePageCTA: React.FC<IHomePageCTA> = () => {
	const BEMBlock = 'home-page-cta';

	const divRef = useRef(null);

	const isInView = useInView(divRef, { once: true });

	return (
		<motion.div
			ref={divRef}
			className={generateBEMClassName({ block: BEMBlock })}
			initial={{ x: '-100%', opacity: 0 }}
			animate={{ x: isInView ? 0 : '-100%', opacity: isInView ? 1 : 0 }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
		>
			<h2>Ready to start?</h2>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'hero-cta-container' })}>
				<Input placeholder={'Enter email address'} />
				<Button category='primary'>Schedule a Demo</Button>
			</div>
		</motion.div>
	);
};

export default HomePageCTA;
