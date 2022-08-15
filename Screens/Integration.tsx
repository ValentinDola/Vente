// ADD TODO
// [X] Slide array containing object with id, image and description.
// [X] Component for rendering a slide object.
// [X] Footer, buttons to navigate between the onboardings.
// [X] Stack all components.

import React, { useRef } from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  StatusBar,
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { theme } from '../Constants';
import * as PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import RNBounceable from '@freakycoder/react-native-bounceable';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: 1,
    name: 'water-outline',
    // title
    description:
      "l'endroit où vous pouvez trouver tous les événements.",
  },
  {
    id: 2,
    name: 'brush-outline',
    description: "Informations en temps réel sur ce qui se passe dans le pays.",
  },
  {
    id: 3,
    name: 'timer-outline',
    description: 'Informations en temps réel sur ce qui se passe dans le pays.',
  },
];

const Integration = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  const [currentIndicatorIndex, setCurrentIndicatorIndex] = React.useState(0);
  const ref = useRef(null);

  const Slide = (props: {
    item: {
      name: string;
      description:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    };
  }) => {
    return (
      <View style={{ justifyContent: 'center' }}>
        <View style={{ width, alignItems: 'center' }} >
          <Icon name={props.item.name} size={250} color={theme.colors.blue} />
          <Text style={styles.description}>{props.item.description}</Text>
        </View>


      </View>
    );
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',

        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndicatorIndex == index && {
                  backgroundColor: theme.colors.blue,

                },
              ]}
            />
          ))}
        </View>
        <View style={{ marginBottom: 30 }}>
          {currentIndicatorIndex === slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <RNBounceable
                style={[styles.btn]}
                onPress={() => props.navigation.navigate('Maison')}>
                <Text style={[styles.btntxt]}>Commencez</Text>
              </RNBounceable>
            </View>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <RNBounceable
                style={[
                  styles.btn,
                  {
                    backgroundColor: 'transparent',

                  },
                ]}
                onPress={skip}>
                <Text style={[styles.btntxt, { color: theme.colors.blue }]}>
                  Sauter
                </Text>
              </RNBounceable>
              <View style={{ width: 15 }} />
              <RNBounceable style={[styles.btn, {
                backgroundColor: 'transparent',

              },]} onPress={goToNextSlide}>
                <Text style={[styles.btntxt, { color: theme.colors.blue }]}>Suivant</Text>
              </RNBounceable>
            </View>
          )}
        </View>
      </View>
    );
  };

  Slide.propTypes = { item: PropTypes.object };

  const updateCurrentSlideIndex = (e: {
    nativeEvent: { contentOffset: { x: any } };
  }) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndicatorIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentIndicatorIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentIndicatorIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentIndicatorIndex(lastSlideIndex);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F6F6F7',
      }}>

      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled={true}
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: theme.sizes.h4,
    fontFamily: 'Nunito-SemiBold',
    color: theme.colors.black,

    width: 300,
    textAlign: 'center',
  },
  indicator: {
    height: 10,
    width: 10,
    borderColor: theme.colors.bluetiful,
    borderWidth: 1.5,
    marginHorizontal: 3,
    borderRadius: 50,
  },
  btn: {
    flex: 1,
    height: 40,
    borderRadius: 3,
    backgroundColor: theme.colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  btntxt: {
    fontSize: theme.sizes.h6,
    fontFamily: 'Nunito-SemiBold',
    color: theme.colors.antiFlashWhite,
  },
});

export default Integration;
