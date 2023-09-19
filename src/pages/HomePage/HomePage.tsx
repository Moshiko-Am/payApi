import React from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import AppHero from '../../components/AppHero/AppHero.tsx';
import HomePageAbout from '../../components/HomePageAbout/HomePageAbout.tsx';
import HomePageImplement from '../../components/HomePageImplement/HomePageImplement.tsx';
import HomePageSimpleUI from '../../components/HomePageSimpleUI/HomePageSimpleUI.tsx';
import HomePageReasons from '../../components/HomePageReasons/HomePageReasons.tsx';
import HomePageCTA from '../../components/HomePageCTA/HomePageCTA.tsx';
import { motion } from 'framer-motion';

interface IHomePage {}

const HomePage: React.FC<IHomePage> = () => {
	const BEMBlock = 'home-page';

	const variants = {
		hidden: { opacity: 1 },
		visible: { opacity: 1 },
	};

	return (
		<motion.div variants={variants} initial={'hidden'} animate={'visible'} className={generateBEMClassName({ block: BEMBlock })}>
			<AppHero />
			<HomePageAbout />
			<HomePageImplement />
			<HomePageSimpleUI />
			<HomePageReasons />
			<HomePageCTA />
		</motion.div>
	);
};

export default HomePage;
