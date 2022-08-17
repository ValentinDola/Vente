import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ScrollView,
    Alert,
    Modal,
    Animated,
    PanResponder,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../Constants';
import { useDispatch, useSelector } from 'react-redux';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { Controller, useForm } from 'react-hook-form';
import SwitchSelector from "react-native-switch-selector";
import { transactions } from '../Constants/dummy-data';

const { width, height } = Dimensions.get('screen');

const Portefeuille = ({ navigation, route }) => {


    const [rechargeModal, setRechargeModal] = useState(false);
    const [retraitModal, setRetraitModal] = useState(false);
    const [rechargeNetwork, setRechargeNetwork] = useState('');
    const [retraitNetwork, setRetraitNetwork] = useState('');
    const [panY] = useState(new Animated.Value(Dimensions.get('screen').height));

    const {
        control,
        handleSubmit,
        formState: { errors },
        resetField
    } = useForm({
        defaultValues: {
            rechargePhone: '',
            rechargeMontant: '',
            retraitPhone: '',
            retraitMontant: '',
        },
    });



    const top = panY.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0, 0, 1],
    });

    const _resetPositionAnim = Animated.timing(panY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
    });

    const _closeAnim = Animated.timing(panY, {
        toValue: Dimensions.get('screen').height,
        duration: 500,
        useNativeDriver: false,
    });

    const onRechargeSubmit = (data: any) => {
        const { rechargePhone, rechargeMontant } = data;
        const newData = { rechargePhone, rechargeMontant, rechargeNetwork };
        if (newData) {
            console.log(newData);
            _handleRechargeDismiss()

        } else {
            return null;
        }
    }

    const onRetraitSubmit = (data: any) => {
        const { retraitPhone, retraitMontant } = data;
        const newData = { retraitPhone, retraitMontant, retraitNetwork };
        if (newData) {
            console.log(newData);
            _handleRetraitDismiss()

        } else {
            return null;
        }
    }

    // const _panResponders = PanResponder.create({
    //     onStartShouldSetPanResponder: () => true,
    //     onMoveShouldSetPanResponder: () => false,
    //     onPanResponderMove: Animated.event([
    //         null, { dy: panY }
    //     ]),
    //     onPanResponderRelease: (e, gs) => {
    //         if (gs.dy > 0 && gs.vy > 2) {
    //             return _closeAnim.start(() => _handleDismiss());
    //         }
    //         return _resetPositionAnim.start();
    //     },
    // })

    // useEffect((prevState: boolean) => {
    //     if (prevState !== rechargeModal && rechargeModal) {
    //         _resetPositionAnim.start();
    //     }
    // }, [])

    const _handleRechargeDismiss = () => (
        setRechargeModal(false),
        resetField("rechargeMontant"),
        resetField("rechargePhone")
    );

    const _handleRetraitDismiss = () => (
        setRetraitModal(false),
        resetField("retraitMontant"),
        resetField("retraitPhone")
    );

    const Header = () => {
        return (
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginVertical: 20,
                        marginHorizontal: 15,
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            backgroundColor: theme.colors.grey,
                            padding: 5,
                            borderRadius: 10,
                            opacity: 0.7,
                        }}>
                        <Icon
                            name="ios-chevron-back-outline"
                            size={24}
                            color={theme.colors.black}
                        />
                    </TouchableOpacity>

                    <View>
                        <Text
                            style={{
                                color: theme.colors.black,
                                fontFamily: 'Nunito-Bold',
                                fontSize: 20,
                            }}>
                            Portefeuille
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            backgroundColor: theme.colors.grey,
                            padding: 5,
                            borderRadius: 10,
                            opacity: 0.7,
                        }}>
                        <Icon name={'close-outline'} size={24} color={theme.colors.black} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const TotalAmount = () => {
        return (
            <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
                <View
                    style={{
                        backgroundColor: '#fff0c5',
                        height: 140,
                        width: width / 1.1,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}>
                    <View style={{ marginHorizontal: 25 }}>
                        <Text
                            style={{
                                color: 'black',
                                fontFamily: 'Nunito-SemiBold',
                                letterSpacing: 1.2,
                            }}>
                            Portefeuille (FCFA)
                        </Text>
                        <View style={{ marginTop: 15 }}>
                            <Text
                                style={{
                                    color: 'black',
                                    fontFamily: 'Nunito-SemiBold',
                                    fontSize: 40,
                                    letterSpacing: 1.4,
                                }}>
                                <Text style={{ fontSize: 18 }}>Total</Text> 18000
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    const ActionButtons = () => {
        return (
            <View
                style={{
                    marginHorizontal: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <RNBounceable
                    style={{
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: theme.colors.grey,
                        width: 150,
                        height: 45,
                    }}
                    onPress={() => setRechargeModal(true)}>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black' }}>
                        Recharge
                    </Text>
                    <Modal
                        animated
                        animationType="slide"
                        visible={rechargeModal}
                        transparent
                    >

                        <KeyboardAvoidingView
                            style={[
                                styles.MContainer
                            ]} enabled={false}
                            behavior={Platform.OS === "ios" ? "padding" : "height"} >
                            <Animated.View style={[styles.modalContainer]}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginVertical: 5,
                                        marginHorizontal: 15,
                                    }}>
                                    <View>
                                        <Text
                                            style={{
                                                color: theme.colors.black,
                                                fontFamily: 'Nunito-Bold',
                                                fontSize: 20,
                                            }}>
                                            Recharger
                                        </Text>
                                    </View>

                                    <RNBounceable
                                        style={{
                                            backgroundColor: theme.colors.grey,
                                            padding: 5,
                                            borderRadius: 10,
                                            opacity: 0.7,
                                        }}
                                        onPress={() => _handleRechargeDismiss()}>
                                        <Icon
                                            name={'close-outline'}
                                            size={24}
                                            color={theme.colors.black}
                                        />
                                    </RNBounceable>
                                </View>
                                <View style={{ marginHorizontal: 15, marginTop: 15, marginBottom: 10 }}>
                                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black', fontSize: theme.sizes.h6 }}>
                                        Telephone
                                    </Text>
                                    <RNBounceable>
                                        <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black', position: 'absolute', top: 26, left: 35 }} >
                                            +228
                                        </Text>
                                        <Controller
                                            control={control}
                                            rules={{
                                                required: true,
                                            }}
                                            render={({
                                                field: { onChange, onBlur, value },
                                                fieldState: { error },
                                            }) => (
                                                <View
                                                    style={{
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                    <View
                                                        style={{
                                                            marginHorizontal: 5,
                                                            marginVertical: 10,
                                                            backgroundColor: 'transparent',
                                                            borderRadius: 3,
                                                            paddingLeft: 50,
                                                            width: '85%',
                                                            borderWidth: 2,
                                                            borderColor: theme.colors.blue,
                                                        }}>
                                                        <TextInput
                                                            style={{
                                                                color: 'black',
                                                                fontFamily: 'Nunito-Bold',
                                                                fontSize: 20,
                                                            }}
                                                            onBlur={onBlur}
                                                            onChangeText={onChange}
                                                            value={value}
                                                            placeholder={'Telephone'}
                                                            placeholderTextColor={'#D1D3D4'}
                                                            underlineColorAndroid='transparent'
                                                            keyboardType='numeric'
                                                        />
                                                    </View>
                                                </View>
                                            )}
                                            name="rechargePhone"
                                        />
                                    </RNBounceable>
                                </View>

                                <View style={{ marginHorizontal: 15 }} >
                                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black', fontSize: theme.sizes.h6 }}>
                                        Montant
                                    </Text>
                                    <View>

                                        <RNBounceable>
                                            <Controller
                                                control={control}
                                                rules={{
                                                    required: true,
                                                }}
                                                render={({
                                                    field: { onChange, onBlur, value },
                                                    fieldState: { error },
                                                }) => (
                                                    <View
                                                        style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                        }}>
                                                        <View
                                                            style={{
                                                                marginHorizontal: 5,
                                                                marginVertical: 10,
                                                                backgroundColor: theme.colors.grey,
                                                                borderRadius: 3,
                                                                width: '85%',
                                                                borderColor: '#e8e8e8',


                                                            }}>
                                                            <TextInput
                                                                style={{
                                                                    color: 'black',
                                                                    fontFamily: 'Nunito-Bold',
                                                                    fontSize: 20,

                                                                    textAlign: 'center',
                                                                }}
                                                                onBlur={onBlur}
                                                                onChangeText={onChange}
                                                                value={value}
                                                                placeholder={'FCFA'}
                                                                placeholderTextColor={'#D1D3D4'}
                                                                underlineColorAndroid='transparent'
                                                                keyboardType='numeric'
                                                            />
                                                        </View>
                                                    </View>
                                                )}
                                                name="rechargeMontant"
                                            />
                                        </RNBounceable>
                                    </View>
                                </View>
                                <View style={{ marginTop: 20, marginHorizontal: 15 }} >
                                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black', fontSize: theme.sizes.h6 }}>
                                        Réseau
                                    </Text>
                                    <View style={{ marginVertical: 10, justifyContent: 'center', alignItems: 'center' }} >
                                        <SwitchSelector
                                            initial={1}
                                            onPress={(value: any) => setRechargeNetwork(value)}
                                            textColor={'#000'} //'#7a44cf'
                                            selectedColor={'white'}
                                            buttonColor={theme.colors.bluetiful}
                                            borderColor={theme.colors.blue}
                                            borderRadius={5}
                                            borderWidth={2}
                                            height={40}
                                            hasPadding
                                            textStyle={{ fontFamily: 'Nunito-Bold' }}
                                            style={{ width: 250, height: 40 }}
                                            options={[
                                                { label: "FLOOZ", value: "FLOOZ", }, //images.feminino = require('./path_to/assets/img/feminino.png')
                                                { label: "TMONEY", value: "TMONEY", } //images.masculino = require('./path_to/assets/img/masculino.png')
                                            ]}
                                            testID="network-switch-selector"
                                            accessibilityLabel="network-switch-selector"
                                        />
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 100,
                                        width,
                                        borderRadius: 10,
                                        opacity: 0.9,
                                        position: 'absolute',
                                        backgroundColor: 'transparent',
                                        bottom: 0,
                                        justifyContent: 'center',
                                    }}>
                                    <View
                                        style={{
                                            marginHorizontal: 20,
                                        }}>
                                        {
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}>
                                                <RNBounceable
                                                    style={{
                                                        borderRadius: 3,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: theme.colors.bluetiful,
                                                        width: width / 3,
                                                        height: 40,
                                                    }}
                                                    onPress={() => setRechargeModal(false)}>
                                                    <Text
                                                        style={{
                                                            color: theme.colors.white,
                                                            fontFamily: 'Nunito-Bold',

                                                            fontSize: theme.sizes.h6,
                                                        }}>
                                                        Annuler
                                                    </Text>
                                                </RNBounceable>
                                                <RNBounceable
                                                    style={{
                                                        borderRadius: 3,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: theme.colors.blue,
                                                        width: width / 2,
                                                        height: 40,
                                                    }}

                                                    onPress={handleSubmit(onRechargeSubmit)}>
                                                    <Text
                                                        style={{
                                                            color: theme.colors.white,
                                                            fontFamily: 'Nunito-Bold',

                                                            fontSize: theme.sizes.h6,
                                                        }}>
                                                        Recharger
                                                    </Text>
                                                </RNBounceable>
                                            </View>
                                        }
                                    </View>
                                </View>
                            </Animated.View>
                        </KeyboardAvoidingView>
                    </Modal>
                </RNBounceable>

                <RNBounceable
                    style={{
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: theme.colors.grey,
                        width: 150,
                        height: 45,
                    }} onPress={() => setRetraitModal(true)}>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black' }}>
                        Retrait
                    </Text>
                    <Modal
                        animated
                        animationType="slide"
                        visible={retraitModal}
                        transparent
                    >

                        <KeyboardAvoidingView
                            style={[
                                styles.MContainer
                            ]} enabled={false}
                            behavior={Platform.OS === "ios" ? "padding" : "height"} >
                            <Animated.View style={[styles.modalContainer]}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginVertical: 5,
                                        marginHorizontal: 15,
                                    }}>
                                    <View>
                                        <Text
                                            style={{
                                                color: theme.colors.black,
                                                fontFamily: 'Nunito-Bold',
                                                fontSize: 20,
                                            }}>
                                            Retrait
                                        </Text>
                                    </View>

                                    <RNBounceable
                                        style={{
                                            backgroundColor: theme.colors.grey,
                                            padding: 5,
                                            borderRadius: 10,
                                            opacity: 0.7,
                                        }}
                                        onPress={() => _handleRetraitDismiss()}>
                                        <Icon
                                            name={'close-outline'}
                                            size={24}
                                            color={theme.colors.black}
                                        />
                                    </RNBounceable>
                                </View>
                                <View style={{ marginHorizontal: 15, marginTop: 15, marginBottom: 10 }}>
                                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black', fontSize: theme.sizes.h6 }}>
                                        Telephone
                                    </Text>
                                    <RNBounceable>
                                        <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black', position: 'absolute', top: 26, left: 35 }} >
                                            +228
                                        </Text>
                                        <Controller
                                            control={control}
                                            rules={{
                                                required: true,
                                            }}
                                            render={({
                                                field: { onChange, onBlur, value },
                                                fieldState: { error },
                                            }) => (
                                                <View
                                                    style={{
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                    <View
                                                        style={{
                                                            marginHorizontal: 5,
                                                            marginVertical: 10,
                                                            backgroundColor: 'transparent',
                                                            borderRadius: 3,
                                                            paddingLeft: 50,
                                                            width: '85%',
                                                            borderWidth: 2,
                                                            borderColor: theme.colors.blue,
                                                        }}>
                                                        <TextInput
                                                            style={{
                                                                color: 'black',
                                                                fontFamily: 'Nunito-Bold',
                                                                fontSize: 20,
                                                            }}
                                                            onBlur={onBlur}
                                                            onChangeText={onChange}
                                                            value={value}
                                                            placeholder={'Telephone'}
                                                            placeholderTextColor={'#D1D3D4'}
                                                            underlineColorAndroid='transparent'
                                                            keyboardType='numeric'
                                                        />
                                                    </View>
                                                </View>
                                            )}
                                            name="retraitPhone"
                                        />
                                    </RNBounceable>
                                </View>

                                <View style={{ marginHorizontal: 15 }} >
                                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black', fontSize: theme.sizes.h6 }}>
                                        Montant
                                    </Text>
                                    <View>

                                        <RNBounceable>
                                            <Controller
                                                control={control}
                                                rules={{
                                                    required: true,
                                                }}
                                                render={({
                                                    field: { onChange, onBlur, value },
                                                    fieldState: { error },
                                                }) => (
                                                    <View
                                                        style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                        }}>
                                                        <View
                                                            style={{
                                                                marginHorizontal: 5,
                                                                marginVertical: 10,
                                                                backgroundColor: theme.colors.grey,
                                                                borderRadius: 3,
                                                                width: '85%',
                                                                borderColor: '#e8e8e8',


                                                            }}>
                                                            <TextInput
                                                                style={{
                                                                    color: 'black',
                                                                    fontFamily: 'Nunito-Bold',
                                                                    fontSize: 20,

                                                                    textAlign: 'center',
                                                                }}
                                                                onBlur={onBlur}
                                                                onChangeText={onChange}
                                                                value={value}
                                                                placeholder={'FCFA'}
                                                                placeholderTextColor={'#D1D3D4'}
                                                                underlineColorAndroid='transparent'
                                                                keyboardType='numeric'
                                                            />
                                                        </View>
                                                    </View>
                                                )}
                                                name="retraitMontant"
                                            />
                                        </RNBounceable>
                                    </View>
                                </View>
                                <View style={{ marginVertical: 20, marginHorizontal: 15 }} >
                                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black', fontSize: theme.sizes.h6 }}>
                                        Réseau
                                    </Text>
                                    <View style={{ marginVertical: 10, justifyContent: 'center', alignItems: 'center' }} >
                                        <SwitchSelector
                                            initial={1}
                                            onPress={(value: any) => setRetraitNetwork(value)}
                                            textColor={'#000'} //'#7a44cf'
                                            selectedColor={'white'}
                                            buttonColor={theme.colors.bluetiful}
                                            borderColor={theme.colors.blue}
                                            borderRadius={5}
                                            borderWidth={2}
                                            height={40}
                                            hasPadding
                                            textStyle={{ fontFamily: 'Nunito-Bold' }}
                                            style={{ width: 250, height: 40 }}
                                            options={[
                                                { label: "FLOOZ", value: "FLOOZ", }, //images.feminino = require('./path_to/assets/img/feminino.png')
                                                { label: "TMONEY", value: "TMONEY", } //images.masculino = require('./path_to/assets/img/masculino.png')
                                            ]}
                                            testID="network-switch-selector"
                                            accessibilityLabel="network-switch-selector"
                                        />
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 100,
                                        width,
                                        borderRadius: 10,
                                        opacity: 0.9,
                                        position: 'absolute',
                                        backgroundColor: 'transparent',
                                        bottom: 0,
                                        justifyContent: 'center',
                                    }}>
                                    <View
                                        style={{
                                            marginHorizontal: 20,
                                        }}>
                                        {
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}>
                                                <RNBounceable
                                                    style={{
                                                        borderRadius: 3,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: theme.colors.bluetiful,
                                                        width: width / 3,
                                                        height: 40,
                                                    }}
                                                    onPress={() => setRetraitModal(false)}>
                                                    <Text
                                                        style={{
                                                            color: theme.colors.white,
                                                            fontFamily: 'Nunito-Bold',

                                                            fontSize: theme.sizes.h6,
                                                        }}>
                                                        Annuler
                                                    </Text>
                                                </RNBounceable>
                                                <RNBounceable
                                                    style={{
                                                        borderRadius: 3,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: theme.colors.blue,
                                                        width: width / 2,
                                                        height: 40,
                                                    }}

                                                    onPress={handleSubmit(onRetraitSubmit)}>
                                                    <Text
                                                        style={{
                                                            color: theme.colors.white,
                                                            fontFamily: 'Nunito-Bold',

                                                            fontSize: theme.sizes.h6,
                                                        }}>
                                                        Retrait
                                                    </Text>
                                                </RNBounceable>
                                            </View>
                                        }
                                    </View>
                                </View>
                            </Animated.View>
                        </KeyboardAvoidingView>
                    </Modal>
                </RNBounceable>
            </View>
        );
    };

    const Transactions = () => {
        const mappedData = (item: any) =>
            item.map((ticket, index) => (
                <View style={{ marginTop: 15 }} key={index}>
                    <RNBounceable
                        style={{
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                        onPress={() => console.log(ticket)}>
                        <View
                            style={{
                                backgroundColor: ticket?.color,
                                height: 60,
                                width: 60,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Icon name={ticket?.icon} color={'white'} size={30} />
                        </View>
                        <View
                            style={{
                                width: width - 100,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <View>
                                <Text style={{ color: 'black', fontFamily: 'Nunito-SemiBold' }}>
                                    {ticket?.actionID}
                                </Text>
                                <Text style={{ color: 'grey', fontFamily: 'Nunito-SemiBold' }}>
                                    {ticket?.action}
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: 'black', fontFamily: 'Nunito-SemiBold' }}>
                                    {ticket?.price?.concat('f')}
                                </Text>
                                <Text style={{ color: 'grey', fontFamily: 'Nunito-SemiBold' }}>
                                    {ticket?.actionTime}
                                </Text>
                            </View>
                        </View>
                    </RNBounceable>
                </View>
            ));

        return (
            <View style={{ marginHorizontal: 15, marginTop: 25 }}>
                <View>
                    <Text
                        style={{
                            fontFamily: 'Nunito-Bold',
                            color: 'black',
                            fontSize: theme.sizes.h5,
                        }}>
                        Transactions
                    </Text>
                </View>
                <View>
                    {transactions?.length > 0 ? (
                        <ScrollView showsVerticalScrollIndicator={false}
                            style={{ height: height - 500, marginTop: 20, marginBottom: 20 }}>
                            {mappedData(transactions)}
                        </ScrollView>
                    ) : (
                        <View
                            style={{
                                height: height - 500,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Icon name="ios-earth-outline" color="black" size={150} />
                        </View>
                    )}
                </View>
            </View>
        );
    };

    const ButtomBarSection = () => {
        return (
            <View
                style={{
                    height: 60,
                    width,
                    borderRadius: 10,
                    opacity: 0.9,
                    position: 'absolute',
                    backgroundColor: theme.colors.white,
                    bottom: 0,
                    justifyContent: 'center',
                }}>
                <View
                    style={{
                        marginHorizontal: 20,
                    }}>
                    {
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <RNBounceable
                                style={{
                                    borderRadius: 3,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: theme.colors.black,
                                    width: width / 1.1,
                                    height: 40,
                                }}
                                onPress={() => navigation.navigate('Tickets')}>
                                <Text
                                    style={{
                                        color: theme.colors.white,
                                        fontFamily: 'Nunito-Bold',

                                        fontSize: theme.sizes.h6,
                                    }}>
                                    {transactions?.length > 0
                                        ? `Vous avez acheté ${transactions?.length} billets.`
                                        : `Vous n'avez pas acheté de billets.`}
                                </Text>
                            </RNBounceable>
                        </View>
                    }
                </View>
            </View>
        );
    };

    return (

        <View style={styles.screen}>
            <Header />
            <TotalAmount />
            <ActionButtons />
            <Transactions />
            <ButtomBarSection />
        </View>


    );
};

export default Portefeuille;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F6F6F7',
    },
    MContainer: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: 'white',
        paddingTop: 12,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: height / 1.3,
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
});
