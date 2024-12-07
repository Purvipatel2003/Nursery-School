import {Image, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../Styles/SearchStyle';

import icons from '../Helper/icons.js';
import {SelectList} from 'react-native-dropdown-select-list';
import Colors from '../assets/Colors.js';
import {useNavigation} from '@react-navigation/native';
import Labels from '../Helper/Labels.js';
const Search = () => {
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: 'Nursery1'},
    {key: '2', value: 'Nursery2'},
    {key: '3', value: 'Nursery3'},
  ];
  const SearchHeader = () => {
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.headerText}>{Labels.search}</Text>
        </View>
        <View style={styles.searchBox}>
          <Image source={icons.search_grey_icon} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name, area or postal code"
            placeholderTextColor={Colors.darkgrey}
          />
        </View>
      </>
    );
  };
  const Selectlist = () => {
    return (
      <View style={styles.dropdown}>
        <SelectList
          data={data}
          setSelected={setSelected}
          dropdownStyles={{
            backgroundColor: Colors.white,
            borderColor: Colors.white,
          }}
          dropdownTextStyles={{color: Colors.darkgrey}}
          placeholder="Search for Nurseries"
          placeholderTextColor={{color: Colors.gray}}
          boxStyles={{
            borderColor: Colors.white,
            borderRadius: 10,
          }}
          inputStyles={{color: Colors.darkgrey}}
        />
      </View>
    );
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {SearchHeader()}
      {Selectlist()}
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => navigation.goBack('Nursery')}>
          <Text style={styles.Search}>{Labels.search}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <Image
          source={require('../assets/Images/photos/Group.png')}
          style={styles.group_icon}
        />
      </View>
    </View>
  );
};

export default Search;
