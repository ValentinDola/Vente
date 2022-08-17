import RNBounceable from '@freakycoder/react-native-bounceable';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { selectTicket, setTicket } from '../Slices/tickets';
import { theme } from '../Constants';

const { width, height } = Dimensions.get('screen');

const Tickets = ({ navigation, route }) => {

    const tickets = useSelector(selectTicket);

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
                        <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-Bold', fontSize: 20 }} >
                            Liste des tickets
                        </Text>
                    </View>

                    <TouchableOpacity style={{
                        backgroundColor: theme.colors.grey,
                        padding: 5,
                        borderRadius: 10,
                        opacity: 0.7,
                    }} onPress={() => navigation.navigate('Explorer')}>
                        <Icon
                            name={'close-outline'}
                            size={24}
                            color={theme.colors.black}
                        />
                    </TouchableOpacity>


                </View>

            </View>
        )
    }

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
            <Header />
            <Transactions />
        </View>
    )
}

export default Tickets;