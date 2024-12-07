import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import Colors from '../assets/Colors';
import styles from '../Styles/NurseryStyle';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';
import {Rating} from 'react-native-ratings';
import Labels from '../Helper/Labels';
const Nurseries = ({route}) => {
  const navigation = useNavigation();
  const {state} = route.params;
  const NureseryHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image source={icons.search_icon_back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.haederText}>{state[0]?.category}</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.searchBox}>
            <Image source={icons.search_icon} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder={`Search for ${state[0]?.category}`}
              placeholderTextColor={Colors.white}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
            <Image source={icons.filter_icon} style={styles.filter_icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {NureseryHeader()}
      <View>
        <View style={styles.featuredSection}>
          <FlatList
            data={state}
            renderItem={({item}) => (
              <View style={styles.cardContainer1}>
                <View style={styles.card}>
                  <Image source={item.icon} style={styles.nurseryImage1} />
                  <Text style={styles.nurseryName1}>{item.name}</Text>
                  <Text
                    style={styles.address}
                    numberOfLines={2}
                    ellipsizeMode="tail">
                    {item.addressline1}
                  </Text>
                  <Text
                    style={styles.address1}
                    numberOfLines={2}
                    ellipsizeMode="tail">
                    {item.addressline2}
                  </Text>
                </View>
                <View style={styles.cardContent}>
                  <TouchableOpacity
                    style={[
                      styles.statusButton1,
                      {
                        backgroundColor: item.isOpen
                          ? Colors.lightgreen
                          : Colors.lightred,
                      },
                    ]}
                    onPress={() => {}}>
                    <Text
                      style={[
                        styles.statusText,
                        {
                          color: item.isOpen ? Colors.green : Colors.red,
                        },
                      ]}>
                      {item.isOpen ? 'Open' : 'Closed'}
                    </Text>
                  </TouchableOpacity>
                  <Rating
                    type="custom"
                    imageSize={15}
                    startingValue={item.ratings}
                    readonly
                    style={{marginVertical: 1}}
                  />

                  <TouchableOpacity onPress={() => {}} style={styles.button}>
                    <Text style={styles.emailButton}>{Labels.email_us} </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
            // horizontal={true}
            // showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Nurseries;
