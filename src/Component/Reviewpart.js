import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Rating} from 'react-native-ratings';
import styles from '../Styles/ReviewStyle';
const Reviewpart = ({data}) => {
  const [expandedIds, setExpandedIds] = useState([]);
  const toggleExpand = id => {
    setExpandedIds(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id],
    );
  };
  const fullDescription = `Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy.`;
  const truncatedDescription =
    'A Montessori environment that enables children to develop their potential to the fullest during the ...';
  return (
    <View style={styles.box}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.button1}>
            <View>
              <Text style={styles.nurseryName}>{item.name}</Text>
              <Rating
                type="custom"
                imageSize={15}
                startingValue={item.reviews}
                readonly
                style={{marginVertical: 1, marginRight: 250}}
              />
              <View>
                <Text style={styles.detaildesc}>
                  {expandedIds.includes(item.id)
                    ? fullDescription
                    : truncatedDescription}
                </Text>
              </View>
              <TouchableOpacity onPress={() => toggleExpand(item.id)}>
                <Text style={styles.readMoreText}>
                  {expandedIds.includes(item.id) ? 'Read Less' : 'Read More'}
                </Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
            </View>
            <View>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        // horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Reviewpart;
