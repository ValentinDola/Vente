import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    Dimensions,
    Modal,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../Constants';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { Controller, useForm } from 'react-hook-form';
import SwitchSelector from 'react-native-switch-selector';

const { width, height } = Dimensions.get('screen');

const Networks = ['FLOOZ', 'TMONEY'];

const Retrait = ({ navigation, route }) => {
    const [network, setNetwork] = useState('');
    const [networkId, setNetworkId] = useState(0);
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({});

    const {
        control,
        handleSubmit,
        formState: { errors },
        resetField,
    } = useForm({
        defaultValues: {
            phone: '',
            montant: '',
        },
    });

    const handleNetwork = (item, index) => {
        setNetworkId(index);
        setNetwork(item);
    };

    const onRetraitSubmit = (data: any) => {
        const { phone, montant } = data;
        const newData = { phone, montant, network };
        if (newData) {
            console.log(newData);
            setData(newData);
            setModal(true);
        } else {
            return null;
        }
    };

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
                            Retrait
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            backgroundColor: theme.colors.grey,
                            padding: 5,
                            borderRadius: 10,
                            opacity: 0.7,
                        }}
                        onPress={() => navigation.navigate('Explorer')}>
                        <Icon name={'close-outline'} size={24} color={theme.colors.black} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const Actions = () => {
        return (
            <View>
                <View style={{ marginHorizontal: 15, marginTop: 15, marginBottom: 10 }}>
                    <Text
                        style={{
                            fontFamily: 'Nunito-SemiBold',
                            color: 'black',
                            fontSize: theme.sizes.h6,
                        }}>
                        Telephone
                    </Text>
                    <RNBounceable>
                        <Text
                            style={{
                                fontFamily: 'Nunito-SemiBold',
                                color: 'black',
                                position: 'absolute',
                                top: 26,
                                left: 35,
                            }}>
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
                                            maxLength={8}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeholder={'Telephone'}
                                            placeholderTextColor={'#D1D3D4'}
                                            underlineColorAndroid="transparent"
                                            keyboardType="numeric"
                                        />
                                    </View>
                                </View>
                            )}
                            name="phone"
                        />
                    </RNBounceable>
                </View>

                <View style={{ marginHorizontal: 15 }}>
                    <Text
                        style={{
                            fontFamily: 'Nunito-SemiBold',
                            color: 'black',
                            fontSize: theme.sizes.h6,
                        }}>
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
                                            }}>
                                            <TextInput
                                                style={{
                                                    color: 'black',
                                                    fontFamily: 'Nunito-Bold',
                                                    fontSize: 20,

                                                    textAlign: 'center',
                                                }}
                                                maxLength={8}
                                                onBlur={onBlur}
                                                onChangeText={onChange}
                                                value={value}
                                                placeholder={'FCFA'}
                                                placeholderTextColor={error ? 'red' : '#D1D3D4'}
                                                underlineColorAndroid="transparent"
                                                keyboardType="numeric"
                                            />
                                        </View>
                                    </View>
                                )}
                                name="montant"
                            />
                        </RNBounceable>
                    </View>
                </View>
                <View style={{ marginVertical: 20, marginHorizontal: 15 }}>
                    <Text
                        style={{
                            fontFamily: 'Nunito-SemiBold',
                            color: 'black',
                            fontSize: theme.sizes.h6,
                        }}>
                        Réseau
                    </Text>
                    <View
                        style={{
                            marginVertical: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                            }}>
                            {Networks?.map(
                                (
                                    item:
                                        | boolean
                                        | React.ReactChild
                                        | React.ReactFragment
                                        | React.ReactPortal
                                        | null
                                        | undefined,
                                    index: React.Key | null | undefined,
                                ) => (
                                    <RNBounceable
                                        key={index}
                                        style={[
                                            index === networkId
                                                ? {
                                                    marginVertical: 15,
                                                    backgroundColor: theme.colors.bluetiful,
                                                    height: 40,
                                                    width: 90,
                                                    borderRadius: 3,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }
                                                : {
                                                    marginVertical: 15,
                                                    backgroundColor: theme.colors.white,
                                                    height: 40,
                                                    width: 90,
                                                    borderRadius: 3,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                },
                                        ]}
                                        onPress={() => handleNetwork(item, index)}>
                                        <Text
                                            style={[
                                                index === networkId
                                                    ? {
                                                        fontFamily: 'Nunito-SemiBold',
                                                        color: 'white',
                                                        fontSize: theme.sizes.h6,
                                                    }
                                                    : {
                                                        fontFamily: 'Nunito-SemiBold',
                                                        color: 'black',
                                                        fontSize: theme.sizes.h7,
                                                    },
                                            ]}>
                                            {item}
                                        </Text>
                                    </RNBounceable>
                                ),
                            )}
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    const BottomButtons = () => {
        return (
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
                                }}>
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
                                disabled={network == '' ? true : false}
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
        );
    };

    const ModalSection = () => (
        <Modal animated animationType="slide" visible={modal} transparent>
            <View style={styles.MContainer}>
                <Animated.View style={styles.modalContainer}>
                    <View style={{ marginHorizontal: 15, marginTop: 15 }}>
                        <Text
                            style={{
                                color: theme.colors.black,
                                fontFamily: 'Nunito-Bold',
                                fontSize: 20,
                            }}>
                            Confirmation
                        </Text>
                        <View style={{ marginVertical: 15 }}>
                            <Text
                                style={{
                                    color: theme.colors.black,
                                    fontFamily: 'Nunito-Bold',
                                }}>
                                {`${data?.phone} Vous avez demandé un retrait de ${data?.montant} du réseau ${data?.network} de votre portefeuille. Appuyez sur Confirmer.`}
                            </Text>
                        </View>
                        <View
                            style={{
                                marginTop: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <RNBounceable
                                style={{
                                    borderRadius: 3,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: theme.colors.bluetiful,
                                    width: width / 1.5,
                                    height: 40,
                                }}
                                onPress={() => (
                                    setModal(false),
                                    navigation.navigate('Portefeuille')

                                )}>

                                <Text
                                    style={{
                                        color: theme.colors.white,
                                        fontFamily: 'Nunito-Bold',

                                        fontSize: theme.sizes.h6,
                                    }}>
                                    Je Confirme
                                </Text>
                            </RNBounceable>
                        </View>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled={false}
            style={styles.screen}>
            <Header />

            <Actions />
            <BottomButtons />
            <ModalSection />
        </KeyboardAvoidingView>
    );
};

export default Retrait;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#F6F6F7',
        flex: 1,
    },
    MContainer: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: 'white',
        paddingTop: 12,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        height: height / 3,
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

{
    /* <Modal
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
                                name="montant"
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
    </Modal> */
}
