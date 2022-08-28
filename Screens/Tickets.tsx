import RNBounceable from '@freakycoder/react-native-bounceable';
import React, { useState } from 'react';
import { ScrollView, Text, View, Dimensions, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { selectTicket, setTicket } from '../Slices/tickets';
import Header from '../Components/Header';

const { width, height } = Dimensions.get('screen');

const Tickets = () => {

    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const tickets = useSelector(selectTicket);

    const toTicket = (ticket: { color: any; icon: string; ticketID: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; eventName: string | any[]; ticketPrice: string | any[]; ticketSaleTime: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (



        navigation.navigate('Ticket', { ticket })


    )

    const Transactions = () => {
        const mappedData = (item: any) =>
            item.map((ticket: { color: any; icon: string; ticketID: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; eventName: string | any[]; ticketPrice: string | any[]; ticketSaleTime: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                <View style={{ marginTop: 15 }} key={index}>
                    <RNBounceable
                        style={{
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                        onPress={() => toTicket(ticket)}
                    >
                        <View
                            style={{
                                backgroundColor: ticket?.color,
                                height: 60,
                                width: 60,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            {<Icon name={ticket?.icon} color={'white'} size={30} />}

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
                                    {ticket?.ticketID}
                                </Text>
                                <Text style={{ color: 'grey', fontFamily: 'Nunito-SemiBold' }}>
                                    {ticket?.eventName?.slice(0, 25).concat('...')}
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: 'black', fontFamily: 'Nunito-SemiBold' }}>
                                    {ticket?.ticketPrice?.concat('f')}
                                </Text>
                                <Text style={{ color: 'grey', fontFamily: 'Nunito-SemiBold' }}>
                                    {ticket?.ticketSaleTime}
                                </Text>
                            </View>
                        </View>
                    </RNBounceable>
                </View>
            ));

        return (
            <View style={{ marginHorizontal: 15, marginTop: 15 }}>

                <View>
                    {tickets?.length > 0 ? (
                        <ScrollView
                            style={{ height }}>
                            {mappedData(tickets)}
                        </ScrollView>
                    ) : (
                        <View
                            style={{
                                height,
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

    return (
        <View style={{ flex: 1, backgroundColor: '#F6F6F7' }} >
            <Header value={'Liste des tickets'} />
            <Transactions />
        </View>
    )
}

export default Tickets;