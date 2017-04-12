/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { action, observable } from 'mobx';
import { MainNavigator } from '../../navigations/main';

class MainNavigationStore {
	@observable headerTitle = '';
	@observable.ref navigationState = {
		index: 0,
		routes: [
			{ key: 'Home', routeName: 'Home' },
			{ key: 'Other', routeName: 'Other' },
		]
	};

	// NOTE: the second param, is to avoid stacking and reset the nav state
	@action dispatch = (action, stackNavState = true) => {
		console.log('dispatch', arguments);
		const previousNavState = stackNavState ? this.navigationState : null;
		this.navigationState = MainNavigator
			.router
			.getStateForAction(action, previousNavState);
		return true;
	}
}

export default MainNavigationStore;
