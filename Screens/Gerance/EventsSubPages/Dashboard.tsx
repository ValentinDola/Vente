import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {createDrawerNavigator, useDrawerStatus} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {colors} from '../../Constants/theme';
import Header from '../../Components/Header';
import {selectEvent} from '../../Slices/event';
import {useSelector} from 'react-redux';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const Drawer = createDrawerNavigator();

const Dashboard = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  // const navigation = useNavigation();
  const isDrawerClosed = useDrawerStatus() === 'closed';
  const [drawer, setDrawer] = React.useState(isDrawerClosed);

  // const event = useSelector(selectEvent);

  return (
    <View
      style={{flex: 1, backgroundColor: isDarkMode ? colors.dark : '#F6F6F7'}}>
      <Header
        menu={true}
        value={'Tableau de bord'}
        onPress={() => navigation.openDrawer()}
      />
      <View style={{marginVertical: 15, marginHorizontal: 20}}>
        {/* Gross sales */}
        <View>
          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              fontSize: 18,
              color: colors.dark,
              marginBottom: 10,
            }}>
            Ventes Brutes
          </Text>
          <Text
            style={{
              fontFamily: 'Nunito-Black',
              fontSize: 32,
              color: colors.dark,
            }}>
            0 fcfa
          </Text>
        </View>
        {/* Admission sales/ Total Available */}
        <View>
          <View style={{marginVertical: 15}}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                fontSize: 18,
                color: colors.dark,
              }}>
              Ventes disponibles / Total disponible
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AnimatedCircularProgress
              size={80}
              width={5}
              fill={0.3 * 100}
              tintColor="#35D073"
              backgroundColor="#E6E7E8">
              {() => (
                <Text
                  style={{
                    color: colors.black,
                    fontFamily: 'Nunito-Bold',
                  }}>
                  {0.3 * 100}%
                </Text>
              )}
            </AnimatedCircularProgress>
            <View style={{marginLeft: 20}}>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: 'Nunito-Bold',
                  marginVertical: 8,
                  fontSize: 16,
                }}>
                Billets vendus
              </Text>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: 'Nunito-Bold',
                  fontSize: 16,
                }}>
                3/10
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <AnimatedCircularProgress
              size={60}
              width={5}
              fill={0.3 * 100}
              tintColor="#35D073"
              backgroundColor="#E6E7E8">
              {() => (
                <Text
                  style={{
                    color: colors.black,
                    fontFamily: 'Nunito-Bold',
                  }}>
                  {0.3 * 100}%
                </Text>
              )}
            </AnimatedCircularProgress>
            <View style={{marginLeft: 20}}>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: 'Nunito-Bold',
                  marginVertical: 8,
                }}>
                Basic coding
              </Text>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: 'Nunito-Bold',
                }}>
                3/10
              </Text>
            </View>
          </View>
        </View>
        {/* Total Check-ins */}
        <View>
          <View style={{marginVertical: 5}}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                fontSize: 18,
                color: colors.dark,
              }}>
              Nombre total d'enregistrements
            </Text>

            <Text
              style={{
                fontFamily: 'Nunito-Black',
                fontSize: 32,
                color: colors.dark,
                marginVertical: 10,
              }}>
              0
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <AnimatedCircularProgress
              size={80}
              width={5}
              fill={0 * 100}
              tintColor="#35D073"
              backgroundColor="#E6E7E8">
              {() => (
                <Text
                  style={{
                    color: colors.black,
                    fontFamily: 'Nunito-Bold',
                  }}>
                  {0 * 100}%
                </Text>
              )}
            </AnimatedCircularProgress>
            <View style={{marginLeft: 20}}>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: 'Nunito-Bold',
                  marginVertical: 8,
                  fontSize: 16,
                }}>
                Enregistrements
              </Text>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: 'Nunito-Bold',
                  fontSize: 16,
                }}>
                0/10
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <AnimatedCircularProgress
              size={60}
              width={5}
              fill={0 * 100}
              tintColor="#35D073"
              backgroundColor="#E6E7E8">
              {() => (
                <Text
                  style={{
                    color: colors.black,
                    fontFamily: 'Nunito-Bold',
                  }}>
                  {0 * 100}%
                </Text>
              )}
            </AnimatedCircularProgress>
            <View style={{marginLeft: 20}}>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: 'Nunito-Bold',
                  marginVertical: 8,
                }}>
                Basic coding
              </Text>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: 'Nunito-Bold',
                }}>
                0/10
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
