/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { action, observable } from 'mobx';
import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../../navigations/root';

class RootNavigationStore {
	@observable headerTitle = '';
	@observable.ref navigationState = {
		index: 0,
		routes: [
			{ key: 'Empty', routeName: 'Empty' },
		]
	};

	constructor(authStore) {
		this.authStore = authStore;
		this.initAuth();
	}

	// NOTE: the second param, is to avoid stacking and reset the nav state
	@action dispatch = (action, stackNavState = true) => {
		const previousNavState = stackNavState ? this.navigationState : null;
		this.navigationState = RootNavigator
			.router
			.getStateForAction(action, previousNavState);
		return true;
	}

	async initAuth() {
		let action;
		const canEnter = await this.authStore.canEnter();
		if (canEnter) {
			action = NavigationActions.reset({
				index: 0,
				actions: [
					NavigationActions.navigate({ routeName: 'Main' }),
				]
			});
		} else {
			action = NavigationActions.reset({
				index: 0,
				actions: [
					NavigationActions.navigate({ routeName: 'Login' }),
				]
			});
		}
		this.dispatch(action);
	}

	@action setState = state => {
		this.navigationState = state;
	}
}

export default RootNavigationStore;
