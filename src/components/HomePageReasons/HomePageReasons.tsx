import React, { useRef } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import { motion, useInView } from 'framer-motion';

interface IHomePageReasons {}

interface DataItem {
	id: number;
	iconSrc: string;
	title: string;
	description: string;
}

const HomePageReasons: React.FC<IHomePageReasons> = () => {
	const BEMBlock = 'home-page-reasons';

	const dataArray: DataItem[] = [
		{
			id: 1,
			iconSrc: 'src/assets/assets/home/desktop/icon-personal-finances.svg',
			title: 'Personal Finances',
			description:
				'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ',
		},
		{
			id: 2,
			iconSrc: 'src/assets/assets/home/desktop/icon-banking-and-coverage.svg',
			title: 'Banking & Coverage',
			description:
				'With our platform you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
		},
		{
			id: 3,
			iconSrc: 'src/assets/assets/home/desktop/icon-consumer-payments.svg',
			title: 'Consumer Payments',
			description:
				'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.',
		},
	];

	const divRef = useRef(null);

	const isDivInView = useInView(divRef, { once: true });

	return (
		<div className={generateBEMClassName({ block: BEMBlock })}>
			{dataArray.map((item: DataItem, index) => (
				<motion.div
					ref={divRef}
					className={generateBEMClassName({ block: BEMBlock, element: 'item' })}
					key={item.id}
					initial={{ y: '100%', opacity: 0 }}
					animate={{ y: isDivInView ? 0 : '100%', opacity: isDivInView ? 1 : 0 }}
					transition={{ duration: 0.25, delay: index * 0.5 }}
				>
					<img src={item.iconSrc} alt={item.title} className={generateBEMClassName({ block: BEMBlock, element: 'item-icon' })} />
					<h5 className={generateBEMClassName({ block: BEMBlock, element: 'item-title' })}>{item.title}</h5>
					<p
						className={generateBEMClassName({
							block: BEMBlock,
							element: 'item-description',
						})}
					>
						{item.description}
					</p>
				</motion.div>
			))}
		</div>
	);
};

export default HomePageReasons;
