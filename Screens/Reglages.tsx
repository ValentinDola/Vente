import React from 'react';
import { Text, View } from 'react-native';
import Header from '../Components/Header';
import { theme } from '../Constants';

const Reglages = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#F6F6F7' }} >
            <Header value={'Reglages'} />
        </View>
    )
}

export default Reglages;