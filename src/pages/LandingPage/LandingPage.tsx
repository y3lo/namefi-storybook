import React from 'react';
import { type SocialLinkItem } from './components/SocialLinks';
import { Header, type HeaderNavLink } from './components/Header';
import { type FeatureCardProps } from './components/FeatureCard';
import { type SubscriptionInlineFormPayload } from './components/Subscription';
import { Hero } from './sections/Hero';
import { PoweredBy, type PoweredByItem } from './sections/PoweredBy';
import { Features } from './sections/Features';
import { Supporting, type SupportingItem } from './sections/Supporting';
import { Assets, type AssetItem } from './sections/Assets';
import { BackedBy, type BackerItem } from './sections/BackedBy';
import { FAQs, type FAQItem } from './sections/FAQs';
import { Footer, type FooterNavLink } from './sections/Footer';

export type LandingPageProps = {
	headerNavLinks: HeaderNavLink[];
	socialLinks: SocialLinkItem[];
	onClickLaunchDApp: () => void;
	heroText: React.ReactNode;
	heroSubscriptionLoading?: boolean;
	heroSubscriptionSubmiited?: boolean;
	onHeroSubscriptionSubmit?: (payload: SubscriptionInlineFormPayload) => void;
	onClickJoinBetaTest?: () => void;
	onClickInvestor?: () => void;
	poweredByItems: PoweredByItem[];
	features: FeatureCardProps[];
	supportings: SupportingItem[];
	assets: AssetItem[];
	backers: BackerItem[];
	faqs: FAQItem[];
	onClickAskHuman?: () => void;
	footerNavLinks: FooterNavLink[];
	footerSubscriptionLoading?: boolean;
	footerSubscriptionSubmiited?: boolean;
	onFooterSubscriptionSubmit?: (payload: SubscriptionInlineFormPayload) => void;
};

export const LandingPage = ({
	headerNavLinks = [],
	socialLinks = [],
	onClickLaunchDApp,
	heroText = 'Trading domains on chain.',
	heroSubscriptionLoading = false,
	heroSubscriptionSubmiited = false,
	onHeroSubscriptionSubmit,
	onClickJoinBetaTest,
	onClickInvestor,
	poweredByItems = [],
	features = [],
	supportings = [],
	assets = [],
	backers = [],
	faqs = [],
	onClickAskHuman,
	footerNavLinks = [],
	footerSubscriptionLoading = false,
	footerSubscriptionSubmiited = false,
	onFooterSubscriptionSubmit,
}: LandingPageProps) => {
	return (
		<div className="relative w-full flex flex-col justify-center items-center bg-black-1000">
			<div className="max-w-[1400px] w-full md:py-9 md:px-4 sticky top-0 z-50">
				<Header
					navLinks={headerNavLinks}
					socialLinks={socialLinks}
					onClickLaunchDApp={onClickLaunchDApp}
				/>
			</div>
			<div className="max-w-[1400px] w-full">
				<Hero
					socialLinks={socialLinks}
					subscriptionLoading={heroSubscriptionLoading}
					subscriptionSubmiited={heroSubscriptionSubmiited}
					onSubscriptionSubmit={onHeroSubscriptionSubmit}
					onClickJoinBetaTest={onClickJoinBetaTest}
					onClickInvestor={onClickInvestor}
					className="">
					{heroText}
				</Hero>
				<div className="w-full flex flex-col justify-center items-center px-6">
					<PoweredBy items={poweredByItems} className="mt-12 mb-24 md:mb-32" />
					<Features items={features} className="mb-16" />
					<Supporting items={supportings} className="mb-24 md:mb-48" />
					<Assets items={assets} className="mb-16 md:mb-48" />
					<BackedBy items={backers} className="mb-20 md:mb-32" />
					<FAQs
						items={faqs}
						onClickAskHuman={onClickAskHuman}
						className="mb-20 md:mb-32"
					/>
				</div>
			</div>
			<Footer
				navLinks={footerNavLinks}
				socialLinks={socialLinks}
				subscriptionLoading={footerSubscriptionLoading}
				subscriptionSubmiited={footerSubscriptionSubmiited}
				onSubscriptionSubmit={onFooterSubscriptionSubmit}
				className=""
			/>
		</div>
	);
};
