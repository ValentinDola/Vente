import { View, Dimensions, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import RNBounceable from '@freakycoder/react-native-bounceable';
import QRCode from 'react-native-qrcode-svg';
import { theme } from '../Constants';

const { width, height } = Dimensions.get('screen');

const Ticket = ({ route }) => {

    const [ticket, setTicket] = useState({});

    useEffect(() => {
        const { ticket } = route.params;
        setTicket(ticket);
    }, []);


    const Detail = () => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                <RNBounceable style={{ backgroundColor: '#2F3640', width: width / 1.2, height: height / 1.3, borderRadius: 10 }} >
                    <View style={{ marginHorizontal: 15, marginVertical: 15, justifyContent: 'center', alignItems: 'center' }} >
                        <View style={{ marginVertical: 15 }} >
                            <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'white', fontSize: theme.sizes.h4, textAlign: 'center', letterSpacing: 1.2 }} >
                                {ticket?.eventName}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                            <View style={{ marginVertical: 15 }} >
                                <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'white', fontSize: theme.sizes.h7, textAlign: 'center', letterSpacing: 1.2, marginBottom: 10 }} >
                                    Heure et Date
                                </Text>
                                <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'white', fontSize: theme.sizes.h4, textAlign: 'center', letterSpacing: 1.2 }} >
                                    {ticket?.ticketSaleTime}
                                </Text>
                            </View>

                            <View style={{ marginVertical: 15 }} >
                                <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'white', fontSize: theme.sizes.h7, textAlign: 'center', letterSpacing: 1.2, marginBottom: 10 }} >
                                    Prix
                                </Text>
                                <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'white', fontSize: theme.sizes.h4, textAlign: 'center', letterSpacing: 1.2 }} >
                                    {ticket?.ticketPrice}f
                                </Text>
                            </View>
                        </View>



                        <View style={{ marginVertical: 15 }} >
                            <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'white', fontSize: theme.sizes.h7, textAlign: 'center', letterSpacing: 1.2, marginBottom: 10 }} >
                                Numéro de commande
                            </Text>
                            <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'white', fontSize: theme.sizes.h4, textAlign: 'center', letterSpacing: 1.2 }} >
                                {ticket?.ticketID}
                            </Text>
                        </View>

                        <RNBounceable style={{ backgroundColor: 'white', height: 250, width: 250, marginTop: 10, borderRadius: 3, justifyContent: 'center', alignItems: 'center' }} >
                            <QRCode
                                value={ticket?.ticketID}
                                size={200}
                                logo={require('../assets/images/splash/ticket.png')}
                                logoSize={50}
                            />
                        </RNBounceable>

                    </View>
                </RNBounceable>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#F6F6F7' }} >
            <Header value={ticket?.ticketID} />
            <Detail />
        </View>
    )
}

export default Ticket