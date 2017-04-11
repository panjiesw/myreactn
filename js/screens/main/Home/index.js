/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */

import React, { Component, PropTypes } from 'react';
import { Container, Content, Text, Header, Left, Right, Body, Title } from 'native-base';
import MenuButton from '../../../components/MenuButton';

class Home extends Component {
	static propTypes = {
		navigation: PropTypes.object.isRequired,
	}

	render() {
		const { navigation } = this.props;
		return (
			<Container>
				<Header>
					<Left>
						<MenuButton navigation={navigation} />
					</Left>
					<Body>
						<Title>Home Header</Title>
					</Body>
					<Right />
				</Header>
				<Content padder>
					<Text>Home</Text>
				</Content>
			</Container>
		);
	}
}

export default Home;
