// Menu TODO
// [] Build the header component
// [] Build the menu component

import RNBounceable from '@freakycoder/react-native-bounceable';
import React from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../Constants/index';

const links = [
    { title: 'Liste des tickets', to: 'Tickets' },
    { title: 'Reglages', to: 'Reglages' },
];

const Menu = ({ navigation }: any) => {
    const Header = () => (
        <View
            style={{
                alignItems: 'flex-end',
                flex: 0.15,
                marginTop: Platform.OS === 'ios' ? 20 : 15,
                marginHorizontal: 15,
            }}>
            <TouchableOpacity
                style={{
                    backgroundColor: theme.colors.grey,
                    padding: 5,
                    borderRadius: 10,
                    opacity: 0.7,
                }} onPress={() => navigation.navigate('Explorer')} >
                <Icon name={'close-outline'} size={24} color={theme.colors.black} />
            </TouchableOpacity>
        </View>
    );

    const NavigationLink = () => (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 40,
            }}>
            {links.map(link => (
                <RNBounceable
                    key={link.title}
                    style={{ marginVertical: 15 }}
                    onPress={() => navigation.navigate(link.to)}>

                    <Text
                        style={

                            {
                                color: theme.colors.black,
                                fontFamily: 'Nunito-SemiBold',
                                fontSize: theme.sizes.h4,
                            }
                        }>
                        {link.title}
                    </Text>
                </RNBounceable>
            ))}
        </View>
    );

    return (
        <View style={styles.screen}>
            <ScrollView>
                <Header />
                <NavigationLink />
            </ScrollView>
            <View style={{ marginVertical: 15 }}>
                <Text
                    style={{
                        color: theme.colors.blue,
                        fontFamily: 'Nunito-SemiBold',
                        fontSize: theme.sizes.h6,
                        textAlign: 'center',
                    }}>
                    Version 1.0
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#F6F6F7',
        flex: 1,
    },
});

export default Menu;
