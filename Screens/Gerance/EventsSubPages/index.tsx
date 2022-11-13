import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import Sell from './Sell';
import CheckIn from './CheckIn';
import Orders from './Orders';
import {colors} from '../../Constants/theme';
import CustomDrawer from '../../Components/CustomDrawer';
import {ImageBackground, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Header from '../../Components/Header';
import Edit from './EditEvent';
import Guests from './GuestList';
import Settings from './EventSettings';
import Maison from '../../Navigation/Maison';
import Events from '../Events';
import SearchOrders from '../SearchOrders';
import SwitchOrganisation from '../SwitchOrganisation';
import Profile from '../Profile';

const Drawer = createDrawerNavigator();

const Home = ({route}: any) => {
  const [item, setItem] = React.useState(null);

  // React.useEffect(() => {
  //   let {item} = route.params;
  //   console.log(item);

  //   setItem(item);
  // }, []);

  return (
    <Drawer.Navigator
      drawerContent={props => (
        <SafeAreaView style={{flex: 1}}>
          <DrawerContentScrollView
            {...props}
            contentContainerStyle={{
              backgroundColor: 'transparent',
            }}>
            <View
              style={{
                height: 300,
              }}>
              <ImageBackground
                resizeMode={'cover'}
                source={item?.image}
                style={{
                  height: 200,
                }}
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                }}>
                <View style={{marginHorizontal: 15, marginVertical: 5}}>
                  <Text
                    style={{
                      fontFamily: 'Nunito-SemiBold',
                      color: colors.dark,
                      fontSize: 16,
                    }}>
                    {moment(item?.date).format('ddd DD MMM YYYY HH:mm')}
                  </Text>
                </View>
                <View style={{marginHorizontal: 15, marginVertical: 10}}>
                  <Text
                    style={{
                      fontFamily: 'Nunito-Bold',
                      color: colors.dark,
                      fontSize: 25,
                    }}>
                    {item?.name}
                  </Text>
                </View>
              </View>
            </View>

            <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
              <DrawerItemList {...props} />
            </View>
          </DrawerContentScrollView>
          <View style={{padding: 20}}>
            <View style={{marginVertical: 20}}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Nunito-SemiBold',

                  color: colors.dark,
                }}>
                dolavalentin@gmail.com
              </Text>
            </View>
            <RNBounceable>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Feather name="log-out" size={18} color={colors.dark} />
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Nunito-SemiBold',
                    marginLeft: 25,
                    color: colors.dark,
                  }}>
                  Sign Out
                </Text>
              </View>
            </RNBounceable>
          </View>
        </SafeAreaView>
      )}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'transparent',
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.dark,
        drawerLabelStyle: {
          fontFamily: 'Nunito-SemiBold',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Feather name={'bar-chart-2'} color={color} size={18} />
          ),
        }}
        name="Tableau de bord"
        component={Dashboard}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Feather name={'activity'} color={color} size={18} />
          ),
        }}
        name="Vente"
        component={Sell}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Feather name={'check-square'} color={color} size={18} />
          ),
        }}
        name="Enregistrement"
        component={CheckIn}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Feather name={'airplay'} color={color} size={18} />
          ),
        }}
        name="Commandes"
        component={Orders}
      />

      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Feather name={'edit'} color={color} size={18} />
          ),
        }}
        name="Éditer"
        component={Edit}
      />

      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Feather name={'divide'} color={color} size={18} />
          ),
        }}
        name="Liste des invités"
        component={Guests}
      />

      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Feather name={'settings'} color={color} size={18} />
          ),
        }}
        name="Réglages"
        component={Settings}
      />

      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Feather name={'database'} color={color} size={18} />
          ),
        }}
        name="Profile"
        component={Profile}
      />

      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Feather name={'compass'} color={color} size={18} />
          ),
        }}
        name="Events"
        component={Events}
      />

      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Feather name={'file'} color={color} size={18} />
          ),
        }}
        name="SearchOrders"
        component={SearchOrders}
      />

      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Feather name={'link'} color={color} size={18} />
          ),
        }}
        name="SwitchOrganisation"
        component={SwitchOrganisation}
      />
    </Drawer.Navigator>
  );
};

export default Home;
