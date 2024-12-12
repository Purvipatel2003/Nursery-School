import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import icons from '../Helper/icons';
import Colors from '../assets/Colors';
import {useNavigation} from '@react-navigation/native';
import Labels from '../Helper/Labels.js';
import styles from '../Styles/VerticalScrollStyle';

const VerticalScroll = ({data}) => {
  const navigation = useNavigation();
  const ViewAll = () => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{data[0].header3}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Nursery', {state: data})}>
          <Text style={styles.viewAllText}>{Labels.view_all}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.featuredSection}>
        {ViewAll()}

        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.cardContainer1}>
              <View style={styles.card}>
                <Image source={item.icon} style={styles.nurseryImage1} />
                <Text style={styles.nurseryName1} numberOfLines={2} ellipsizeMode="tail">{item.name}</Text>
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

                <View style={styles.buttonsContainer1}>
                  {/* Phone Button */}
                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Image
                      source={icons.phone_icon}
                      style={styles.buttonIcon}
                    />
                  </TouchableOpacity>

                  {/* Vertical Line */}
                  <View style={styles.line1}></View>

                  {/* Map Button */}
                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Image source={icons.map_icon} style={styles.buttonIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          // horizontal={true}
          // showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default VerticalScroll;
