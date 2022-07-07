import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../../Constants';

const { width, height } = Dimensions.get('screen');

const Create = () => {
    const Header = () => {
        return (
            <View
                style={{
                    flex: 0.2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: 15,
                }}>
                <TouchableOpacity style={{ height: 30, width: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} onPress={() => console.log('Close')}>
                    <Icon name="close" size={22} color="black" />
                </TouchableOpacity>

                <Text
                    style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }}>
                    Nouvelle Evenement
                </Text>
                <TouchableOpacity onPress={() => console.log('Create')}>
                    <Text
                        style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }}>
                        Create
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    const Form = () => {
        return (
            <View style={{ flex: 0.8 }}>
                <View  >
                    <ImageBackground
                        source={require('../../assets/images/data/adam-whitlock-I9j8Rk-JYFM-unsplash.jpg')}
                        style={{ width, height: height / 3.5 }}>
                        <View
                            style={{
                                position: 'absolute',
                                right: 0,
                                bottom: 0,
                            }}>
                            <TouchableOpacity
                                style={{
                                    width: 40,
                                    height: 40,
                                    backgroundColor: theme.colors.antiFlashWhite,
                                    opacity: 0.5,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                    marginRight: 15,
                                    marginBottom: 15,
                                }}>
                                <Icon name="pencil-sharp" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>

                <View style={{ marginTop: 10, marginLeft: 15 }} >
                    <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold', fontSize: 18 }} >Informations</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.screen}>
            <Header />
            <ScrollView>
                <Form />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F6F6F7',
    },
});

export default Create;
