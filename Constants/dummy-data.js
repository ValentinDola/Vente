import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const events = [
  {
    id: 1,
    image: require('../assets/images/data/adam-whitlock-I9j8Rk-JYFM-unsplash.jpg'),
    type: 'SORTIE',
    startTime: '2020/01/21 09:10 PM',
    title: 'Festivale des couleurs',
    location: '8010, Adamavo Market, Lome',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    price: 5000,
  },
  // {
  //   id: 2,
  //   image: require('../assets/images/data/cassie-gallegos-6wCWCPwmRJY-unsplash.jpg'),
  //   type: 'PARTY',
  //   startTime: '23/03/2022 13h00',
  //   title: 'UX Design',
  //   location: '8010, Adamavo Market, Lome',
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  //   price: 3500,
  // },
  {
    id: 3,
    image: require('../assets/images/data/jakob-owens-qoFQxxuk3QY-unsplash.jpg'),
    type: 'PARTY',
    startTime: '2020/02/21 09:10 PM',
    title: 'UI/UX',
    location: '8010, Adamavo Market, Lome',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    price: 0,
  },
  {
    id: 4,
    image: require('../assets/images/data/lee-blanchflower-1dW1vEJLlCQ-unsplash.jpg'),
    type: 'CONCERT',
    startTime: '2020/04/21 09:10 PM',
    title: 'Festivale des couleurs',
    location: '8010, Adamavo Market, Lome',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    price: 1000,
  },
  {
    id: 5,
    image: require('../assets/images/data/med-mhamdi-mH_E0K581Yk-unsplash.jpg'),
    type: 'MUSIC',
    startTime: '2020/06/21 09:10 PM',
    title: 'Festivale des couleurs',
    location: '8010, Adamavo Market, Lome',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    price: 3000,
  },
  {
    id: 6,
    image: require('../assets/images/data/zachary-kadolph-hwHHq82Enf0-unsplash.jpg'),
    type: 'SPORT',
    startTime: '2020/08/21 09:10 PM',
    title: 'Festivale des couleurs',
    location: '8010, Adamavo Market, Lome',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    price: 10000,
  },
  {
    id: 7,
    image: require('../assets/images/data/connor-coyne-OgqWLzWRSaI-unsplash.jpg'),
    type: 'SPORT',
    startTime: '2020/10/21 09:10 PM',
    title: 'Festivale des couleurs',
    location: '8010, Adamavo Market, Lome',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    price: 50000,
  },
];

const Region = {
  latitude: 37.58817,
  longitude: -122.4903973,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005 * (width / height),
};

const MapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

export {events, Region, MapStyle};
