import {Dimensions} from 'react-native';
import {theme} from '../Constants/index';

const {width, height} = Dimensions.get('screen');

export const Event = [
  {
    id: 1,
    image: require('../assets/images/data/adam-whitlock-I9j8Rk-JYFM-unsplash.jpg'),
    type: 'Sortie',
    date: '2020-01-21',
    startTime: '2020-01-21 13:00:00',
    title: 'Festivale des couleurs',
    location: '8010, Adamavo Market, Lome',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    price: 5000,
    promotion: {
      state: false,
    },
  },
  {
    id: 2,
    image: require('../assets/images/data/cassie-gallegos-6wCWCPwmRJY-unsplash.jpg'),
    type: 'Bouffe',
    date: '2020-01-22',
    startTime: '2020-01-21 13:00:00',
    title: 'UX Design',
    location: '8010, Adamavo Market, Lome',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    price: 3500,
    promotion: {
      state: true,
      detail: '4000f pour 2 personnes',
    },
  },
  {
    id: 3,
    image: require('../assets/images/data/jakob-owens-qoFQxxuk3QY-unsplash.jpg'),
    type: 'Party',
    date: '2020-01-23',
    startTime: '2020-01-21 13:00:00',
    title: 'UI/UX',
    location: '8010, Adamavo Market, Lome',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    price: 0,
    promotion: {
      state: false,
    },
  },
  {
    id: 4,
    image: require('../assets/images/data/lee-blanchflower-1dW1vEJLlCQ-unsplash.jpg'),
    type: 'Musique',
    date: '2020-01-24',
    startTime: '2020-01-21 13:00:00',
    title: 'Festivale des couleurs 4',
    location: '8010, Adamavo Market, Lome',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    price: 1000,
    promotion: {
      state: true,
      detail: '5000f pour 6 personnes',
    },
  },
  {
    id: 5,
    image: require('../assets/images/data/med-mhamdi-mH_E0K581Yk-unsplash.jpg'),
    type: 'Musique',
    date: '2020-01-24',
    startTime: '2020-01-21 13:00:00',
    title: 'Festivale des couleurs 5',
    location: '8010, Adamavo Market, Lome',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    price: 3000,
    promotion: {
      state: true,
      detail: '30000f pour 3 personnes',
    },
  },
  {
    id: 6,
    image: require('../assets/images/data/zachary-kadolph-hwHHq82Enf0-unsplash.jpg'),
    type: 'Sport',
    date: '2020-01-24',
    startTime: '2020-01-21 13:00:00',
    title: 'Festivale des couleurs',
    location: '8010, Adamavo Market, Lome',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    price: 10000,
    promotion: {
      state: true,
      detail: '3000f pour 3 personnes',
    },
  },
  {
    id: 7,
    image: require('../assets/images/data/connor-coyne-OgqWLzWRSaI-unsplash.jpg'),
    type: 'Sport',
    date: '2020-01-21',
    startTime: '2020-01-21 13:00:00',
    title: 'Festivale des couleurs',
    location: '8010, Adamavo Market, Lome',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    price: 50000,
    promotion: {
      state: true,
      detail: '1000f pour 2 personnes',
    },
  },
];

export const Categories = [
  {
    id: 1,
    title: 'Musique',
    image: require('../assets/images/categories/icons8-earbud-headphones-40.png'),
  },
  {
    id: 2,
    title: 'Sortie',
    image: require('../assets/images/categories/icons8-partly-cloudy-day-40.png'),
  },
  {
    id: 3,
    title: 'Bouffe',
    image: require('../assets/images/categories/icons8-ice-cream-sundae-40.png'),
  },
  {
    id: 4,
    title: 'Party',
    image: require('../assets/images/categories/icons8-the-toast-40.png'),
  },
  {
    id: 5,
    title: 'Sport',
    image: require('../assets/images/categories/icons8-soccer-ball-40.png'),
  },
  {
    id: 6,
    title: 'Church',
    image: require('../assets/images/categories/icons8-bible-app-40.png'),
  },
  {
    id: 7,
    title: 'Emission',
    image: require('../assets/images/categories/icons8-pray-40.png'),
  },
  {
    id: 8,
    title: 'Santé',
    image: require('../assets/images/categories/icons8-clinic-40.png'),
  },
  {
    id: 9,
    title: 'Affaires',
    image: require('../assets/images/categories/icons8-business-40.png'),
  },
];

export const News = [
  {
    id: 1,
    title: 'Reouvrez en toute confiance avec le manuel de sécurité COVID-19',
    color: 'red',
  },
  {
    id: 2,
    title: 'Reouvrez en toute confiance avec le manuel de sécurité COVID-19',
    color: theme.colors.bluetiful,
  },
  {
    id: 3,
    title: 'Reouvrez en toute confiance avec le manuel de sécurité COVID-19',
    color: theme.colors.blue,
  },
  {
    id: 4,
    title: 'Reouvrez en toute confiance avec le manuel de sécurité COVID-19',
    color: 'cyan',
  },
];
