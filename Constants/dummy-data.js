import {Dimensions} from 'react-native';
import {theme} from '../Constants/index';

const {width, height} = Dimensions.get('screen');

export const Schema = [
  {
    id: 1,
    type: 'Musique',
    name: 'The Adventure of Kira and Morrison',
    startDate: '2022-07-21 19:00',
    endDate: '2022-07-21 23:00',
    eventStatus: 'prévu',
    eventAttendanceMode: 'offline',
    isLikable: false,
    location: {
      type: 'Place',
      name: 'Snikerpark Stadium',
      address: {
        type: 'PostalAddress',
        streetAddress: '100 West Snikerpark Dr',
        addressLocality: 'Snikertown',
      },
    },
    image: require('../assets/images/data/adam-whitlock-I9j8Rk-JYFM-unsplash.jpg'),
    description:
      "The Adventure of Kira and Morrison is coming to Snikertown in a can't miss performance",
    offers: {
      type: 'billet',
      price: ['3000', '5000', '10000'],
      priceFirst: '3000',
      priceSecond: '5000',
      reservation: '10000',
      priceCurrency: 'CFA',
      availability: 'InStock',
      validFrom: '2022-07-21T23:00-05:00',
    },
    performer: {
      type: 'PerforminGroup',
      name: 'kira and Morrison',
    },
    organizer: {
      type: 'Organization',
      name: 'Kira and Morrison Music',
    },
  },
];

