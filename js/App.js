/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import { Provider } from 'mobx-react';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import AppContainer from './components/AppContainer';
import stores from './stores';
import navs from './navigations';

const { Root } = navs;

class App extends Component {
	render() {
		return (
			<Provider {...stores}>
				<StyleProvider style={getTheme(platform)}>
					<AppContainer>
						<Root />
					</AppContainer>
				</StyleProvider>
			</Provider>
		);
	}
}

export default App;
