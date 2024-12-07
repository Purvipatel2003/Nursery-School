import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';
import styles from '../Styles/ParentStyle';
import Labels from '../Helper/Labels';
import Vertical from './Vertical';
const ParentsGuide = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      image: require('../assets/Images/photos/MaskGroup8.png'),
      title: '05 Mins Read',
      title1: 'Educational Technology:',
      title2: 'The Advantages and',
      title3: 'Disadvantages',
      date: '17 Jun',
      navigationplace:'ChildDevelop',
    },
    {
      id: 2,
      image: require('../assets/Images/photos/MaskGroup9.png'),
      title: '02 Mins Read',
      title1: 'Educational Technology:',
      title2: 'The Advantages and',
      title3: 'Disadvantages',
      date: '10 Jun',
      navigationplace:'ChildDevelop',
    },
    {
      id: 3,
      image: require('../assets/Images/photos/MaskGroup10.png'),
      title: '03 Mins Read',
      title1: 'How to Pick the Perfect ',
      title2: 'Nanny for Your Child',
      date: '5 Jun',
      navigationplace:'ChildDevelop',
    },
    {
      id: 4,
      image: require('../assets/Images/photos/MaskGroup12.png'),
      title: '05 Mins Read',
      title1: 'Educational Technology:',
      title2: 'The Advantages and',
      title3: 'Disadvantages',
      date: '29 May',
      navigationplace:'ChildDevelop',
    },
    {
      id: 5,
      image: require('../assets/Images/photos/MaskGroup15.png'),
      title: '02 Mins Read',
      title1: 'Educational Technology:',
      title2: 'The Advantages and',
      title3: 'Disadvantages',
      date: '21 May',
      navigationplace:'ChildDevelop',
    },
    {
      id: 6,
      image: require('../assets/Images/photos/MaskGroup5.png'),
      title: '02 Mins Read',
      title1: 'Educational Technology:',
      title2: 'The Advantages and',
      title3: 'Disadvantages',
      date: '21 May',
      navigationplace:'ChildDevelop',
    },
  ];
  const ParentsGuideHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.search_icon_back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{Labels.parent_guide}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {ParentsGuideHeader()}
      <Vertical data={data}/>
    </View>
  );
};

export default ParentsGuide;
