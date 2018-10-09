import { getDefaultPath } from 'helpers/urlSync';

const options = [
	// {
	// 	label: 'sidebar.blankPage',
	// 	key: 'blank-page',
	// },
	{
		label: 'Home',
		key: 'home',
	},
	{
		label: 'Chat',
		key: 'chat',
	},
	{
		label: 'Tickets',
		key: 'tickets',
	},
	{
		label: 'Help',
		key: 'help',
	},
	{
		label: 'Agents',
		key: 'agents',
	},
	{
		label: 'Visitors',
		key: 'visitors',
	},
];
const getBreadcrumbOption = () => {
	const preKeys = getDefaultPath();
	let parent, activeChildren;
	options.forEach(option => {
		if (preKeys[option.key]) {
			parent = option;
			(option.children || []).forEach(child => {
				if (preKeys[child.key]) {
					activeChildren = child;
				}
			});
		}
	});
	return { parent, activeChildren };
};
export default options;
export { getBreadcrumbOption };
