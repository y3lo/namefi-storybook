import React, { SVGProps } from 'react';

export const BellIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		style={{
			display: 'inline-block',
			stroke: 'currentcolor',
			fill: 'currentcolor',
			width: '1em',
			height: 'auto',
			position: 'relative',
			top: '-0.15em',
		}}
		viewBox="0 0 18 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M10.3221 2.50101C10.3221 3.01134 10.0326 3.45405 9.60886 3.6739C12.3679 3.97991 14.5135 6.31938 14.5135 9.15999V13.3C14.5135 14.2792 14.5609 14.9787 15.3155 15.356C15.6142 15.5053 15.771 15.8404 15.6942 16.1654C15.6175 16.4904 15.3274 16.72 14.9935 16.72H9.90234C10.0819 16.9298 10.1904 17.2022 10.1904 17.5C10.1904 18.1627 9.65312 18.7 8.99038 18.7C8.32764 18.7 7.79038 18.1627 7.79038 17.5C7.79038 17.2022 7.89885 16.9298 8.07843 16.72H2.99351C2.65959 16.72 2.36949 16.4904 2.29277 16.1654C2.21605 15.8404 2.37284 15.5053 2.67151 15.356C3.42612 14.9787 3.47351 14.2792 3.47351 13.3V9.15999C3.47351 6.31483 5.62604 3.97242 8.39142 3.67244C7.96922 3.4521 7.68101 3.01021 7.68101 2.50101C7.68101 1.7717 8.27223 1.18048 9.00153 1.18048C9.73084 1.18048 10.3221 1.7717 10.3221 2.50101ZM8.99351 5.07999C6.74019 5.07999 4.91351 6.90666 4.91351 9.15999L4.91358 13.3686C4.91429 13.8574 4.91536 14.5909 4.62123 15.28H13.3658C13.0717 14.5909 13.0727 13.8574 13.0734 13.3686L13.0735 13.3V9.15999C13.0735 6.90666 11.2468 5.07999 8.99351 5.07999Z" />
	</svg>
);
