/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import React, { PropTypes } from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { inject, observer } from 'mobx-react';
import auth from '../screens/auth';
import Empty from '../screens/Empty';
import Main from './main';

const RootNavigation = StackNavigator(
	{
		Main: { screen: Main },
		Login: { screen: auth.Login },
		Empty: { screen: Empty },
	}, {
		headerMode: 'none',
	}
);

const RootNavigationWrapper = ({ rootNavigationStore }) => (
	<RootNavigation
		navigation={addNavigationHelpers({
			dispatch: rootNavigationStore.dispatch,
			state: rootNavigationStore.navigationState,
		})} />
);
RootNavigationWrapper.propTypes = {
	rootNavigationStore: PropTypes.object.isRequired,
};

export { RootNavigation as RootNavigator, RootNavigationWrapper };
export default inject('rootNavigationStore')(observer(RootNavigationWrapper));
