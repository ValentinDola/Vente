// PROFILE TODO
// [X] Build the Header component
// [X] Build the User detail component
// [] Build the Posts component
// [X] Build the account component

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../Constants/index';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, selectUser } from '../Slices/user';

const Profile = ({ navigation }) => {

  const user = useSelector(selectUser);

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
                fontFamily: 'Nunito-SemiBold',
                fontSize: 20,
              }}>
              {user?.nom} {user?.prenom}
            </Text>
            <Text style={{ color: '#D1D3D4', fontFamily: 'Nunito-SemiBold' }}>
              {user?.email}
            </Text>
          </View>


        </View>

      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }} >{user?.likes}</Text>
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }} >Likes</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }} >{user?.billets}</Text>
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }} >Billets</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }} >{user?.abonner}</Text>
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }} >abonnee</Text>
        </View>
      </View>
      {/* Dashboard */}
      <View style={{ marginHorizontal: 15, marginVertical: 15 }}>

      </View>
      {/* My account */}
      <View
        style={{
          marginHorizontal: 15,
          marginTop: 5,
          position: 'absolute',
          bottom: 30,
        }}>

        <TouchableOpacity style={{ marginTop: 15 }}>
          <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }}>
            Passer à un autre compte
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 10 }}>
          <Text style={{ color: 'red', fontFamily: 'Nunito-SemiBold' }}>
            Se déconnecter?
          </Text>
        </TouchableOpacity>
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
