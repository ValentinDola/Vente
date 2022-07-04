import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../Constants';

const Reglages = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#F6F6F7' }} >
            <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }} >
                Reglages
            </Text>
        </View>
    )
}

export default Reglages;