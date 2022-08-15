import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import ContentLoader, {Rect, Circle, Path} from 'react-content-loader/native';

const {width, height} = Dimensions.get('screen');

const ExplorerSkeleton = props => {
  const Header = () => {
    <ContentLoader
      speed={2}
      width={width}
      height={124}
      viewBox="0 0 476 124"
      backgroundColor="#F6F6F7"
      foregroundColor="#ecebeb"
      {...props}>
      <Rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
      <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <Rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <Rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <Circle cx="20" cy="20" r="20" />
    </ContentLoader>;
  };

  const Categories = () => {};

  const Evenement = () => {};

  const Nouvelles = () => {};

  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F7'}}>
      <Header />
    </View>
  );
};

export default ExplorerSkeleton;
