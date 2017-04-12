/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';
import { computed } from 'mobx';
import {
	Dimensions,
	NativeModules,
	StatusBar
} from 'react-native';
import { Container, Header, Left, Right, Body, Title } from 'native-base';
// import MenuButton from './MenuButton';

const { StatusBarManager } = NativeModules;
const deviceHeight = Dimensions.get('window').height;

class AppContainer extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		rootNavigationStore: PropTypes.object.isRequired,
		// navigation: PropTypes.object.isRequired,
	}

	@computed get isAuth() {
		const { rootNavigationStore } = this.props;
		const { navigationState } = rootNavigationStore;
		return navigationState.routes ? navigationState.routes.find(v => v.routeName === 'Login') !== undefined : true;
	}

	@computed get isEmpty() {
		const { rootNavigationStore } = this.props;
		const { navigationState } = rootNavigationStore;
		return navigationState.routes ? navigationState.routes.find(v => v.routeName === 'Empty') !== undefined : true;
	}

	render() {
		const { children } = this.props;
		return (
			<Container style={{ height: deviceHeight - StatusBarManager.HEIGHT, marginTop: StatusBarManager.HEIGHT }}>
				<StatusBar translucent backgroundColor="rgba(0, 0, 0, .2)" />
				{
					this.isAuth ? null : (
						<Header>
							{
								this.isEmpty ? null : (
									<Left>
										{/* <MenuButton navigation={navigation} /> */}
									</Left>
								)
							}
							<Body>
								<Title>Home Header</Title>
							</Body>
							<Right />
						</Header>
					)
				}
				{children}
			</Container>
		);
	}
}

export { AppContainer as AppContainerRaw };

export default inject('rootNavigationStore')(observer(AppContainer));
