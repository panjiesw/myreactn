/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */

import React, { PropTypes } from 'react';
import { Button, Icon } from 'native-base';

const MenuButton = ({ navigation }) => {
	const navigate = () => {
		navigation.navigate('DrawerOpen');
	};
	return (
		<Button transparent onPress={navigate}>
			<Icon name="menu" size={28} />
		</Button>
	);
};
MenuButton.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default MenuButton;
