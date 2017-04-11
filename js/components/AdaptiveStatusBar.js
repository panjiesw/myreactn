/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */
import React, { PropTypes } from 'react';
import { StatusBar, View } from 'react-native';
import tinycolor from 'tinycolor2';

const AdaptiveStatusBar = ({ colorBehindStatusbar }) => (
	<View>
		{tinycolor(colorBehindStatusbar).isLight() ?
			<StatusBar translucent barStyle="dark-content" backgroundColor="rgba(0,0,0,.05)" /> :
			<StatusBar translucent barStyle="light-content" backgroundColor="rgba(0,0,0,.20)" />
		}
	</View>
);
AdaptiveStatusBar.propTypes = {
	colorBehindStatusbar: PropTypes.string.isRequired,
};

export default AdaptiveStatusBar;
