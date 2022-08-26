import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { theme } from '../Constants'
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import RNBounceable from '@freakycoder/react-native-bounceable';

const { width, height } = Dimensions.get('screen');

const Cart = ({ navigation, route }: any) => {



    const [selectedEvent, setSelectedEvent]: any = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let { selectedEvent } = route.params;
        setSelectedEvent(selectedEvent);

    }, []);

    const inscription = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.navigate('Commande', { selectedEvent })
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
                        <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-Bold', fontSize: 16 }} >
                            {selectedEvent?.name}
                        </Text>
                    </View>

                    <TouchableOpacity style={{
                        backgroundColor: theme.colors.grey,
                        padding: 5,
                        borderRadius: 10,
                        opacity: 0.7,
                    }} onPress={() => navigation.navigate('Explorer')} >
                        <Icon
                            name={'close-outline'}
                            size={24}
                            color={theme.colors.black}
                        />
                    </TouchableOpacity>


                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 15 }} >
                    <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }} >
                        {moment(selectedEvent?.startDate).format('LLL')} - {moment(selectedEvent?.endDate).format('LLL')}
                    </Text>
                </View>
            </View>
        )
    }

    const Information = () => {
        return (
            <View style={{ marginHorizontal: 15, marginTop: 50 }} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <View>
                        <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-Bold', fontSize: theme.sizes.h3 }} >
                            Admission générale
                        </Text>
                        <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold', fontSize: theme.sizes.h6 }} >
                            Libre
                        </Text>
                    </View>

                    <TouchableOpacity style={{ backgroundColor: theme.colors.greyblack, height: 30, width: 50, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10, borderRadius: 3, borderWidth: 3, borderColor: theme.colors.blue }} >
                        <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold', fontSize: theme.sizes.h6 }}>
                            1
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10 }} >
                    <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold', fontSize: theme.sizes.h8 }} >
                        Les ventes se terminent dans 10 heures.
                    </Text>
                </View>
            </View>
        )
    }

    const Outro = () => (
        <View style={{ margin: 15 }} >
            <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }} >Realise par {<Text style={{ fontFamily: 'Nunito-Bold' }} >Fast</Text>} </Text>
        </View>
    )

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
                <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <View  >
                        <Icon name={'cart-outline'} color='black' size={20} />
                    </View>
                    <View style={{ backgroundColor: theme.colors.blue, borderRadius: 50, height: 18, width: 18, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 10, left: 10 }} >
                        <Text style={{ color: theme.colors.white, fontFamily: 'Nunito-SemiBold', fontSize: theme.sizes.h10 }} >1</Text>
                    </View>
                    <View>
                        <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }} >
                            Libre
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        marginHorizontal: 20,
                    }}>
                    {
                        <View style={{
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
                                    marginBottom: 20
                                }} onPress={() => inscription()} >
                                {loading == true ? <ActivityIndicator size="small" color="#FFFFFF" animating={loading} hidesWhenStopped={loading} /> : <Text
                                    style={{
                                        color: theme.colors.white,
                                        fontFamily: 'Nunito-Bold',

                                        fontSize: theme.sizes.h6,
                                    }}>
                                    S'inscrire
                                </Text>}

                            </RNBounceable>

                        </View>
                    }
                </View>
            </View>
        );
    };


    return (
        <View style={styles.screen} >
            <Header />
            <Information />
            <Outro />
            <ButtomBarSection />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F6F6F7',
    },

});

export default Cart;