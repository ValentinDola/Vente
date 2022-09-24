import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Integration from '../Screens/Integration';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Identification from '../Screens/Identification';
import Inscription from '../Screens/Inscription';
import Maison from './Maison';

import Detail from '../Screens/Détail';
import Recherche from '../Screens/Recherche';
import Menu from '../Screens/Menu';
import Tickets from '../Screens/Tickets';
import Reglages from '../Screens/Reglages';
import About from '../Screens/About';
import Termes from '../Screens/Termes';
import Commande from '../Screens/Commande';
import Cart from '../Screens/Cart';
import Payment from '../Screens/Payment';
import Portefeuille from '../Screens/Portefeuille';
import Checkout from '../Screens/Checkout';
import Retrait from '../Screens/Retrait';
import Recharge from '../Screens/Recharge';
import Ticket from '../Screens/Ticket';
import Overview from '../Screens/Overview';
import Compte from '../Screens/Compte';
import Gérance from '../Screens/Gérance';
import Notification from '../Screens/Notification';
import Edit from '../Screens/Profile_/Edit';
import EditNomEtPrenom from '../Screens/Profile_/EditNomEtPrenom';
import EditMotDePasse from '../Screens/Profile_/EditMotDePasse';
import NotificationSettings from '../Screens/Profile_/NotificationSettings';
import Explorer from '../Screens/Explorer';
import Profile from '../Screens/Profile';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched]: React.SetStateAction<any> =
    useState(null);

  useEffect(() => {
    const checkData = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      console.log(appData);
      if (appData == null) {
        setIsAppFirstLaunched(true);
        await AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
    };

    checkData()
      .then(r => console.log(r))
      .catch(error => console.error(error));
  }, []);

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
          }}>
          {isAppFirstLaunched && (
            <Stack.Screen name={'Integration'} component={Integration} />
          )}

          <Stack.Screen name={'Explorer'} component={Explorer} />
          <Stack.Screen name={'Profile'} component={Profile} />
          <Stack.Screen name={'Detail'} component={Detail} />
          <Stack.Screen name={'Recherche'} component={Recherche} />
          <Stack.Screen name={'Menu'} component={Menu} />
          <Stack.Screen name={'Tickets'} component={Tickets} />
          <Stack.Screen name={'Ticket'} component={Ticket} />
          <Stack.Screen name={'Reglages'} component={Reglages} />
          <Stack.Screen name={'About'} component={About} />
          <Stack.Screen name={'Termes'} component={Termes} />
          <Stack.Screen name={'Compte'} component={Compte} />
          <Stack.Screen name={'Commande'} component={Commande} />
          <Stack.Screen name={'Cart'} component={Cart} />
          <Stack.Screen name={'Payment'} component={Payment} />
          <Stack.Screen name={'Portefeuille'} component={Portefeuille} />
          <Stack.Screen name={'Checkout'} component={Checkout} />
          <Stack.Screen name={'Overview'} component={Overview} />
          <Stack.Screen name={'Retrait'} component={Retrait} />
          <Stack.Screen name={'Recharge'} component={Recharge} />
          <Stack.Screen name={'Gérance'} component={Gérance} />
          <Stack.Screen name={'Notification'} component={Notification} />
          <Stack.Screen name={'Edit'} component={Edit} />
          <Stack.Screen name={'EditNomEtPrenom'} component={EditNomEtPrenom} />
          <Stack.Screen name={'EditMotDePasse'} component={EditMotDePasse} />
          <Stack.Screen
            name={'NotificationSettings'}
            component={NotificationSettings}
          />

          <Stack.Screen name={'Identification'} component={Identification} />
          <Stack.Screen name={'Inscription'} component={Inscription} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;
