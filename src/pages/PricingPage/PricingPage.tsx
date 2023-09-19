import React, { useRef } from 'react';
import data from '../../data/pricingData.json';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import PlanItem from '../../components/PlanItem/PlanItem.tsx';
import HomePageCTA from '../../components/HomePageCTA/HomePageCTA.tsx';
import { motion, useInView } from 'framer-motion';

interface IPricingPage {}

const PricingPage: React.FC<IPricingPage> = () => {
	const { pageTitle, pageSections } = data;

	const BEMBlock = 'pricing-page';

	const divRef = useRef(null);

	const isInView = useInView(divRef, { once: true });

	return (
		<div className={generateBEMClassName({ block: BEMBlock })}>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'title-container' })}>
				<h2 className={generateBEMClassName({ block: BEMBlock, element: 'title' })}>{pageTitle}</h2>
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'plans-container' })}>
				{pageSections.map((section, index) => (
					<motion.div
						ref={divRef}
						className={generateBEMClassName({ block: BEMBlock, element: 'plan-wrapper' })}
						initial={{ x: `-50%`, opacity: 0}}
						animate={{ x: isInView ? '0%' : `${index}00%`, opacity: 1 }}
						transition={{ delay: index * 0.3, type: 'spring' }}
					>
						<PlanItem key={section.id} plan={section} />
					</motion.div>
				))}
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'page-cta' })}>
				<HomePageCTA />
			</div>
		</div>
	);
};

export default PricingPage;
