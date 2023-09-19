import React from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import Button from '../Button/Button.tsx';
import Input from '../Input/Input.tsx';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

interface IAppHero {}

const AppHero: React.FC<IAppHero> = () => {
	const BEMBlock = 'app-hero';

	const ctaVariants: Variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	const imageVariants: Variants = {
		hidden: { x: '200%', opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.25,
				delay: 0.5,
				damping: 80,
			},
		},
		hover: {
			scale: 1.02,
		},
	};

	return (
		<div className={generateBEMClassName({ block: BEMBlock })}>
			<motion.div
				variants={ctaVariants}
				initial={'hidden'}
				animate={'visible'}
				transition={{ duration: 1, delay: 0.25 }}
				className={generateBEMClassName({ block: BEMBlock, element: 'cta-wrapper' })}
			>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'hero-header-container' })}>
					<h1>Start building with our APIs for absolutely free.</h1>
				</div>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'hero-cta-container' })}>
					<Input placeholder={'Enter email address'} />
					<Button category='primary'>Schedule a Demo</Button>
				</div>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'hero-contact-container' })}>
					<p>
						Have any questions? <Link to={'/contact'}>Contact Us</Link>
					</p>
				</div>
			</motion.div>
			<motion.div
				variants={imageVariants}
				initial={'hidden'}
				animate={'visible'}
				whileHover={'hover'}
				className={generateBEMClassName({ block: BEMBlock, element: 'image-container' })}
			>
				<img src={'src/assets/assets/home/desktop/illustration-phone-mockup.svg'} />
			</motion.div>
		</div>
	);
};

export default AppHero;
