import RNBounceable from '@freakycoder/react-native-bounceable';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    TextInput,
    Platform,
    KeyboardAvoidingView,
    ScrollView,
    Modal,
    Animated,
    ActivityIndicator,
} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../Constants/index';

const { width, height } = Dimensions.get('screen');

const Networks = ['TMONEY', 'FLOOZ'];

const Payment = ({ navigation, route }: any) => {
    const [clickedId, setClickedId] = useState(0);
    const [networkId, setNetworkId] = useState(0);
    const [price, setPrice] = useState('');

    const [loading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        resetField
    } = useForm({
        defaultValues: {
            phone: '',

        },
    });

    const [selectedEvent, setSelectedEvent]: any = useState({});
    const [newData, setNewData]: any = useState({});

    useEffect(() => {
        let { selectedEvent, newData } = route.params;
        setSelectedEvent(selectedEvent);
        setNewData(newData);
    }, []);

    const handleNetwork = (item, index) => {
        setNetworkId(index);
        setNetwork(item);
    };

    const handlePrice = (item, index) => {
        setClickedId(index);
        setPrice(item);
    };

    const onSubmit = (data: any) => {
        const { phone } = data;
        const finalData = { price };
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            if (finalData) {
                console.log(finalData);
                console.log(selectedEvent)
                navigation.navigate('Checkout', { finalData, selectedEvent })

            }

        }, 3000);

    }

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
                            Mode de paiement
                        </Text>
                    </View>

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
            </View>
        );
    };

    const CoordonneesSection = () => {
        return (
            <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
                    {/* <View style={{ backgroundColor: theme.colors.black, height: 80, width: 80, borderRadius: 5 }} /> */}


                    <View style={{ marginVertical: 5, marginHorizontal: 15 }} >
                        <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black', fontSize: theme.sizes.h6, marginVertical: 5, }} >
                            {newData?.data?.prenom} {newData?.data?.nom}
                        </Text>
                        <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'grey', fontSize: theme.sizes.h9 }} >
                            {newData?.data?.email}
                        </Text>

                    </View>
                </View>

            </View>
        )
    }



    const PriceSection = () => {
        return (
            <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
                <Text
                    style={{
                        fontFamily: 'Nunito-SemiBold',
                        color: 'black',
                        fontSize: theme.sizes.h5,
                    }}>
                    Choisissez votre prix
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
                    {selectedEvent?.offers?.price?.map(
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
                                    index === clickedId
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
                                onPress={() => handlePrice(item, index)}>
                                <Text
                                    style={[
                                        index === clickedId
                                            ? {
                                                fontFamily: 'Nunito-Bold',
                                                color: 'white',
                                                fontSize: theme.sizes.h6,
                                            }
                                            : {
                                                fontFamily: 'Nunito-Bold',
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
        );
    };

    const NumberSection = () => {
        return (
            <View style={{ marginHorizontal: 15, marginTop: 15, marginBottom: 10 }}>
                <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black', fontSize: theme.sizes.h5 }}>
                    Telephone
                </Text>
                <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'red', fontSize: theme.sizes.h10, marginHorizontal: 15 }}>
                    !S'il vous plaît entrer un numéro de téléphone valide.
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
                                        borderColor: error ? 'red' : theme.colors.bluetiful,
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

                                        maxLength={8}
                                    />
                                </View>
                            </View>
                        )}
                        name="phone"
                    />
                </RNBounceable>
            </View>
        )
    }

    const DescriptionSection = () => {
        return (
            <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
                <View>
                    <Text
                        style={{
                            color: theme.colors.black,
                            fontFamily: 'Nunito-SemiBold',
                            fontSize: theme.sizes.h8,
                            letterSpacing: 0.5,
                        }}>
                        Vous choisissez d'acheter des billets chez nous et nous vous en
                        sommes reconnaissants. Nous offrons les meilleurs tarifs.
                    </Text>
                </View>
            </View>
        );
    };

    const ButtomBarSection = () => {
        return (
            <View
                style={{
                    height: 130,
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
                        margin: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <View>
                        <Icon name={'cart-outline'} color="black" size={20} />
                    </View>
                    <View
                        style={{
                            backgroundColor: theme.colors.blue,
                            borderRadius: 50,
                            height: 18,
                            width: 18,
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            bottom: 10,
                            left: 10,
                        }}>
                        <Text
                            style={{
                                color: theme.colors.white,
                                fontFamily: 'Nunito-SemiBold',
                                fontSize: theme.sizes.h10,
                            }}>
                            1
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                color: theme.colors.black,
                                fontFamily: 'Nunito-SemiBold',
                            }}>
                            Libre
                        </Text>
                    </View>
                </View>
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
                                    backgroundColor: theme.colors.bluetiful,
                                    width: width / 1.1,
                                    height: 40,
                                    marginBottom: 20,
                                }} disabled={price == '' && true} onPress={handleSubmit(onSubmit)}>
                                {loading == true ? <ActivityIndicator size="small" color="#FFFFFF" animating={loading} hidesWhenStopped={loading} /> : <Text
                                    style={{
                                        color: theme.colors.white,
                                        fontFamily: 'Nunito-Bold',

                                        fontSize: theme.sizes.h6,
                                    }}>
                                    Verifier
                                </Text>}
                            </RNBounceable>
                        </View>
                    }
                </View>
            </View>
        );
    };



    return (
        <KeyboardAvoidingView
            style={styles.screen} enabled={false}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Header />
                {/* <CoordonneesSection /> */}
                <PriceSection />
                <DescriptionSection />

            </ScrollView>

            <ButtomBarSection />
        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#F6F6F7',
        flex: 1,
    },

});

export default Payment;
