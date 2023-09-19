import React, { useRef } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import { motion, useInView } from 'framer-motion';

interface IHomePageImplement {}

const HomePageImplement: React.FC<IHomePageImplement> = () => {
	const BEMBlock = 'home-page-implement';

	const infoRef = useRef(null);
	const imageRef = useRef(null);

	const isInfoInView = useInView(infoRef, { once: true });
	const isImageInView = useInView(imageRef, { once: true });

	return (
		<div className={generateBEMClassName({ block: BEMBlock })}>
			<motion.div
				className={generateBEMClassName({ block: BEMBlock, element: 'image-wrapper' })}
				ref={imageRef}
				initial={{ x: '-100%', opacity: 0 }}
				animate={{ x: isImageInView ? 0 : '-100%', opacity: isImageInView ? 1 : 0 }}
				transition={{ duration: 0.3, delay: 0.3 }}
			>
				<img src={'src/assets/assets/home/desktop/illustration-easy-to-implement.svg'} />
			</motion.div>
			<motion.div
				ref={infoRef}
				className={generateBEMClassName({ block: BEMBlock, element: 'text-wrapper' })}
				initial={{ x: '100%', opacity: 0 }}
				animate={{ x: isInfoInView ? 0 : '100%', opacity: isInfoInView ? 1 : 0 }}
				transition={{ duration: 0.3, delay: 0.3 }}
			>
				<h2>Easy to implement</h2>
				<p>
					Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate
					payments functionality with ease.
				</p>
			</motion.div>
		</div>
	);
};

export default HomePageImplement;
