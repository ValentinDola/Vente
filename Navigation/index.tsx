import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Integration from '../Screens/Integration';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Identification from '../Screens/Identification';
import Inscription from '../Screens/Inscription';
import Maison from './Maison';

import Detail from '../Screens/Détail';
import Loader from '../Components/svgs/loader';
import Recherche from '../Screens/Recherche';
import Menu from '../Screens/Menu';
import Tickets from '../Screens/Tickets';
import Reglages from '../Screens/Reglages';
import About from '../Screens/About';
import Termes from '../Screens/Termes';
import Promotions from '../Screens/promotions';
import Commande from '../Screens/Commande';
import Cart from '../Screens/Cart';
import Payment from '../Screens/Payment';
import Portefeuille from '../Screens/Portefeuille';
import Checkout from '../Screens/Checkout';
import Retrait from '../Screens/Retrait';
import Recharge from '../Screens/Recharge';

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

          <Stack.Screen name={'Maison'} component={Maison} />
          <Stack.Screen name={'Detail'} component={Detail} />
          <Stack.Screen name={'Recherche'} component={Recherche} />
          <Stack.Screen name={'Menu'} component={Menu} />
          <Stack.Screen name={'Tickets'} component={Tickets} />
          <Stack.Screen name={'Reglages'} component={Reglages} />
          <Stack.Screen name={'About'} component={About} />
          <Stack.Screen name={'Termes'} component={Termes} />
          <Stack.Screen name={'Promotions'} component={Promotions} />
          <Stack.Screen name={'Commande'} component={Commande} />
          <Stack.Screen name={'Cart'} component={Cart} />
          <Stack.Screen name={'Payment'} component={Payment} />
          <Stack.Screen name={'Portefeuille'} component={Portefeuille} />
          <Stack.Screen name={'Checkout'} component={Checkout} />
          <Stack.Screen name={'Retrait'} component={Retrait} />
          <Stack.Screen name={'Recharge'} component={Recharge} />


          <Stack.Screen name={'Identification'} component={Identification} />
          <Stack.Screen name={'Inscription'} component={Inscription} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;
