/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import React from 'react';
import { NativeModules } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { inject, observer } from 'mobx-react';
import main from '../screens/main';

const { StatusBarManager } = NativeModules;

const MainNavigation = DrawerNavigator(
	{
		Home: { screen: main.Home },
		Other: { screen: main.Other },
	},
	{
		initialRouteName: 'Home',
		contentOptions: {
			style: {
				paddingTop: StatusBarManager.HEIGHT,
			},
		},
	}
);

const MainNavigationWrapper = () => (
	<MainNavigation />
);

export { MainNavigation as MainNavigator, MainNavigationWrapper };
export default inject('mainNavigationStore')(observer(MainNavigationWrapper));
