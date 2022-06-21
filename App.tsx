import React, {useEffect} from 'react';
import Navigation from './Navigation';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaView} from 'react-native';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true})
      .then(r => console.log(r, 'Bootsplash has been hidden successfully'))
      .catch(err => console.error(err));
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
