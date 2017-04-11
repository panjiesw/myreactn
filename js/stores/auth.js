/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */

import { action, observable } from 'mobx';
import storage from '../utils/storage';

const LOGIN_STORAGE_KEY = 'loginState';

class AuthStore {
	@observable user = null;
	@observable isLoggedIn = false;

	async login(form) {
		console.debug('AuthStore.login', form.username);
		try {
			const dummyState = { user: { username: form.username }, isLoggedIn: true };
			await storage.save({
				key: LOGIN_STORAGE_KEY,
				rawData: dummyState,
			});
			this.setState(dummyState);
		} catch (err) {
			console.error('Failed to set login state', err);
			throw err;
		}
	}

	async canEnter() {
		console.debug('AuthStore.canEnter');
		if (this.isLoggedIn) {
			return this.isLoggedIn;
		}
		const fromStorage = await this.loadStateLogin();
		return fromStorage;
	}

	async loadStateLogin() {
		console.debug('AuthStore.loadStateLogin');
		try {
			const state = await storage.load({ key: LOGIN_STORAGE_KEY });
			if (state) {
				this.setState(state);
				return state.isLoggedIn;
			}
		} catch (err) {
			if (err.name !== 'NotFoundError') {
				console.error('Failed to load login state', err);
			}
		}
		return false;
	}

	setState = action(state => {
		console.debug('AuthStore.setState', state);
		this.user = state.user;
		this.isLoggedIn = state.isLoggedIn;
	});
}

export default AuthStore;
