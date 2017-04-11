/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */

import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';

const storage = new Storage({
	storageBackend: AsyncStorage,
});

export default storage;
