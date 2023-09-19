import React from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import Button from '../Button/Button.tsx';

interface IPlanItem {
	plan: {
		id: number;
		sectionTitle: string;
		sectionDescription: string;
		sectionPrice: string;
		sectionFeatures: { label: string; isChecked: boolean }[];
	};
}

const PlanItem: React.FC<IPlanItem> = ({ plan }) => {
	const BEMBlock = 'plan-item';

	return (
		<div className={generateBEMClassName({ block: BEMBlock })}>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'section', modifier: 'header' })}>
				<h4 className={generateBEMClassName({ block: BEMBlock, element: 'title' })}>{plan.sectionTitle}</h4>
				<p
					className={generateBEMClassName({
						block: BEMBlock,
						element: 'description',
					})}
				>
					{plan.sectionDescription}
				</p>
				<h2 className={generateBEMClassName({ block: BEMBlock, element: 'price' })}>{plan.sectionPrice}</h2>
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'section', modifier: 'body' })}>
				{plan.sectionFeatures.map((feature, index) => (
					<div
						key={`plan-id-${plan.id}-feature-${feature}-${index}`}
						className={generateBEMClassName({ block: BEMBlock, element: 'feature-wrapper' })}
					>
						<div className={generateBEMClassName({ block: BEMBlock, element: 'feature-icon' })}>
							{feature.isChecked && (
								<svg width='14' height='11' xmlns='http://www.w3.org/2000/svg'>
									<path d='M1 5.718L4.893 9.56l8.107-8' stroke='#BA4270' stroke-width='2' fill='none' fill-rule='evenodd' />
								</svg>
							)}
						</div>
						<div
							className={generateBEMClassName({
								block: BEMBlock,
								element: 'feature-label',
								modifier: { name: 'checked', condition: feature.isChecked },
							})}
						>
							{feature.label}
						</div>
					</div>
				))}
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'section', modifier: 'cta' })}>
				<Button category={'secondary'}>Request Access</Button>
			</div>
		</div>
	);
};

export default PlanItem;