export const data = [
  {
    id: 1,
    type: 'Sortie',
    name: 'Principaux conservateurs noirs',
    startDate: '2022-07-22 19:00',
    endDate: '2022-07-22 23:00',
    eventStatus: 'prévu',
    eventAttendanceMode: 'offline',
    isLikable: false,
    location: {
      type: 'Place',
      name: 'Snikerpark Stadium',
      address: {
        type: 'PostalAddress',
        streetAddress: '100 West Snikerpark Dr',
        addressLocality: 'Snikertown',
      },
    },
    image: require('../assets/images/data/cassie-gallegos-6wCWCPwmRJY-unsplash.jpg'),
    description:
      "The Adventure of Kira and Morrison is coming to Snikertown in a can't miss performance",
    offers: {
      type: 'billet',
      price: ['3000', '5000', '10000'],
      priceFirst: '3000',
      priceSecond: '5000',
      reservation: '10000',
      priceCurrency: 'CFA',
      availability: 'InStock',
      validFrom: '2022-07-21T23:00-05:00',
    },
    performer: {
      type: 'PerforminGroup',
      name: 'kira and Morrison',
    },
    organizer: {
      type: 'Organization',
      name: 'Kira and Morrison Music',
    },
  },
  {
    id: 2,
    type: 'Bouffe',
    name: 'Réalisation animée',
    startDate: '2022-07-23 19:00',
    endDate: '2022-07-23 23:00',
    eventStatus: 'prévu',
    eventAttendanceMode: 'offline',
    isLikable: false,
    location: {
      type: 'Place',
      name: 'Snikerpark Stadium',
      address: {
        type: 'PostalAddress',
        streetAddress: '100 West Snikerpark Dr',
        addressLocality: 'Snikertown',
      },
    },
    image: require('../assets/images/data/adam-whitlock-I9j8Rk-JYFM-unsplash.jpg'),
    description:
      "The Adventure of Kira and Morrison is coming to Snikertown in a can't miss performance",
    offers: {
      type: 'billet',
      price: ['3000', '5000', '10000'],
      priceFirst: '3000',
      priceSecond: '5000',
      reservation: '10000',
      priceCurrency: 'CFA',
      availability: 'InStock',
      validFrom: '2022-07-21T23:00-05:00',
    },
    performer: {
      type: 'PerforminGroup',
      name: 'kira and Morrison',
    },
    organizer: {
      type: 'Organization',
      name: 'Kira and Morrison Music',
    },
  },
  {
    id: 3,
    type: 'Party',
    name: 'Raisons de cristal',
    startDate: '2022-07-24 19:00',
    endDate: '2022-07-24 23:00',
    eventStatus: 'prévu',
    eventAttendanceMode: 'offline',
    isLikable: false,
    location: {
      type: 'Place',
      name: 'Snikerpark Stadium',
      address: {
        type: 'PostalAddress',
        streetAddress: '100 West Snikerpark Dr',
        addressLocality: 'Snikertown',
      },
    },
    image: require('../assets/images/data/jakob-owens-qoFQxxuk3QY-unsplash.jpg'),
    description:
      "The Adventure of Kira and Morrison is coming to Snikertown in a can't miss performance",
    offers: {
      type: 'billet',
      price: ['3000', '5000', '10000'],
      priceFirst: '3000',
      priceSecond: '5000',
      reservation: '10000',
      priceCurrency: 'CFA',
      availability: 'InStock',
      validFrom: '2022-07-21T23:00-05:00',
    },
    performer: {
      type: 'PerforminGroup',
      name: 'kira and Morrison',
    },
    organizer: {
      type: 'Organization',
      name: 'Kira and Morrison Music',
    },
  },
  {
    id: 4,
    type: 'Sport',
    name: 'Sauge Silver Spring',
    startDate: '2022-07-25 19:00',
    endDate: '2022-07-25 23:00',
    eventStatus: 'prévu',
    eventAttendanceMode: 'offline',
    isLikable: false,
    location: {
      type: 'Place',
      name: 'Snikerpark Stadium',
      address: {
        type: 'PostalAddress',
        streetAddress: '100 West Snikerpark Dr',
        addressLocality: 'Snikertown',
      },
    },
    image: require('../assets/images/data/lee-blanchflower-1dW1vEJLlCQ-unsplash.jpg'),
    description:
      "The Adventure of Kira and Morrison is coming to Snikertown in a can't miss performance",
    offers: {
      type: 'billet',
      price: ['3000', '5000', '10000'],
      priceFirst: '3000',
      priceSecond: '5000',
      reservation: '10000',
      priceCurrency: 'CFA',
      availability: 'InStock',
      validFrom: '2022-07-21T23:00-05:00',
    },
    performer: {
      type: 'PerforminGroup',
      name: 'kira and Morrison',
    },
    organizer: {
      type: 'Organization',
      name: 'Kira and Morrison Music',
    },
  },
  {
    id: 5,
    type: 'The Church',
    name: 'Association Sculptée',
    startDate: '2022-07-26 19:00',
    endDate: '2022-07-26 23:00',
    eventStatus: 'prévu',
    eventAttendanceMode: 'offline',
    isLikable: false,
    location: {
      type: 'Place',
      name: 'Snikerpark Stadium',
      address: {
        type: 'PostalAddress',
        streetAddress: '100 West Snikerpark Dr',
        addressLocality: 'Snikertown',
      },
    },
    image: require('../assets/images/data/joshua-eckstein-nkUioaswtvM-unsplash.jpg'),
    description:
      "The Adventure of Kira and Morrison is coming to Snikertown in a can't miss performance",
    offers: {
      type: 'billet',
      price: ['3000', '5000', '10000'],
      priceFirst: '3000',
      priceSecond: '5000',
      reservation: '10000',
      priceCurrency: 'CFA',
      availability: 'InStock',
      validFrom: '2022-07-21T23:00-05:00',
    },
    performer: {
      type: 'PerforminGroup',
      name: 'kira and Morrison',
    },
    organizer: {
      type: 'Organization',
      name: 'Kira and Morrison Music',
    },
  },
  {
    id: 6,
    type: 'Fashion',
    name: 'Fêtes mouvementées',
    startDate: '2022-07-27 19:00',
    endDate: '2022-07-27 23:00',
    eventStatus: 'prévu',
    eventAttendanceMode: 'offline',
    isLikable: false,
    location: {
      type: 'Place',
      name: 'Snikerpark Stadium',
      address: {
        type: 'PostalAddress',
        streetAddress: '100 West Snikerpark Dr',
        addressLocality: 'Snikertown',
      },
    },
    image: require('../assets/images/data/raul-de-los-santos-yf50syI_Dwg-unsplash.jpg'),
    description:
      "The Adventure of Kira and Morrison is coming to Snikertown in a can't miss performance",
    offers: {
      type: 'billet',
      price: ['3000', '5000', '10000'],
      priceFirst: '3000',
      priceSecond: '5000',
      reservation: '10000',
      priceCurrency: 'CFA',
      availability: 'InStock',
      validFrom: '2022-07-21T23:00-05:00',
    },
    performer: {
      type: 'PerforminGroup',
      name: 'kira and Morrison',
    },
    organizer: {
      type: 'Organization',
      name: 'Kira and Morrison Music',
    },
  },
  {
    id: 7,
    type: 'Santé',
    name: 'Conférences Sunset Silver',
    startDate: '2022-07-28 19:00',
    endDate: '2022-07-28 23:00',
    eventStatus: 'prévu',
    eventAttendanceMode: 'offline',
    isLikable: false,
    location: {
      type: 'Place',
      name: 'Snikerpark Stadium',
      address: {
        type: 'PostalAddress',
        streetAddress: '100 West Snikerpark Dr',
        addressLocality: 'Snikertown',
      },
    },
    image: require('../assets/images/data/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg'),
    description:
      "The Adventure of Kira and Morrison is coming to Snikertown in a can't miss performance",
    offers: {
      type: 'billet',
      price: ['3000', '5000', '10000'],
      priceFirst: '3000',
      priceSecond: '5000',
      reservation: '10000',
      priceCurrency: 'CFA',
      availability: 'InStock',
      validFrom: '2022-07-21T23:00-05:00',
    },
    performer: {
      type: 'PerforminGroup',
      name: 'kira and Morrison',
    },
    organizer: {
      type: 'Organization',
      name: 'Kira and Morrison Music',
    },
  },
  {
    id: 8,
    type: 'Affaires',
    name: 'Superbe célébration',
    startDate: '2022-07-29 19:00',
    endDate: '2022-07-29 23:00',
    eventStatus: 'prévu',
    eventAttendanceMode: 'offline',
    isLikable: false,
    location: {
      type: 'Place',
      name: 'Snikerpark Stadium',
      address: {
        type: 'PostalAddress',
        streetAddress: '100 West Snikerpark Dr',
        addressLocality: 'Snikertown',
      },
    },
    image: require('../assets/images/data/alexander-londono-_u5dfeo2UuY-unsplash.jpg'),
    description:
      "The Adventure of Kira and Morrison is coming to Snikertown in a can't miss performance",
    offers: {
      type: 'billet',
      price: ['3000', '5000', '10000'],
      priceFirst: '3000',
      priceSecond: '5000',
      reservation: '10000',
      priceCurrency: 'CFA',
      availability: 'InStock',
      validFrom: '2022-07-21T23:00-05:00',
    },
    performer: {
      type: 'PerforminGroup',
      name: 'kira and Morrison',
    },
    organizer: {
      type: 'Organization',
      name: 'Kira and Morrison Music',
    },
  },
];

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
    title: 'Fashion',
    image: require('../assets/images/categories/icons8-shirt-40.png'),
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

