// TODO
// [X] Build the header component
// [X] Build the results component
// [X] Navigate to the detail screen

import moment from 'moment';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    TextInput,
    Dimensions,
    FlatList,
    TouchableWithoutFeedback,
    ImageBackground,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { theme } from '../Constants/index';
import { selectData } from '../Slices/app';

const { width, height } = Dimensions.get('screen');

const Recherche = ({ navigation }: any) => {
    const [search, setSearch]: any = useState('Happy Run');

    const event = useSelector(selectData);

    const Header = () => (
        <View
            style={{
                flex: 0.15,
                marginTop: Platform.OS === 'ios' ? 10 : 5,
                marginHorizontal: 15,
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
            <TouchableOpacity
                style={{
                    backgroundColor: theme.colors.bluetiful,
                    padding: 6,
                    borderRadius: 10,
                    opacity: 0.7,
                }}
                onPress={() => navigation.goBack()}>
                <Icon
                    name="ios-chevron-back-outline"
                    style={{
                        backgroundColor: theme.colors.bluetiful,
                        padding: 6,
                        borderRadius: 10,
                        // opacity: 0.7,
                    }}
                    size={18}
                    color={theme.colors.black}
                />
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    value={search}
                    style={{
                        height: 40,

                        width: width - 80,
                        backgroundColor: 'transparent',
                        borderWidth: 3,
                        borderRadius: 5,
                        paddingLeft: 10,
                        fontFamily: 'Nunito-SemiBold',
                        fontSize: theme.sizes.h6,
                        color: theme.colors.black,
                        borderColor: theme.colors.bluetiful,
                    }}
                    placeholder="Recherche"
                    placeholderTextColor={theme.colors.grey}
                    onChangeText={setSearch}
                />
                {search !== '' && <TouchableOpacity
                    style={{
                        height: 35,
                        width: 35,
                        justifyContent: 'center', alignItems: 'center',
                        padding: 3,
                        borderRadius: 5,
                        opacity: 0.7,
                        position: 'absolute',
                        right: 3,
                    }}
                    onPress={() => setSearch('')}>
                    <Icon
                        name="close-outline"
                        style={{
                            backgroundColor: theme.colors.bluetiful,
                            padding: 6,
                            borderRadius: 10,

                            // opacity: 0.7,
                        }}
                        size={15}
                        color={theme.colors.black}
                    />
                </TouchableOpacity>}

            </View>
        </View>
    );

    const Results = () => {

        const result = ({ item, index }: any) => (
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Detail', { selectedEvent: item })}>
                <View
                    style={{
                        marginTop: index === 0 ? 10 : 0,

                        justifyContent: 'center', alignItems: 'center'
                    }}>
                    <ImageBackground
                        source={item.image}
                        style={{
                            width: width,
                            height: width / 2 + 30,

                        }}

                        resizeMode="cover">

                        <View
                            style={{
                                alignItems: 'flex-end',
                                marginHorizontal: 15,
                                marginVertical: 15,
                            }}>
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: theme.colors.white,
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: 0.6,
                                }}>
                                <Text
                                    style={{
                                        color: theme.colors.black,
                                        fontFamily: 'Nunito-SemiBold',
                                    }}>
                                    {moment(item.startTime).format('MMM')}
                                </Text>
                                <Text
                                    style={{
                                        color: theme.colors.black,
                                        fontFamily: 'Nunito-SemiBold',
                                        fontSize: theme.sizes.h3,
                                    }}>
                                    {moment(item.startTime).format('DD')}
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 10, marginTop: 25 }}>
                            <Text
                                style={{
                                    textTransform: 'uppercase',
                                    fontFamily: 'Nunito-SemiBold',
                                    opacity: 0.6,
                                    marginVertical: 10,
                                    fontSize: theme.sizes.h5,
                                    color: theme.colors.white,
                                }}>
                                {' '}
                                {item.type}{' '}
                            </Text>
                            <Text
                                style={{
                                    fontFamily: 'Nunito-SemiBold',
                                    fontSize: theme.sizes.h4,
                                    color: theme.colors.white,
                                }}>
                                {' '}
                                {item.title}{' '}
                            </Text>
                        </View>
                        {/* </View> */}
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        );

        return (
            <View style={{ flex: 1 }}>
                <FlatList

                    showsVerticalScrollIndicator={false}
                    data={event}
                    renderItem={result}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }

    return (
        <View style={styles.screen} >

            <Header />
            <Results />


        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#F6F6F7',
        flex: 1,

    },
});

export default Recherche;
