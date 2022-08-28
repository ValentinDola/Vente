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
    TextInput,
    Dimensions,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InteractiveTextInput from 'react-native-text-input-interactive';
import { data } from '../Constants/dummy-data';
import { useForm, Controller } from 'react-hook-form';
import { theme } from '../Constants/index';
import RNBounceable from '@freakycoder/react-native-bounceable';

const { width, height } = Dimensions.get('screen');

const Recherche = ({ navigation }: any) => {
    const [event, setEvent] = useState(data);
    const [notFound] = useState([]);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            search: '',
        },
    });

    // const searchFilter = (text) => {
    //     if (text) {
    //         const newData = event.filter(item => {
    //             const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
    //             const textData = text.toUpperCase();
    //             return itemData.indexOf(textData) > -1;

    //         })
    //         setEvent(newData)
    //     } else {
    //         setEvent(data)
    //     }
    // }

    const onChangeText = (data: any) => {
        const text = data.search;
        console.log(text);

        const filtered = event.filter(item => {
            if (text === '' || item.name.toUpperCase().includes(text.toUpperCase())) {
                return item;
            }
        });
        setEvent(filtered);
        console.log(filtered.length);

        if (!filtered.length) {
            console.log('No data');
            notFound.push('one');
        }
    };

    // const event = useSelector(selectData);

    const Header = () => (
        <View>
            <View style={{ marginHorizontal: 30, marginTop: 20 }}>
                <Text
                    style={{
                        color: theme.colors.black,
                        fontFamily: 'Nunito-SemiBold',
                        fontSize: theme.sizes.h10,
                    }}>
                    Autour de toi à
                </Text>
                <Text
                    style={{
                        color: theme.colors.black,
                        fontFamily: 'Nunito-SemiBold',
                        fontSize: theme.sizes.h1,
                    }}>
                    Baguida
                </Text>
            </View>
        </View>
    );

    const Form = () => (
        <View style={{ height: 85, marginBottom: 15 }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View
                                style={[
                                    {
                                        marginHorizontal: 5,
                                        backgroundColor: 'transparent',

                                        width: '85%',
                                        borderColor: '#e8e8e8',
                                        borderBottomWidth: 5,
                                        marginVertical: 10,
                                    },
                                    { borderColor: error ? '#FF6A61' : '#e8e8e8' },
                                ]}>
                                <TextInput
                                    style={[
                                        {
                                            color: 'black',
                                            fontFamily: 'Nunito-Bold',
                                            fontSize: 40,
                                            paddingBottom: -3,
                                        },
                                    ]}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder={'Commencer la recherche'}
                                    placeholderTextColor={error ? '#FF6A61' : '#D1D3D4'}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>
                    )}
                    name="search"
                />

                <RNBounceable
                    style={{
                        marginRight: 15,
                        backgroundColor: 'transparent',
                        padding: 5,
                        borderRadius: 3,
                    }}
                    onPress={handleSubmit(onChangeText)}>
                    <Icon name={'search'} size={30} color={'black'} />
                </RNBounceable>
            </View>
        </View>
    );

    const Results = () => {
        const noResult = () => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black' }}>
                        Not
                    </Text>
                </View>
            </View>
        );
        const result = ({ item, index }: any) => (
            <RNBounceable
                style={styles.item}
                onPress={() => navigation.navigate('Detail', { selectedEvent: item })}>
                <View style={{ width: width / 1.5 }}>
                    <Text
                        style={{
                            color: theme.colors.black,
                            fontFamily: 'Nunito-SemiBold',
                            textTransform: 'uppercase',
                            letterSpacing: 1.2,
                        }}>
                        {item?.name}
                    </Text>
                    <Text
                        style={{
                            color: theme.colors.black,
                            fontFamily: 'Nunito-SemiBold',
                            textTransform: 'uppercase',
                            letterSpacing: 1.2,
                        }}>
                        {item?.type}
                    </Text>
                    <Text
                        style={{
                            color: theme.colors.black,
                            fontFamily: 'Nunito-SemiBold',
                            letterSpacing: 1.2,
                        }}>
                        {item?.location?.address?.streetAddress}
                    </Text>
                    <Text
                        style={{
                            color: theme.colors.black,
                            fontFamily: 'Nunito-SemiBold',
                            letterSpacing: 1.2,
                        }}>
                        {moment(item?.startDate).format('LL')} -{' '}
                        {moment(item?.endDate).format('LL')}
                    </Text>
                    <Text
                        style={{
                            color: theme.colors.black,
                            fontFamily: 'Nunito-SemiBold',
                            letterSpacing: 1.2,
                        }}>
                        {moment(item?.startDate).format('HH:mm')} -{' '}
                        {moment(item?.endDate).format('HH:mm')}
                    </Text>
                </View>
                <View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View
                            style={{
                                backgroundColor: '#B5FBDD',
                                height: 25,
                                width: 85,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 10,
                                borderRadius: 3,
                            }}>
                            <Text
                                style={{
                                    color: theme.colors.black,
                                    fontFamily: 'Nunito-SemiBold',
                                    textTransform: 'uppercase',
                                    fontSize: 12,
                                    letterSpacing: 2,
                                }}>
                                {item?.eventStatus}
                            </Text>
                        </View>

                        <View
                            style={{
                                backgroundColor: '#F7F272',
                                height: 25,
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 3,
                            }}>
                            <Text
                                style={{
                                    color: theme.colors.black,
                                    fontFamily: 'Nunito-SemiBold',
                                    textTransform: 'uppercase',
                                    fontSize: 12,
                                }}>
                                {item?.offers?.type}
                            </Text>
                        </View>
                    </View>
                </View>
            </RNBounceable>
        );

        return (
            <View style={{ flex: 1 }}>
                {notFound.length ? (
                    noResult()
                ) : (
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={event}
                        renderItem={result}
                        keyExtractor={item => item.id}
                    />
                )}
            </View>
        );
    };

    return (
        <View style={styles.screen}>
            <Header />
            <Form />
            <Results />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#F6F6F7',
        flex: 1,
    },
    item: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        padding: 20,

        marginTop: 15,
    },
});

export default Recherche;
