export interface TSListItemHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	title?: string;

	subtitle?: string;

	disabled?: boolean;

	selectable?: boolean;

	selected?: boolean;

	dir?: string;

	icon?: string;

	"icon-left"?: string;

	"icon-right"?: string;

	"icon-selected"?: string;

	"no-wrap"?: boolean;

}

export interface TSListItem {
	title?: string;

	subtitle?: string;

	disabled?: boolean;

	selectable?: boolean;

	selected?: boolean;

	dir?: string;

	icon?: string;

	iconLeft?: string;

	iconRight?: string;

	iconSelected?: string;

	noWrap?: boolean;

}