export const tickets = [
  {
    id: 1,
    icon: 'headset-outline',
    color: '#9db4f5',
    ticketID: '#096754236',
    ticketPrice: '3000',
    eventName: 'Principaux conservateurs noirs',
    ticketSaleTime: '13:00',
  },
  {
    id: 2,
    icon: 'pizza-outline',
    color: '#fbcc56',
    ticketID: '#096754',
    ticketPrice: '5000',
    eventName: 'The Adventure of Kira and Morrison',
    ticketSaleTime: '21:00',
  },
  {
    id: 3,
    icon: 'pulse',
    color: '#e57fc2',
    ticketID: '#0967542',
    ticketPrice: '13000',
    eventName: 'Fêtes mouvementées',
    ticketSaleTime: '13:00',
  },
  {
    id: 4,
    icon: 'rose-outline',
    color: '#000000',
    ticketID: '#0754236',
    ticketPrice: '10000',
    eventName: 'Conférences Sunset Silver',
    ticketSaleTime: '13:00',
  },
];

export const transactions = [
  {
    id: 1,
    icon: 'trending-down-outline',
    color: '#9db4f5',
    actionID: '#096754236',
    price: '3000',
    action: 'Retrait',
    actionTime: '13:00',
  },
  {
    id: 2,
    icon: 'trending-up-outline',
    color: '#fbcc56',
    actionID: '#096754',
    price: '3000',
    action: 'Recharge',
    actionTime: '21:00',
  },
  {
    id: 3,
    icon: 'trending-up-outline',
    color: '#e57fc2',
    actionID: '#0967542',
    price: '3000',
    action: 'Recharge',
    actionTime: '13:00',
  },
  {
    id: 4,
    icon: 'trending-down-outline',
    color: '#000000',
    actionID: '#0754236',
    price: '3000',
    action: 'Retrait',
    actionTime: '13:00',
  },
];
