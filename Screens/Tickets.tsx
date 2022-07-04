import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../Constants';

const Tickets = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#F6F6F7' }} >
            <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }} >
                Liste des tickets
            </Text>
        </View>
    )
}

export default Tickets;