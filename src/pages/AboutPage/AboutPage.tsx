import React, { useRef } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import HomePageCTA from '../../components/HomePageCTA/HomePageCTA.tsx';
import { motion, useInView } from 'framer-motion';

interface IAboutPage {}

const AboutPage: React.FC<IAboutPage> = () => {
	const BEMBlock = 'about-page';

	const titleRef = useRef(null);
	const firstFeatureRef = useRef(null);
	const secondFeatureRef = useRef(null);
	const statsRef = useRef(null);
	const imgRef = useRef(null);

	const titleInView = useInView(titleRef, { once: true });
	const firstFeatureInView = useInView(firstFeatureRef, { once: true });
	const secondFeatureInView = useInView(secondFeatureRef, { once: true });
	const statsInView = useInView(statsRef, { once: true });
	const imgInView = useInView(imgRef, { once: true });

	return (
		<div className={generateBEMClassName({ block: BEMBlock })}>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'title-container' })}>
				<motion.h2
					ref={titleRef}
					className={generateBEMClassName({ block: BEMBlock, element: 'title' })}
					initial={{ x: '-100%', opacity: 0 }}
					animate={{ x: titleInView ? 0 : '-100%', opacity: 1 }}
					transition={{ duration: 0.75 }}
				>
					We empower innovators by delivering access to the financial system
				</motion.h2>
			</div>
			<motion.div
				className={generateBEMClassName({ block: BEMBlock, element: 'features-container', modifier: 'top' })}
				ref={firstFeatureRef}
				initial={{ x: '100%', opacity: 0 }}
				animate={{ x: firstFeatureInView ? 0 : '100%', opacity: 1 }}
				transition={{ duration: 0.75 }}
			>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'feature-wrapper' })}>
					<h4 className={generateBEMClassName({ block: BEMBlock, element: 'feature-title' })}>Our Vision</h4>
					<p className={generateBEMClassName({ block: BEMBlock, element: 'feature-description' })}>
						Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an
						intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on
						democratizing financial services through technology.
					</p>
				</div>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'feature-wrapper' })}>
					<h4 className={generateBEMClassName({ block: BEMBlock, element: 'feature-title' })}>Our Business</h4>
					<p className={generateBEMClassName({ block: BEMBlock, element: 'feature-description' })}>
						At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key
						insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.
					</p>
				</div>
			</motion.div>
			<motion.div
				ref={imgRef}
				className={generateBEMClassName({ block: BEMBlock, element: 'image-container' })}
				initial={{ opacity: 0 }}
				animate={{ opacity: imgInView ? 1 : 0 }}
				transition={{duration: 0.75}}
			>
				<img src={'src/assets/assets/about/desktop/image-team-members.jpg'} />
			</motion.div>
			<motion.div
				ref={statsRef}
				className={generateBEMClassName({ block: BEMBlock, element: 'stats-container' })}
				initial={{ x: '-100%', opacity: 0 }}
				animate={{ x: statsInView ? 0 : '-100%', opacity: 1 }}
				transition={{ duration: 0.75 }}
			>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'stat-wrapper' })}>
					<p className={generateBEMClassName({ block: BEMBlock, element: 'stat-title' })}>Team Members</p>
					<h2 className={generateBEMClassName({ block: BEMBlock, element: 'stat-value' })}>300+</h2>
				</div>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'stat-wrapper' })}>
					<p className={generateBEMClassName({ block: BEMBlock, element: 'stat-title' })}>Offices in the US</p>
					<h2 className={generateBEMClassName({ block: BEMBlock, element: 'stat-value' })}>3</h2>
				</div>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'stat-wrapper' })}>
					<p className={generateBEMClassName({ block: BEMBlock, element: 'stat-title' })}>Transactions analyzed</p>
					<h2 className={generateBEMClassName({ block: BEMBlock, element: 'stat-value' })}>10M+</h2>
				</div>
			</motion.div>
			<motion.div
				className={generateBEMClassName({
					block: BEMBlock,
					element: 'features-container',
					modifier: 'bottom',
				})}
				ref={secondFeatureRef}
				initial={{ x: '100%', opacity: 0 }}
				animate={{ x: secondFeatureInView ? 0 : '100%', opacity: 1 }}
				transition={{ duration: 0.75 }}
			>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'feature-wrapper' })}>
					<h4 className={generateBEMClassName({ block: BEMBlock, element: 'feature-title' })}>The Culture</h4>
					<p className={generateBEMClassName({ block: BEMBlock, element: 'feature-description' })}>
						We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's
						company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of
						thought, no matter the job title.
					</p>
				</div>
				<div className={generateBEMClassName({ block: BEMBlock, element: 'feature-wrapper' })}>
					<h4 className={generateBEMClassName({ block: BEMBlock, element: 'feature-title' })}>The People</h4>
					<p className={generateBEMClassName({ block: BEMBlock, element: 'feature-description' })}>
						We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have
						diverse backgrounds and skills.
					</p>
				</div>
			</motion.div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'cta-container' })}>
				<HomePageCTA />
			</div>
		</div>
	);
};

export default AboutPage;
