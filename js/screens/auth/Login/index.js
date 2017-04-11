/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */

import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import { autorunAsync } from 'mobx';
import { observer, inject } from 'mobx-react';
import AdaptiveStatusBar from '../../../components/AdaptiveStatusBar';
import styles from './styles';

class Login extends Component {
	static navigationOptions = {
		title: 'Login',
	}

	static propTypes = {
		navigation: PropTypes.object.isRequired,
		authStore: PropTypes.object.isRequired,
	}

	state = {
		username: '',
		password: '',
		usernameDirty: false,
		passwordDirty: false,
	}

	authWatcher = null;

	setPasswordRef = ref => {
		this.passwordRef = ref;
	}

	handleNext = () => {
		this.passwordRef._root.focus();
	}

	handleInput = name => value => {
		this.setState({
			[name]: value,
			[`${name}Dirty`]: true,
		});
	}

	handleSubmit = () => {
		const { username, password } = this.state;
		this.props.authStore.login({ username, password });
	}

	componentDidMount() {
		const { authStore, navigation } = this.props;
		const resetAction = NavigationActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({ routeName: 'Main' }),
			]
		});
		this.authWatcher = autorunAsync('Login.authWatcher', () => {
			if (authStore.isLoggedIn) {
				navigation.dispatch(resetAction);
			}
		});
	}

	componentWillUnmount() {
		if (this.authWatcher !== null) {
			this.authWatcher();
			this.authWatcher = null;
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<AdaptiveStatusBar colorBehindStatusbar={'rgb(255,255,255)'} />
				<View style={styles.spacer} />
				<View style={styles.box}>
					<Text style={{ textAlign: 'center' }}>Login to Start</Text>
					<Form>
						<Item floatingLabel>
							<Label>Username</Label>
							<Input
								value={this.state.username}
								onChangeText={this.handleInput('username')} />
						</Item>
						<Item floatingLabel>
							<Label>Password</Label>
							<Input
								secureTextEntry
								value={this.state.password}
								onChangeText={this.handleInput('password')} />
						</Item>
					</Form>
					<Button block rounded style={{ marginTop: 20 }} onPress={this.handleSubmit}>
						<Text>Login</Text>
					</Button>
				</View>
				<View style={styles.spacer} />
			</View>
		);
	}
}

export { Login as LoginRaw };

export default inject('authStore')(observer(Login));
