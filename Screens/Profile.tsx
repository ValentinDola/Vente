// PROFILE TODO
// [] Build the Header component
// [] Build the User detail component
// [] Build the Dashboard component
// [] Build the account component

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../Constants/index';

const Profile = () => (
  <View style={styles.screen}>
    {/* Header */}
    <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15 }} >
      <TouchableOpacity>
        <Icon name='ios-chevron-back' size={22} color='black' />
      </TouchableOpacity>
      <View>
        <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }} >Mon profile</Text>
      </View>
      <TouchableOpacity>
        <Icon name='options-outline' size={22} color='black' />
      </TouchableOpacity>
    </View>
    {/* User detail */}
    <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
      <View>
        <Image source={require('../assets/images/data/jakob-owens-qoFQxxuk3QY-unsplash.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
      </View>
      <View>
        <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold', fontSize: 20 }} >Edward Larry</Text>
        <Text style={{ color: theme.colors.grey, fontFamily: 'Nunito-SemiBold' }} >@Edward Larry</Text>
      </View>
      <TouchableOpacity>
        <Icon name='pencil-outline' size={22} color='black' />
      </TouchableOpacity>
    </View>
    {/* Dashboard */}
    {/* My account */}
  </View>
);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F6F6F7',

    flex: 1,

  },
});

export default Profile;
