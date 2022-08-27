// PROFILE TODO
// [X] Build the Header component
// [X] Build the User detail component
// [] Build the Posts component
// [X] Build the account component

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../Constants/index';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, selectUser } from '../Slices/user';
import { useNavigation } from '@react-navigation/native';
import { selectTicket } from '../Slices/tickets';
import RNBounceable from '@freakycoder/react-native-bounceable';

const { width, height } = Dimensions.get('screen');

const Profile = () => {

  const navigation = useNavigation();

  const user = useSelector(selectUser);

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
    <View style={styles.screen}>

      {/* User detail */}
      <View
        style={{
          marginTop: 55,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Image
            source={user?.image}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </View>
        <View style={{ marginVertical: 15 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-Bold',
                fontSize: 20,
              }}>
              {user?.nom} {user?.prenom}
            </Text>
            <Text style={{ color: '#D1D3D4', fontFamily: 'Nunito-Bold' }}>
              {user?.email}
            </Text>
          </View>


        </View>

      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-Bold' }} >{user?.likes}</Text>
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-Bold' }} >Likes</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-Bold' }} >{user?.billets}</Text>
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-Bold' }} >Billets</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-Bold' }} >{user?.abonner}</Text>
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-Bold' }} >abonnee</Text>
        </View>
      </View>
      {/* Dashboard */}
      {/* <ScrollView style={{ height: height / 2 }} >
        <Transactions />
      </ScrollView> */}


      {/* My account */}
      <View
        style={{
          backgroundColor: theme.colors.white,
          height: 60,
          width,
          marginHorizontal: 15,
          marginTop: 5,
          position: 'absolute',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <RNBounceable style={{ marginTop: 10 }}>
          <Text style={{ color: 'red', fontFamily: 'Nunito-Bold', fontSize: theme.sizes.h6 }}>
            Se déconnecter?
          </Text>
        </RNBounceable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F6F6F7',

    flex: 1,
  },
});

export default Profile;
