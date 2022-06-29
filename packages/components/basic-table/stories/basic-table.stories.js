import { object, select, text, withKnobs } from '@storybook/addon-knobs';
import '@tradeshift/elements.document-card';
import '@tradeshift/elements.status';
import '../lib/basic-table.esm';
import readme from '../README.md';

export default {
	title: 'ts-basic-table',
	decorators: [withKnobs]
};

export const Default = () => {
	const colsData = object('cols', [
		{
			property: 'context',
			size: 'large',
			value: 'Context',
			renderer: 'renderCard'
		},
		{
			visibility: 'desktop-only',
			property: 'type',
			size: 'small',
			value: 'Type',
			display: 'left',
			renderer: 'renderStatus'
		},
		{ visibility: 'desktop-only', property: 'participants', size: 'small', value: 'Participants' },
		{
			visibility: 'desktop-only',
			property: 'newActivity',
			value: 'New Activity',
			renderer: 'renderMobile'
		},
		{
			visibility: 'desktop-only',
			property: 'lastActivity',
			value: 'Last Activity',
			size: 'medium',
			display: 'right'
		},
		{
			visibility: 'mobile-only',
			property: 'mobileLastActivity',
			size: 'small',
			display: 'right',
			renderer: 'renderUnread'
		}
	]);
	const data = object('data', [
		{
			context: {
				name: 'Invoice #32131',
				description: 'Tradeshift',
				mobileDescription: 'Tradeshift | 5 participants',
				type: 'offer'
			},
			type: { status: 'success', text: 'External' },
			participants: 100,
			newActivity:
				'Every little bunny has a habit that is funny. It doesnt matter where he goes he always wrinkles up his nose.',
			lastActivity: 'Yesterday, 15:01',
			mobileLastActivity: { unread: 10, lastActivity: 'Yesterday, 15:01' },
			id: 1
		},
		{
			context: {
				name: 'Purchase Request #1231',
				description: 'MegaImage',
				mobileDescription: 'MegaImage',
				type: 'document'
			},
			type: { status: 'error', text: 'Private' },
			participants: 100,
			newActivity:
				'Every little bunny has a habit that is funny. It doesnt matter where he goes he always wrinkles up his nose.',
			lastActivity: '29 Jul, 15:01',
			mobileLastActivity: { unread: 0, lastActivity: '29 Jul, 15:01' },
			id: 2
		},
		{
			context: {
				name: 'GoodsReceipt #231',
				description: 'CocaCola',
				mobileDescription: '5 participants',
				type: 'private'
			},
			type: { status: 'neutral', text: 'Internal' },
			participants: 100,
			newActivity:
				'Every little bunny has a habit that is funny. It doesnt matter where he goes he always wrinkles up his nose.',
			lastActivity: '2 Aug, 15:01',
			mobileLastActivity: { lastActivity: '2 Aug, 15:01' },
			id: 3
		}
	]);
	const dir = select(
		'dir',
		{
			ltr: 'ltr',
			rtl: 'rtl'
		},
		'ltr'
	);
	const selectedIds = object('selectedIds', [1]);
	const cardKnob = text(
		'card',
		`(item, row) => {
const card = document.createElement('ts-document-card');
card.name = item.name;
card.description = item.description;
card.mobileDescription = item.mobileDescription;
card.selected = row.mobileLastActivity.unread > 0;
card.cardType = item.cardType;
return card;
}`
	);
	const statusKnob = text(
		'status',
		`(item) => {
const div = document.createElement('div');
div.style.display = 'flex';
div.style.justifyContent = 'flex-start';
const status = document.createElement('ts-status');
status.status = item.status;
status.text = item.text;
div.appendChild(status);
return div;
};`
	);
	const mobileKnob = text(
		'render',
		`(item, row) => {
const div = document.createElement('div');
div.innerText = item;
if (row.mobileLastActivity.unread > 0) {
div.style.fontWeight = '700';
}
return div;
};`
	);
	const unreadKnob = text(
		'unread',
		`(item) => {
const div = document.createElement('div');
div.style.padding = '10px';
div.style.whiteSpace = 'nowrap';
if (item.unread && item.unread > 0) {
const child = document.createElement('div');
child.innerText = item.unread;
child.style.backgroundColor = '#01b0ff';
child.style.borderRadius = '3px';
child.style.color = 'white';
child.style.padding = '5px';
child.style.fontSize = '11px';
child.style.fontWeight = '600';
div.style.display = 'flex';
div.style.alignItems = 'center';
div.appendChild(child);
} else {
div.innerText = item.lastActivity;
}
return div;
};`
	);

	// eslint-disable-next-line no-eval
	const renderCard = eval(cardKnob); // NOSONAR we need to let the developer to be able change the default render function
	// from one textarea like those in the knobs tab to just see the changes in the top frame (not saved anywhere).
	//	The eval running the provided function in the knobs input, so the value of that input either coming from our
	//	source code which is safe, or from the user(developer who want to use our UI components).

	// eslint-disable-next-line no-eval
	const renderStatus = eval(statusKnob); // NOSONAR we need to let the developer to be able change the default render function
	// from one textarea like those in the knobs tab to just see the changes in the top frame (not saved anywhere).
	//	The eval running the provided function in the knobs input, so the value of that input either coming from our
	//	source code which is safe, or from the user(developer who want to use our UI components).

	// eslint-disable-next-line no-eval
	const renderMobile = eval(mobileKnob); // NOSONAR we need to let the developer to be able change the default render function
	// from one textarea like those in the knobs tab to just see the changes in the top frame (not saved anywhere).
	//	The eval running the provided function in the knobs input, so the value of that input either coming from our
	//	source code which is safe, or from the user(developer who want to use our UI components).

	// eslint-disable-next-line no-eval
	const renderUnread = eval(unreadKnob); // NOSONAR we need to let the developer to be able change the default render function
	// from one textarea like those in the knobs tab to just see the changes in the top frame (not saved anywhere).
	//	The eval running the provided function in the knobs input, so the value of that input either coming from our
	//	source code which is safe, or from the user(developer who want to use our UI components).

	const renderFunctions = {
		renderCard,
		renderStatus,
		renderMobile,
		renderUnread
	};
	const cols = colsData.map(el => Object.assign({ renderFunction: renderFunctions[el.renderer] }, el));
	return Object.assign(document.createElement('ts-basic-table'), { cols, data, dir, selectedIds });
};

Default.story = {
	name: 'default',

	parameters: {
		knobs: { escapeHTML: false },
		notes: readme
	}
};
