import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../Constants';

const Termes = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#F6F6F7' }} >
            <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }} >
                Termes
            </Text>
        </View>
    )
}

export default Termes;