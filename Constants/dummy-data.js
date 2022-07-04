import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Event = [
  {
    id: 1,
    image: require('../assets/images/data/adam-whitlock-I9j8Rk-JYFM-unsplash.jpg'),
    type: 'SORTIE',
    date: '2020/01/21',
    startTime: '2020/01/21 09:10 PM',
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
    type: 'PARTY',
    date: '2020/01/21',
    startTime: '2020/01/21 09:10 PM',
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
    type: 'PARTY',
    date: '2020/02/21',
    startTime: '2020/02/21 09:10 PM',
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
    type: 'CONCERT',
    date: '2020/04/21',
    startTime: '2020/04/21 09:10 PM',
    title: 'Festivale des couleurs',
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
    type: 'MUSIC',
    date: '2020/06/21',
    startTime: '2020/06/21 09:10 PM',
    title: 'Festivale des couleurs',
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
    type: 'SPORT',
    date: '2020/08/21',
    startTime: '2020/08/21 09:10 PM',
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
    type: 'SPORT',
    date: '2020/10/21',
    startTime: '2020/10/21 09:10 PM',
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
];

export const News = [
  {
    id: 1,
    title: 'Reouvrez en toute confiance avec le manuel de sécurité COVID-19',
    description:
      "Nous nous sommes associés à des experts en gestion des risques et en santé pour permettre aux créateurs d'événements d'examiner attentivement les risques potentiels de sécurité lors de votre événement.",
  },
];
