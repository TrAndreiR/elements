export interface TSDatePickerOverlayHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	dir?: string;

	translations?: string;

	firstDay?: string;

	pageDate?: string;

	selectedDate?: string;

	required?: boolean;

	disabledDateCheck?: string;

}

export interface TSDatePickerOverlay {
	dir?: string;

	translations?: object;

	firstDay?: number;

	pageDate?: string;

	selectedDate?: string;

	required?: boolean;

	disabledDateCheck?: function;

}
