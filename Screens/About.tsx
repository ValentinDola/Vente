import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../Constants';
import Header from '../Components/Header';

const About = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#F6F6F7' }} >
            <Header value={'À propos de nous'} />
        </View>
    )
}

export default About;