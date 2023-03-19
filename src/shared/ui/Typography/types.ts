import type {
	ClassAttributes,
	HTMLAttributes,
	ReactHTML,
	ReactNode,
} from 'react';

import type { Types } from 'shared/ui/types';

export type TypographyVariants =
	| 'h1'
	| 'h2'
	| 'subtitle'
	| 'body1'
	| 'body2';

export type TypographyVariantMapping = Partial<Record<TypographyVariants, keyof ReactHTML>>;

export interface TypographyProps {
	children?: ReactNode;
	className?: string;
	component?: keyof ReactHTML;
	variant?: TypographyVariants;
	variantMapping?: TypographyVariantMapping;
	type?: Types;
}

export type ElementProps =
	| ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>
	| null
