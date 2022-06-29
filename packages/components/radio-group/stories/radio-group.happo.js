import { html } from 'lit-html';
import '@tradeshift/elements.radio';
import '../lib/radio-group.esm';

export default {
	title: 'ts-radio-group'
};

export const Test = () => {
	return html`
		<h1>dir</h1>

		<ts-radio-group name="radio">
			<ts-radio value="blue" label="Blue pill"></ts-radio>
			<ts-radio value="yellow" label="Red pill" checked></ts-radio>
			<ts-radio value="black" label="Black pill" disabled></ts-radio>
		</ts-radio-group>

		<ts-radio-group name="radio">
			<ts-radio value="blue" label="Blue pill" dir="rtl"></ts-radio>
			<ts-radio value="yellow" label="Red pill" checked dir="rtl"></ts-radio>
			<ts-radio value="black" label="Black pill" disabled dir="rtl"></ts-radio>
		</ts-radio-group>
	`;
};
