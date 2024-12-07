import {View, Text, TouchableOpacity, Image} from 'react-native';
import icons from '../Helper/icons';
import React, {useState} from 'react'; // Import useState hook
import styles from '../Styles/FilterStyle';
import {useNavigation} from '@react-navigation/native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Labels from '../Helper/Labels';

const Filter = () => {
  const navigation = useNavigation();

  // Data for your nurseries
  const data = [
    {id: 1, Name: 'St. George Nursery Schools'},
    {id: 2, Name: 'Happy Kids Nursery'},
    {id: 3, Name: 'Bright Spark Montessori'},
    {id: 4, Name: 'Woodcroft Primary School'},
    {id: 6, Name: 'Brokers United Kingdom'},
    {id: 7, Name: 'St. George Nursery Schools'},
    {id: 8, Name: 'Woodcroft Primary School'},
    {id: 9, Name: 'Brokers United Kingdom'},
    {id: 10, Name: 'St. George Nursery Schools'},
    {id: 11, Name: 'Woodcroft Primary School'},
    {id: 12, Name: 'Brokers United Kingdom'},
    {id: 13, Name: 'St. George Nursery Schools'},
  ];

  // State to store selected checkboxes
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxToggle = id => {
    setSelectedItems(prevState => {
      if (prevState.includes(id)) {
        return prevState.filter(item => item !== id);
      } else {
        return [...prevState, id];
      }
    });
  };
  const FilterHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.search_icon_back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{Labels.filter}</Text>
        </View>
      </View>
    );
  };
  const button = () => {
    return (
      <View style={styles.box1}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.text}> {Labels.reset}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack('Nursery')}
          style={styles.button1}>
          <Text style={styles.text1}>{Labels.apply}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {FilterHeader()}
        <View style={styles.box}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={styles.card}>
                <View style={styles.checkboxdetail}>
                  <Text style={styles.name}>{item.Name}</Text>

                  <TouchableOpacity
                    onPress={() => handleCheckboxToggle(item.id)}>
                    <Image
                      source={
                        selectedItems.includes(item.id)
                          ? icons.checked_icon
                          : icons.checkbox_icon
                      }
                      style={styles.checkbox}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.line}></View>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </ScrollView>
      {button()}
    </View>
  );
};

export default Filter;
