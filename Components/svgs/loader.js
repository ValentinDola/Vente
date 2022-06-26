import React from 'react';
import {View, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView
        source={'../Components/assets/loader/96910-np-progress-loader.json'}
        autoplay={true}
        style={{width: 100, height: 100}}
      />
    </View>
  );
};

export default Loader;
