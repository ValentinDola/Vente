import React, {useRef} from 'react';
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
} from 'react-native';
import {theme} from '../Constants';
import * as PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: 1,
    image: require('../assets/images/onboarding/undraw_missed_chances_k3cq.png'),
    // title
    description:
      'Soyez le premier à connaître le meilleur événement dans votre pays.',
  },
  {
    id: 2,
    image: require('../assets/images/onboarding/undraw_Calendar_re_ki49.png'),
    description: "Calendrier d'événements moderne.",
  },
  {
    id: 3,
    image: require('../assets/images/onboarding/undraw_off_road_9oae.png'),
    description: 'Trouvez facilement les itinéraires',
  },
];

const Integration = ({navigation}) => {
  const [currentIndicatorIndex, setCurrentIndicatorIndex] = React.useState(0);
  const ref = useRef(null);

  const Slide = props => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={props.item.image}
          style={{
            height: '75%',
            width,
            resizeMode: 'contain',
          }}
        />
        <Text style={styles.description}>{props.item.description}</Text>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
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
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <View style={{marginBottom: 30}}>
          {currentIndicatorIndex === slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={[styles.btn]}
                onPress={() => navigation.replace('Identification')}>
                <Text style={[styles.btntxt]}>Commencez</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: theme.colors.blue,
                  },
                ]}
                onPress={skip}>
                <Text style={[styles.btntxt, {color: theme.colors.blue}]}>
                  Sauter
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity style={[styles.btn]} onPress={goToNextSlide}>
                <Text style={[styles.btntxt]}>Suivant</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  Slide.propTypes = {item: PropTypes.object};

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndicatorIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentIndicatorIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentIndicatorIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({offset});
    setCurrentIndicatorIndex(lastSlideIndex);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor={theme.colors.black} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled={true}
        data={slides}
        contentContainerStyle={{height: height * 0.75}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Slide item={item} />}
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
    fontWeight: '600',
    // marginTop: 10,
    width: 268,
    textAlign: 'center',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: theme.colors.lightBlue,
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 3,
    backgroundColor: theme.colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntxt: {
    fontSize: theme.sizes.h5,
    fontFamily: 'Nunito-SemiBold',
    color: theme.colors.antiFlashWhite,
  },
});

export default Integration;
