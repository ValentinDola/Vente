import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Icon from 'react-native-vector-icons/Entypo';
import { theme } from '../Constants';


const { width, height } = Dimensions.get('screen');

const Overview = ({ route }) => {

    const [amount, setAmount] = useState('');

    useEffect(() => {
        const { totalAmount } = route.params;
        setAmount(totalAmount);
    }, [])

    const Card = () => {
        return (
            <View style={{ marginHorizontal: 15, marginTop: 25, marginBottom: 15, justifyContent: 'center', alignItems: 'center' }} >
                <RNBounceable style={{ backgroundColor: '#45D09E', width: width / 1.1, height: 250, borderRadius: 5, alignItems: 'center' }} >
                    <View style={{ height: 70, width: 70, backgroundColor: '#45D09E', borderRadius: 50, justifyContent: 'center', alignItems: 'center', position: 'relative', top: -30, borderWidth: 6, borderColor: '#F6F6F7' }} >
                        <Icon name={'check'} size={25} color={'white'} />
                    </View>
                    <View style={{ marginHorizontal: 15, justifyContent: 'center', alignItems: 'center', marginTop: -25 }} >
                        <Text style={{ fontFamily: 'Nunito-Bold', color: '#2F3640', fontSize: theme.sizes.h3, textAlign: 'center' }} >
                            Nous vous remercions de votre commande!
                        </Text>

                        <Text style={{ fontFamily: 'Nunito-Bold', color: '#2F3640', fontSize: theme.sizes.h6, textAlign: 'center', marginTop: 10 }} >
                            Votre billet sera prêt en quelques secondes.
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 15 }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                <Text style={{ fontFamily: 'Nunito-Bold', color: '#2F3640', fontSize: theme.sizes.h2, textAlign: 'center', marginTop: 10, }} >
                                    {amount}cfa

                                </Text>
                                <Text style={{ fontFamily: 'Nunito-Bold', color: '#2F3640', fontSize: theme.sizes.h6 }} >
                                    Total
                                </Text>
                            </View>
                            <View style={{ width: 50 }} />
                            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                <Text style={{ fontFamily: 'Nunito-Bold', color: '#2F3640', fontSize: theme.sizes.h2, textAlign: 'center', marginTop: 10, }} >
                                    {'x1'}

                                </Text>
                                <Text style={{ fontFamily: 'Nunito-Bold', color: '#2F3640', fontSize: theme.sizes.h6 }} >
                                    Billet commandé
                                </Text>
                            </View>
                        </View>




                    </View>
                </RNBounceable>
            </View>
        )
    }

    const Rating = () => {
        return (
            <View style={{ marginHorizontal: 15, marginTop: 30 }} >

                <View style={{ marginBottom: 10 }} >
                    <Text style={{ fontFamily: 'Nunito-Bold', color: '#2F3640', fontSize: theme.sizes.h5, textAlign: 'center', marginTop: 10, }} >
                        Comment aimez-vous notre application

                    </Text>
                </View>

                <RNBounceable style={{
                    flexDirection: 'row',
                    height: 50,
                    borderRadius: 5,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 25,
                    paddingHorizontal: 10,
                    marginVertical: 10,
                    borderWidth: 2,
                    borderColor: theme.colors.black,
                }} >
                    <Text style={{ fontFamily: 'Nunito-Bold', color: '#2F3640', fontSize: theme.sizes.h6 }} >
                        Évaluez notre application
                    </Text>
                </RNBounceable>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#F6F6F7' }} >
            <Header value={'Order Overview'} />
            <Card />
            {/* <Rating /> */}
        </View>
    )
}

export default Overview