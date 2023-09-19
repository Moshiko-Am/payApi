import React, { useRef } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import { motion, useInView } from 'framer-motion';

interface IHomePageSimpleUI {}

const HomePageSimpleUI: React.FC<IHomePageSimpleUI> = () => {
	const BEMBlock = 'home-page-simple-ui';

	const infoRef = useRef(null);
	const imageRef = useRef(null);

	const isInfoInView = useInView(infoRef, { once: true });
	const isImageInView = useInView(imageRef, { once: true });

	return (
		<div className={generateBEMClassName({ block: BEMBlock })}>
			<motion.div
				ref={infoRef}
				className={generateBEMClassName({ block: BEMBlock, element: 'text-wrapper' })}
				initial={{ y: '100%', x: '-100%', opacity: 0 }}
				animate={{ y: isInfoInView ? 0 : '100%', opacity: isInfoInView ? 1 : 0, x: isInfoInView ? 0 : '-100%' }}
				transition={{ duration: 0.25 }}
			>
				<h2>Simple UI & UX</h2>
				<p>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. </p>
			</motion.div>
			<motion.div
				ref={imageRef}
				className={generateBEMClassName({ block: BEMBlock, element: 'image-wrapper' })}
				initial={{ y: '50%', x: '50%', opacity: 0 }}
				animate={{
					y: isImageInView ? 0 : '50%',
					opacity: isImageInView ? 1 : 0,
					x: isImageInView ? 0 : '50%',
				}}
				transition={{ duration: 0.25, delay: 0.5 }}
			>
				<img src={'src/assets/assets/home/desktop/illustration-simple-ui.svg'} />
			</motion.div>
		</div>
	);
};

export default HomePageSimpleUI;
