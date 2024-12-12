import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import icons from '../Helper/icons.js';
import Colors from '../assets/Colors.js';
import {useNavigation} from '@react-navigation/native';
import Labels from '../Helper/Labels.js';
import styles from '../Styles/HorizontalScrollStyle.js';
const HorizontalScroll = ({data, header}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.featuredSection}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{data[0].header3}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Nursery', {
              state: data,
            })
          }>
          <Text style={styles.viewAllText}>{Labels.view_all}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() =>
                navigation.navigate('NurseyDetail', {state: item})
              }>
              <Image source={item.icon} style={styles.nurseryImage} />
              <Text
                style={styles.nurseryName}
                numberOfLines={2}
                ellipsizeMode="tail">
                {item.name}
              </Text>
              <View style={styles.cardContent}>
                <TouchableOpacity
                  style={[
                    styles.statusButton,
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
                <View style={styles.line}></View>
                <View style={styles.buttonsContainer}>
                  {/* Phone Button */}
                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <View style={styles.phoneButton}>
                      <Image
                        source={icons.phone_icon}
                        style={styles.buttonIcon}
                      />
                    </View>
                  </TouchableOpacity>

                  {/* Vertical Line */}
                  <View style={styles.line1}></View>

                  {/* Map Button */}
                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <View>
                      <Image
                        source={icons.map_icon}
                        style={styles.buttonIcon}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HorizontalScroll;
