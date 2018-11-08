import React, { Component } from 'react';
import asyncComponent from 'helpers/AsyncFunc';
import Route from 'components/utility/customRoute';

const routes = [
	{
		path: 'home',
		component: asyncComponent(() => import('../Widgets')),
	},
	
	{
		path: 'chat',
		component: asyncComponent(() => import('../Agent/Chat')),
	},
	{
		path: 'help',
		component: asyncComponent(() => import('../Agent/Help')),
	},
	{
		path: 'tickets',
		component: asyncComponent(() => import('../Agent/Tickets')),
	},
	{
		path: 'calendar',
		component: asyncComponent(() => import('../Agent/Calendar')),
	},
	{
		path: 'box',
		component: asyncComponent(() => import('../Agent/Box')),
	},
	{
		path: 'agents',
		component: asyncComponent(() => import('../Agent/Agents')),
	},
	{
		path: 'visitors',
		component: asyncComponent(() => import('../Agent/Visitors')),
	},
];

class AppRouter extends Component {
	render() {
		const { url, style } = this.props;
		return (
			<div style={style}>
				{routes.map(singleRoute => {
					const { path, exact, ...otherProps } = singleRoute;
					return (
						<Route
							exact={exact === false ? false : true}
							key={singleRoute.path}
							path={`${url}/${singleRoute.path}`}
							{...otherProps}
						/>
					);
				})}
			</div>
		);
	}
}

export default AppRouter;
