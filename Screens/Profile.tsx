// PROFILE TODO
// [X] Build the Header component
// [X] Build the User detail component
// [] Build the Posts component
// [X] Build the account component

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../Constants/index';

const Profile = ({ navigation }) => (
  <View style={styles.screen}>
    {/* Header */}
    <View
      style={{
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5,
      }}>
      <TouchableOpacity
        style={{
          height: 35,
          width: 35,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <Icon name="ios-chevron-back" size={22} color="black" />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            color: theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            // fontSize: 20,
          }}>
          Profile
        </Text>
      </View>
      <TouchableOpacity
        style={{
          height: 35,
          width: 35,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => console.log('Scan')}>
        <Icon name="scan-outline" size={22} color="black" />
      </TouchableOpacity>
    </View>
    {/* User detail */}
    <View
      style={{
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <View>
        <Image
          source={require('../assets/images/data/jakob-owens-qoFQxxuk3QY-unsplash.jpg')}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </View>
      <View>
        <Text
          style={{
            color: theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            fontSize: 20,
          }}>
          Edward Larry
        </Text>
        <Text style={{ color: theme.colors.grey, fontFamily: 'Nunito-SemiBold' }}>
          @Edward Larry
        </Text>
      </View>
      <TouchableOpacity>
        <Icon name="pencil-outline" size={22} color="black" />
      </TouchableOpacity>
    </View>
    {/* Dashboard */}
    <View style={{ flex: 0.4, marginHorizontal: 15 }}>
      <Text
        style={{
          color: theme.colors.grey,
          fontFamily: 'Nunito-SemiBold',
          fontSize: 16,
        }}>
        Dashboard
      </Text>
    </View>
    {/* My account */}
    <View
      style={{
        marginHorizontal: 15,
        marginTop: 5,
        position: 'absolute',
        bottom: 20,
      }}>
      <Text
        style={{
          color: theme.colors.grey,
          fontFamily: 'Nunito-SemiBold',
          fontSize: 16,
        }}>
        Mon Compte
      </Text>
      <TouchableOpacity style={{ marginTop: 15 }}>
        <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }}>
          Switch to Other Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 10 }}>
        <Text style={{ color: 'red', fontFamily: 'Nunito-SemiBold' }}>
          Deconnexion
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F6F6F7',

    flex: 1,
  },
});

export default Profile;
