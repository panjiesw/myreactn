/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import RootNavigationStore from './navigation/root';
import MainNavigationStore from './navigation/main';
import AuthStore from './auth';

const authStore = new AuthStore();

const rootNavigationStore = new RootNavigationStore(authStore);
const mainNavigationStore = new MainNavigationStore();

export default {
	rootNavigationStore,
	mainNavigationStore,
	authStore
};
