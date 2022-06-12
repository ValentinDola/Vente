import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Integration from '../Screens/Integration';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Identification from '../Screens/Identification';
import Inscription from '../Screens/Inscription';

const Stack = createNativeStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

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

          <Stack.Screen
            name={'Identification'}
            component={Identification}
            options={{
              transitionSpec: {
                open: config,
                close: config
              }
            }}

          />
          <Stack.Screen
            name={'Inscription'}
            component={Inscription}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;
