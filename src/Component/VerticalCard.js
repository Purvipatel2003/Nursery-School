import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';
import Labels from '../Helper/Labels';
import styles from '../Styles/VerticalcardStyle';
const VerticalCard = () => {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);
  const data1 = [
    {id: 1, header1: Labels.registration_required, desc: 'No'},
    {id: 2, header1: Labels.variable_event, desc: 'No'},

    {id: 3, header1: Labels.free_event, desc: 'No'},
  ];
  const data2 = [
    {
      id: 1,
      header1: Labels.website,
      desc: 'www.montyhammondandsonsfunfairs.co.uk',
    },

    {id: 2, header1: Labels.email, desc: 'office@mhandsons.co.uk'},
    {id: 3, header1: Labels.venue, desc: 'Southgate Park'},
    {id: 4, header1: Labels.address, desc: 'Southgate Park, Southgate Avenue'},
    {id: 5, header1: Labels.city, desc: 'Crawley'},
    {id: 6, header1: Labels.postcode, desc: 'RH10 1UZ'},
  ];
  const fullDescription =
    'Monty Hammond & Sons Funfairs presents the The Crawley Funfair by London Carnival Funfairs.';
  const truncatedDescription =
    'Monty Hammond & Sons Funfairs presents the The Crawley Funfair by London Carnival Funfairs. Monty Hammond & Sons Funfairs presents the The Crawley Funfair by London Carnival Funfairs ';
  const Description = () => {
    return (
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.desc}>{Labels.description}</Text>
        </View>
        <View>
          <Text style={styles.detaildesc}>
            {isExpanded ? fullDescription : truncatedDescription}
          </Text>
        </View>
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          <Text style={styles.readMoreText}>
            {isExpanded ? 'Read More' : 'Read Less'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const HorizontalCard = () => {
    return (
      <View>
        <View style={styles.wrapper1}>
          <View>
            <Image
              source={require('../assets/Images/photos/MaskGroup6.png')}
              style={styles.image}
            />
          </View>
          <View>
            <View style={styles.box1}>
              <Text style={styles.title}>24th Jul to 1st Aug, 2021</Text>
            </View>
            <Text style={styles.text}>The Crawley Funfair - </Text>
            <Text style={styles.text}>by London Carnival </Text>
            <Text style={styles.text}>Funfairs</Text>
          </View>
        </View>
      </View>
    );
  };
  const FirstFlatList = () => {
    return (
      <FlatList
        data={data1}
        renderItem={({item}) => (
          <View>
            <Text style={styles.title2}>{item.header1}</Text>
            <Text style={styles.detaildesc}>{item.desc}</Text>
            <View style={styles.line}></View>
          </View>
        )}
        // horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    );
  };
  const SecondFlatList = () => {
    return (
      <View style={styles.cardContainer}>
        <FlatList
          data={data2}
          renderItem={({item}) => (
            <View>
              <Text style={styles.title2}>{item.header1}</Text>
              <Text style={styles.detaildesc}>{item.desc}</Text>
              <View style={styles.line}></View>
            </View>
          )}
          // horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {HorizontalCard()}
        {Description()}
        <View style={styles.box}>
          <View style={styles.wrapper1}>
            <Image source={icons.contact_icon} style={styles.contact_icon} />
            <Text style={styles.title1}>{Labels.event_by}</Text>
          </View>
          <View>
            <Text style={styles.detaildesc}>Monty Hammond & Sons Funfairs</Text>
            <View style={styles.line}></View>
          </View>
          {FirstFlatList()}
        </View>
        {SecondFlatList()}
      </ScrollView>
    </View>
  );
};

export default VerticalCard;
