import React, {useEffect} from 'react';
import Navigation from './Navigation';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true})
      .then(r => console.log(r, 'Bootsplash has been hidden successfully'))
      .catch(err => console.error(err));
  }, []);
  return <Navigation/>;
};

export default App;
