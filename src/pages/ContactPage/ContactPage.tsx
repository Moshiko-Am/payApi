import React, { useState, useRef } from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import Input from '../../components/Input/Input.tsx';
import Button from '../../components/Button/Button.tsx';
import teslaLogo from '../../assets/assets/shared/desktop/tesla-regular.svg';
import microsoftLogo from '../../assets/assets/shared/desktop/microsoft-regular.svg';
import hpLogo from '../../assets/assets/shared/desktop/hewlett-packard-regular.svg';
import oracleLogo from '../../assets/assets/shared/desktop/oracle-regular.svg';
import googleLogo from '../../assets/assets/shared/desktop/google-regular.svg';
import nvidiaLogo from '../../assets/assets/shared/desktop/nvidia-regular.svg';
import HomePageCTA from '../../components/HomePageCTA/HomePageCTA.tsx';
import Checkbox from '../../components/Button/Checkbox.tsx';
import { motion, useInView } from 'framer-motion';

interface IContactPage {}

const ContactPage: React.FC<IContactPage> = () => {
	const BEMBlock = 'contact-page';

	const brandsLogoSources = [teslaLogo, microsoftLogo, hpLogo, oracleLogo, googleLogo, nvidiaLogo];

	const [isChecked, setIsChecked] = useState(false);
	const handleOnClick = () => setIsChecked(!isChecked);

	const titleRef = useRef(null);
	const formRef = useRef(null);
	const brandsRef = useRef(null);

	const isTitleInView = useInView(titleRef, { once: true });
	const isFormInView = useInView(formRef, { once: true });
	const isBrandsInView = useInView(brandsRef, { once: true });

	return (
		<div className={generateBEMClassName({ block: BEMBlock })}>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'title-container' })}>
				<motion.h2
					ref={titleRef}
					className={generateBEMClassName({ block: BEMBlock, element: 'title' })}
					initial={{ x: '-100%', opacity: 0 }}
					animate={{ x: isTitleInView ? 0 : '-100%', opacity: 1 }}
					transition={{ duration: 0.75, ease: 'easeInOut' }}
				>
					Submit a help request and we’ll get in touch shortly.
				</motion.h2>
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'body-container' })}>
				<motion.form
					className={generateBEMClassName({ block: BEMBlock, element: 'form' })}
					ref={formRef}
					initial={{ x: '-100%', opacity: 0 }}
					animate={{ x: isFormInView ? 0 : '-100%', opacity: 1 }}
					transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.5 }}
				>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'inputs-wrapper' })}>
						<Input type='text' name='name' placeholder='Name' />
						<Input type='email' name='email' placeholder='Email Address' />
						<Input type='text' name='company' placeholder='Company Name' />
						<Input type='text' name='title' placeholder='Title' />
						<Input type='text' name='phone' placeholder='Phone' />
						<textarea
							rows={4}
							name='message'
							placeholder='Message'
							className={generateBEMClassName({ block: BEMBlock, element: 'text-area' })}
						/>
					</div>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'updates-wrapper' })}>
						<div
							onClick={handleOnClick}
							className={generateBEMClassName({
								block: BEMBlock,
								element: 'checkbox-wrapper',
								modifier: { name: 'checked', condition: isChecked },
							})}
						>
							<Checkbox isChecked={isChecked} />
						</div>
						<label className={generateBEMClassName({ block: BEMBlock, element: 'updates-label' })}>
							Stay up-to-date with company announcements and updates to our API
						</label>
					</div>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'submit-wrapper' })}>
						<Button category={'secondary'}>Submit</Button>
					</div>
				</motion.form>
				<motion.div
					ref={brandsRef}
					className={generateBEMClassName({ block: BEMBlock, element: 'proofs-container' })}
					initial={{ x: '100%', opacity: 0 }}
					animate={{ x: isBrandsInView ? 0 : '100%', opacity: 1 }}
					transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.5 }}
				>
					<h4 className={generateBEMClassName({ block: BEMBlock, element: 'proofs-title' })}>
						Join the thousands of innovators already building with us
					</h4>
					<div className={generateBEMClassName({ block: BEMBlock, element: 'proofs-wrapper' })}>
						{brandsLogoSources.map((logoSrc, index) => (
							<div className={generateBEMClassName({ block: BEMBlock, element: 'brand-container' })} key={`logo-src-${index}`}>
								<img src={logoSrc} />
							</div>
						))}
					</div>
				</motion.div>
			</div>
			<div className={generateBEMClassName({ block: BEMBlock, element: 'cta-container' })}>
				<HomePageCTA />
			</div>
		</div>
	);
};

export default ContactPage;
