import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ScrollView,
    Button,
    TextInput,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../../Constants';

const { width, height } = Dimensions.get('screen');

const Create = () => {




    return (
        <View style={styles.screen}>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F6F6F7',
    },
    input: {
        width: 200,
        backgroundColor: 'red',
    },
});

export default Create;
