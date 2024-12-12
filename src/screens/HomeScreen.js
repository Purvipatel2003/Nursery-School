import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import Colors from '../assets/Colors.js';
import icons from '../Helper/icons';
import styles from '../Styles/HomeScreenStyle.js';
import {useNavigation} from '@react-navigation/native';
import Labels from '../Helper/Labels.js';
import HorizontalScroll from '../Component/HorizontalScroll.js';
import VerticalScroll from '../Component/VerticalScroll.js';

const {width} = Dimensions.get('window');

export const nursery = [
  {
    id: 1,
    header3: 'Featured Nurseries',
    name: 'Bright Spark Montessori',
    category: Labels.nursery,

    icon: require('../assets/Images/photos/montessary.png'),
    addressline1: '33-37 Wigston Road  ',
    addressline2: 'Leicester, LE2 5QF',
    ratings: 4,
    isOpen: true,
    url: [
      require('../assets/Images/photos/Banner.png'),
      require('../assets/Images/photos/Banner.png'),
    ],
    category1: Labels.nursery_detail,
    contact: 'Thavam Sathasivam',
    header: Labels.features,
    header1: Labels.timings,
    header2: Labels.visiting,
    image2: icons.visiting_icon,
    desc: `If you would like to request a tour of the Nursery,please contact the nursery to book in a visit.`,
    image: icons.feature_icon,
    image1: icons.vector2_icon,
    timings: [
      {id: 1, day: 'Mon', time: '08:00 to 18:00'},
      {id: 2, day: 'Tue', time: '08:00 to 18:00'},
      {id: 3, day: 'Wed', time: '08:00 to 18:00'},
      {id: 4, day: 'Thu', time: '08:00 to 18:00'},
      {id: 5, day: 'Fri', time: '08:00 to 18:00'},
      {id: 6, day: 'Sat', time: '08:00 to 18:00'},
      {id: 7, day: 'Sun', time: '08:00 to 18:00'},
    ],
    features: [
      {id: 1, url: icons.dot_icon, Name: 'Montessori Education'},
      {id: 2, url: icons.dot_icon, Name: 'Early years foundation stage (EYFS)'},
      {id: 3, url: icons.dot_icon, Name: 'Sensory Play'},
      {id: 4, url: icons.dot_icon, Name: 'Enabling Environment'},
      {id: 5, url: icons.dot_icon, Name: '24-Hour CCTV'},
      {id: 6, url: icons.dot_icon, Name: 'Other Learning'},
      {id: 7, url: icons.dot_icon, Name: 'SEND Education'},
      {id: 8, url: icons.dot_icon, Name: 'Funding Spaces'},
    ],
  },
  {
    id: 2,
    header3: 'Featured Nurseries',
    name: 'Happy  Kids  Nursery',

    category: Labels.nursery,
    icon: require('../assets/Images/photos/logo2.png'),
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    category1: Labels.nursery_detail,
    url: [
      require('../assets/Images/photos/Banner.png'),
      require('../assets/Images/photos/Banner.png'),
    ],
    ratings: 4,
    isOpen: false,
    image: icons.feature_icon,
    image1: icons.vector2_icon,
    header: Labels.features,
    header1: Labels.timings,
    header2: Labels.visiting,
    image2: icons.visiting_icon,
    desc: `If you would like to request a tour of the Nursery,please contact the nursery to book in a visit.`,
    contact: 'Thavam Sathasivam',
    timings: [
      {id: 1, day: 'Mon', time: '08:00 to 18:00'},
      {id: 2, day: 'Tue', time: '08:00 to 18:00'},
      {id: 3, day: 'Wed', time: '08:00 to 18:00'},
      {id: 4, day: 'Thu', time: '08:00 to 18:00'},
      {id: 5, day: 'Fri', time: '08:00 to 18:00'},
      {id: 6, day: 'Sat', time: '08:00 to 18:00'},
      {id: 7, day: 'Sun', time: '08:00 to 18:00'},
    ],
    features: [
      {id: 1, url: icons.dot_icon, Name: 'Montessori Education'},
      {id: 2, url: icons.dot_icon, Name: 'Early years foundation stage (EYFS)'},
      {id: 3, url: icons.dot_icon, Name: 'Sensory Play'},
      {id: 4, url: icons.dot_icon, Name: 'Enabling Environment'},
      {id: 5, url: icons.dot_icon, Name: '24-Hour CCTV'},
      {id: 6, url: icons.dot_icon, Name: 'Other Learning'},
      {id: 7, url: icons.dot_icon, Name: 'SEND Education'},
      {id: 8, url: icons.dot_icon, Name: 'Funding Spaces'},
    ],
  },
  {
    id: 3,
    header3: 'Featured Nurseries',
    name: 'Happy  Kids  Nursery',
    url: [
      require('../assets/Images/photos/Banner.png'),
      require('../assets/Images/photos/Banner.png'),
    ],
    category: Labels.nursery,
    icon: require('../assets/Images/photos/montessary.png'),
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    category1: Labels.nursery_detail,
    ratings: 4,

    image: icons.feature_icon,
    image1: icons.vector2_icon,
    contact: 'Thavam Sathasivam',
    isOpen: true,
    header: Labels.features,
    header1: Labels.timings,
    header2: Labels.visiting,
    image2: icons.visiting_icon,
    desc: `If you would like to request a tour of the Nursery,please contact the nursery to book in a visit.`,
    timings: [
      {id: 1, day: 'Mon', time: '08:00 to 18:00'},
      {id: 2, day: 'Tue', time: '08:00 to 18:00'},
      {id: 3, day: 'Wed', time: '08:00 to 18:00'},
      {id: 4, day: 'Thu', time: '08:00 to 18:00'},
      {id: 5, day: 'Fri', time: '08:00 to 18:00'},
      {id: 6, day: 'Sat', time: '08:00 to 18:00'},
      {id: 7, day: 'Sun', time: '08:00 to 18:00'},
    ],
    features: [
      {id: 1, url: icons.dot_icon, Name: 'Montessori Education'},
      {id: 2, url: icons.dot_icon, Name: 'Early years foundation stage (EYFS)'},
      {id: 3, url: icons.dot_icon, Name: 'Sensory Play'},
      {id: 4, url: icons.dot_icon, Name: 'Enabling Environment'},
      {id: 5, url: icons.dot_icon, Name: '24-Hour CCTV'},
      {id: 6, url: icons.dot_icon, Name: 'Other Learning'},
      {id: 7, url: icons.dot_icon, Name: 'SEND Education'},
      {id: 8, url: icons.dot_icon, Name: 'Funding Spaces'},
    ],
  },
];
export const nurseryGroup = [
  {
    id: 1,
    header3: 'Featured Nursery Group',
    category: Labels.nursery_group,

    name: 'St. George Nursery Schools ',
    icon: require('../assets/Images/photos/school1.png'),
    isOpen: true,

    addressline1: '33-37 Wigston Road  ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
  },
  {
    id: 2,
    header3: 'Featured Nursery Group',
    category: Labels.nursery_group,
    name: 'St. George Nursery Schools ',

    icon: require('../assets/Images/photos/school2.png'),
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
    isOpen: false,
  },
];
export const SchoolGroup = [
  {
    id: 1,
    header3: 'Featured School Group',
    name: 'St. George Nursery Schools ',
    category: Labels.school_group,

    icon: require('../assets/Images/photos/school1.png'),
    isOpen: true,
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
  },
  {
    id: 2,
    header3: 'Featured School Group',
    name: 'St. George Nursery Schools ',
    category: Labels.school_group,

    icon: require('../assets/Images/photos/school2.png'),
    isOpen: false,
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
  },
];
export const schools = [
  {
    id: 1,
    header3: 'Featured Schools',
    name: 'Brokers United  Kingdom',
    category: Labels.school,

    icon: require('../assets/Images/photos/school3.png'),
    url: [
      require('../assets/Images/photos/Banner3.png'),
      require('../assets/Images/photos/Banner3.png'),
    ],
    contact: 'Graham Ellis',
    isOpen: false,
    header: Labels.features,
    header1: Labels.timings,
    image: icons.feature_icon,
    image1: icons.vector2_icon,
    header2: Labels.visiting,
    image2: icons.visiting_icon,
    desc: `If you would like to request a tour of the Nursery,please contact the nursery to book in a visit.`,
    category1: Labels.school_detail,
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
    timings: [
      {id: 1, day: 'Mon', time: '08:00 to 18:00'},
      {id: 2, day: 'Tue', time: '08:00 to 18:00'},
      {id: 3, day: 'Wed', time: '08:00 to 18:00'},
      {id: 4, day: 'Thu', time: '08:00 to 18:00'},
      {id: 5, day: 'Fri', time: '08:00 to 18:00'},
      {id: 6, day: 'Sat', time: '08:00 to 18:00'},
      {id: 7, day: 'Sun', time: '08:00 to 18:00'},
    ],
    features: [
      {id: 1, url: icons.dot_icon, Name: 'Montessori Education'},
      {id: 2, url: icons.dot_icon, Name: 'Early years foundation stage (EYFS)'},
      {id: 3, url: icons.dot_icon, Name: 'Sensory Play'},
      {id: 4, url: icons.dot_icon, Name: 'Enabling Environment'},
      {id: 5, url: icons.dot_icon, Name: '24-Hour CCTV'},
      {id: 6, url: icons.dot_icon, Name: 'Other Learning'},
      {id: 7, url: icons.dot_icon, Name: 'SEND Education'},
      {id: 8, url: icons.dot_icon, Name: 'Funding Spaces'},
    ],
  },
  {
    id: 2,
    category: Labels.school,
    header3: 'Featured Schools',
    name: 'Woodcroft Primary School',

    icon: require('../assets/Images/photos/school4.png'),
    isOpen: true,
    header: Labels.features,
    header1: Labels.timings,
    image: icons.feature_icon,
    image1: icons.vector2_icon,
    contact: 'Graham Ellis',
    url: [
      require('../assets/Images/photos/Banner3.png'),
      require('../assets/Images/photos/Banner3.png'),
    ],
    category1: Labels.school_detail,
    header2: Labels.visiting,
    image2: icons.visiting_icon,
    desc: `If you would like to request a tour of the Nursery,please contact the nursery to book in a visit.`,
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
    timings: [
      {id: 1, day: 'Mon', time: '08:00 to 18:00'},
      {id: 2, day: 'Tue', time: '08:00 to 18:00'},
      {id: 3, day: 'Wed', time: '08:00 to 18:00'},
      {id: 4, day: 'Thu', time: '08:00 to 18:00'},
      {id: 5, day: 'Fri', time: '08:00 to 18:00'},
      {id: 6, day: 'Sat', time: '08:00 to 18:00'},
      {id: 7, day: 'Sun', time: '08:00 to 18:00'},
    ],
    features: [
      {id: 1, url: icons.dot_icon, Name: 'Montessori Education'},
      {id: 2, url: icons.dot_icon, Name: 'Early years foundation stage (EYFS)'},
      {id: 3, url: icons.dot_icon, Name: 'Sensory Play'},
      {id: 4, url: icons.dot_icon, Name: 'Enabling Environment'},
      {id: 5, url: icons.dot_icon, Name: '24-Hour CCTV'},
      {id: 6, url: icons.dot_icon, Name: 'Other Learning'},
      {id: 7, url: icons.dot_icon, Name: 'SEND Education'},
      {id: 8, url: icons.dot_icon, Name: 'Funding Spaces'},
    ],
  },
  {
    id: 3,
    header: 'Featured Schools',
    category: Labels.school,
    name: 'Happy  Kids  Nursery',

    icon: require('../assets/Images/photos/school3.png'),
    url: [
      require('../assets/Images/photos/Banner3.png'),
      require('../assets/Images/photos/Banner3.png'),
    ],
    category1: Labels.school_detail,
    isOpen: true,
    image: icons.feature_icon,
    image1: icons.vector2_icon,
    header: Labels.features,
    header1: Labels.timings,
    contact: 'Graham Ellis',
    header2: Labels.visiting,
    image2: icons.visiting_icon,
    desc: `If you would like to request a tour of the Nursery,please contact the nursery to book in a visit.`,
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
    timings: [
      {id: 1, day: 'Mon', time: '08:00 to 18:00'},
      {id: 2, day: 'Tue', time: '08:00 to 18:00'},
      {id: 3, day: 'Wed', time: '08:00 to 18:00'},
      {id: 4, day: 'Thu', time: '08:00 to 18:00'},
      {id: 5, day: 'Fri', time: '08:00 to 18:00'},
      {id: 6, day: 'Sat', time: '08:00 to 18:00'},
      {id: 7, day: 'Sun', time: '08:00 to 18:00'},
    ],
    features: [
      {id: 1, url: icons.dot_icon, Name: 'Montessori Education'},
      {id: 2, url: icons.dot_icon, Name: 'Early years foundation stage (EYFS)'},
      {id: 3, url: icons.dot_icon, Name: 'Sensory Play'},
      {id: 4, url: icons.dot_icon, Name: 'Enabling Environment'},
      {id: 5, url: icons.dot_icon, Name: '24-Hour CCTV'},
      {id: 6, url: icons.dot_icon, Name: 'Other Learning'},
      {id: 7, url: icons.dot_icon, Name: 'SEND Education'},
      {id: 8, url: icons.dot_icon, Name: 'Funding Spaces'},
    ],
  },
];
export const Nannies = [
  {
    id: 1,
    header3: 'Featured Nannies',
    name: 'Brokers United  Kingdom',
    icon: require('../assets/Images/photos/school3.png'),

    category: Labels.nannies,
    url: [
      require('../assets/Images/photos/Banner4.png'),
      require('../assets/Images/photos/Banner4.png'),
    ],
    contact: 'Thavam Sathasivam ',
    category1: Labels.nannies_detail,
    isOpen: false,
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
  },
  {
    id: 2,
    header3: 'Featured Nannies',
    name: 'Woodcroft Primary School',

    category: Labels.nannies,
    category1: Labels.nannies_detail,
    icon: require('../assets/Images/photos/school4.png'),
    contact: 'Thavam Sathasivam ',
    url: [
      require('../assets/Images/photos/Banner4.png'),
      require('../assets/Images/photos/Banner4.png'),
    ],
    isOpen: true,
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
  },
  {
    id: 3,
    header3: 'Featured Nannies',
    category: Labels.nannies,
    name: 'Happy  Kids  Nursery',

    category1: Labels.nannies_detail,
    icon: require('../assets/Images/photos/school3.png'),
    contact: 'Thavam Sathasivam ',
    url: [
      require('../assets/Images/photos/Banner4.png'),
      require('../assets/Images/photos/Banner4.png'),
    ],
    isOpen: true,
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
  },
];
export const Companies = [
  {
    id: 1,
    header3: 'Featured Companies',
    category: Labels.companies,

    name: 'Brokers United  Kingdom',
    category1: Labels.company_detail,
    icon: require('../assets/Images/photos/Company1.png'),
    contact: 'Thavam Sathasivam ',
    isOpen: false,
    url: [
      require('../assets/Images/photos/Banner6.png'),
      require('../assets/Images/photos/Banner6.png'),
    ],
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
    image: icons.feature_icon,
    image1: icons.vector2_icon,
    header: Labels.features,
    header1: Labels.timings,
    timings: [
      {id: 1, day: 'Mon', time: '08:00 to 18:00'},
      {id: 2, day: 'Tue', time: '08:00 to 18:00'},
      {id: 3, day: 'Wed', time: '08:00 to 18:00'},
      {id: 4, day: 'Thu', time: '08:00 to 18:00'},
      {id: 5, day: 'Fri', time: '08:00 to 18:00'},
      {id: 6, day: 'Sat', time: '08:00 to 18:00'},
      {id: 7, day: 'Sun', time: '08:00 to 18:00'},
    ],
    features: [
      {id: 1, url: icons.dot_icon, Name: 'Customer Support'},
      {id: 2, url: icons.dot_icon, Name: 'Specialist'},
      {id: 3, url: icons.dot_icon, Name: 'Bulk Discounts'},
      {id: 4, url: icons.dot_icon, Name: 'Custom Solutions'},
      {id: 5, url: icons.dot_icon, Name: 'Consulting'},
      {id: 6, url: icons.dot_icon, Name: 'Managed Services'},
    ],
  },
  {
    id: 2,
    header3: 'Featured Companies',
    category: Labels.companies,

    name: 'Woodcroft Primary School',
    category1: Labels.company_detail,
    icon: require('../assets/Images/photos/Company2.png'),
    url: [
      require('../assets/Images/photos/Banner6.png'),
      require('../assets/Images/photos/Banner6.png'),
    ],
    contact: 'Thavam Sathasivam ',
    isOpen: true,
    image: icons.feature_icon,
    image1: icons.vector2_icon,
    header: Labels.features,
    header1: Labels.timings,
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
    timings: [
      {id: 1, day: 'Mon', time: '08:00 to 18:00'},
      {id: 2, day: 'Tue', time: '08:00 to 18:00'},
      {id: 3, day: 'Wed', time: '08:00 to 18:00'},
      {id: 4, day: 'Thu', time: '08:00 to 18:00'},
      {id: 5, day: 'Fri', time: '08:00 to 18:00'},
      {id: 6, day: 'Sat', time: '08:00 to 18:00'},
      {id: 7, day: 'Sun', time: '08:00 to 18:00'},
    ],

    features: [
      {id: 1, url: icons.dot_icon, Name: 'Customer Support'},
      {id: 2, url: icons.dot_icon, Name: 'Specialist'},
      {id: 3, url: icons.dot_icon, Name: 'Bulk Discounts'},
      {id: 4, url: icons.dot_icon, Name: 'Custom Solutions'},
      {id: 5, url: icons.dot_icon, Name: 'Consulting'},
      {id: 6, url: icons.dot_icon, Name: 'Managed Services'},
    ],
  },
  {
    id: 3,
    header3: 'Featured Companies',
    category: Labels.companies,

    name: 'Happy  Kids  Nursery',
    category1: Labels.company_detail,
    icon: require('../assets/Images/photos/school3.png'),
    url: [
      require('../assets/Images/photos/Banner6.png'),
      require('../assets/Images/photos/Banner6.png'),
    ],
    isOpen: true,
    image: icons.feature_icon,
    image1: icons.vector2_icon,
    header: Labels.features,
    header1: Labels.timings,
    contact: 'Thavam Sathasivam ',
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
    timings: [
      {id: 1, day: 'Mon', time: '08:00 to 18:00'},
      {id: 2, day: 'Tue', time: '08:00 to 18:00'},
      {id: 3, day: 'Wed', time: '08:00 to 18:00'},
      {id: 4, day: 'Thu', time: '08:00 to 18:00'},
      {id: 5, day: 'Fri', time: '08:00 to 18:00'},
      {id: 6, day: 'Sat', time: '08:00 to 10:00'},
      {id: 7, day: 'Sun', time: '08:00 to 18:00'},
    ],
    features: [
      {id: 1, url: icons.dot_icon, Name: 'Customer Support'},
      {id: 2, url: icons.dot_icon, Name: 'Specialist'},
      {id: 3, url: icons.dot_icon, Name: 'Bulk Discounts'},
      {id: 4, url: icons.dot_icon, Name: 'Custom Solutions'},
      {id: 5, url: icons.dot_icon, Name: 'Consulting'},
      {id: 6, url: icons.dot_icon, Name: 'Managed Services'},
    ],
  },
];
export const Tutors = [
  {
    id: 1,
    header3: 'Featured Tutors',
    category: Labels.tutors,
    name: 'Brokers United  Kingdom',

    category1: Labels.tutor_detail,
    icon: require('../assets/Images/photos/Tutor1.png'),
    contact: 'Thavam Sathasivam ',
    url: [
      require('../assets/Images/photos/Banner5.png'),
      require('../assets/Images/photos/Banner5.png'),
    ],
    isOpen: true,
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
    image: icons.feature_icon,

    header: Labels.features,

    features: [{id: 1, url: icons.dot_icon, Name: 'Private Tutor'}],
  },
  {
    id: 2,
    header3: 'Featured Tutors',
    category: Labels.tutors,
    category1: Labels.tutor_detail,
    name: 'Woodcroft Primary School',

    icon: require('../assets/Images/photos/Tutor2.png'),
    url: [
      require('../assets/Images/photos/Banner5.png'),
      require('../assets/Images/photos/Banner5.png'),
    ],
    isOpen: false,
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
    header: Labels.features,
    image: icons.feature_icon,

    contact: 'Thavam Sathasivam ',
    features: [{id: 1, url: icons.dot_icon, Name: 'Private Tutor'}],
  },
  {
    id: 3,
    header3: 'Featured Tutors',
    category: Labels.tutors,
    category1: Labels.tutor_detail,
    name: 'Happy  Kids  Nursery',

    url: [
      require('../assets/Images/photos/Banner5.png'),
      require('../assets/Images/photos/Banner5.png'),
    ],
    icon: require('../assets/Images/photos/school3.png'),
    isOpen: true,
    addressline1: '33-37 Wigston Road ',
    addressline2: ' Leicester, LE2 5QF',
    ratings: 4,
    header: Labels.features,
    image: icons.feature_icon,

    contact: 'Thavam Sathasivam ',
    features: [{id: 1, url: icons.dot_icon, Name: 'Private Tutor'}],
  },
];
const HomeScreen = () => {
  const images = [
    {id: 1, url: require('../assets/Images/photos/Banner_1.png')},
    {id: 2, url: require('../assets/Images/photos/Banner_1.png')},
  ];
  const navigation = useNavigation();

  const HomeScreenHeader = () => {
    return (
      <>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello,</Text>
          <Text style={styles.headerTitle}>Welcome to Nurseries & Schools</Text>

          {/* Search Box */}
          <TouchableOpacity
            style={styles.searchBox}
            onPress={() => navigation.navigate('Search')}>
            <Image source={icons.search_icon} style={styles.searchIcon} />

            <TextInput
              style={styles.searchInput}
              placeholder="Search by name, area or postal code"
              placeholderTextColor={Colors.white}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };
  const carouselSection = () => {
    return (
      <View style={styles.carouselSection}>
        <FlatList
          data={images}
          renderItem={({item}) => (
            <View style={styles.carouselItem}>
              <Image source={item.url} style={styles.carouselImage} />
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {HomeScreenHeader()}
      <ScrollView>
        {/* Carousel Section */}
        {carouselSection()}

        {/* Featured Nurseries Section */}

        <HorizontalScroll data={nursery} />
        {/* Featured Nursery Group Section */}

        <VerticalScroll data={nurseryGroup} />
        {/* {Labels.featured_schools} Section */}
        <HorizontalScroll data={schools} />

        {/* Featured School Group Section */}
        <VerticalScroll data={SchoolGroup} />

        {/* Featured Nannies Section */}
        <HorizontalScroll data={Nannies} />

        {/* Featured Companies Section */}
        <HorizontalScroll data={Companies} />

        {/* Featured Tutors Section */}
        <HorizontalScroll data={Tutors} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
