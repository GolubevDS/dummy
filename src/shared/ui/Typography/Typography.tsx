import { createElement } from 'react';

import { classNames } from 'shared/lib/helpers/classNames';

import type {
	ElementProps,
	TypographyProps,
	TypographyVariantMapping,
}          from './types';
import cls from './Typography.module.scss';

/** A mapping of typography variants to HTML tags. */
const defaultVariantMapping: TypographyVariantMapping = {
	h1: 'h1',
	h2: 'h2',
	subtitle: 'p',
	body1: 'p',
	body2: 'p',
};

/**
 * A component for rendering typographic content.
 *
 * @param {TypographyProps} props - The props to apply to the component.
 * @returns {JSX.Element} - The rendered component.
 */
export const Typography = ({
	children,
	className,
	component,
	variant = 'body1',
	variantMapping = defaultVariantMapping,
	type,
	...otherProps
}: TypographyProps) => {
	/**
	 * Returns the props to be passed to the underlying HTML element.
	 *
	 * @function
	 * @returns {ElementProps} - The props for the underlying HTML element.
	 */
	const getProps = (): ElementProps => {
		const classNamesMods = {
			[cls[variant]]: true,
		};
		
		if (type) {
			classNamesMods[cls[type]] = true;
		}
		
		return {
			...otherProps,
			className: classNames([className], classNamesMods),
		};
	};
	
	const Component = component
		|| variantMapping[variant]
		|| defaultVariantMapping[variant]
		|| 'span';
	
	return createElement(
		Component,
		getProps(),
		children,
	);
};
