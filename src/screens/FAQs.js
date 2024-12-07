import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import icons from '../Helper/icons';
import Colors from '../assets/Colors';
import {useNavigation} from '@react-navigation/native';
import Collapsible from 'react-native-collapsible';
import styles from '../Styles/FAQStyle';
import Labels from '../Helper/Labels';
const FAQs = () => {
  const [activeSection, setActiveSection] = useState(null);

  const data = [
    {
      id: 1,
      title: '1. Lorem Ipsum is simply dummy text',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    },
    {
      id: 2,
      title: '2. Lorem Ipsum is simply dummy text',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.`,
    },
    {
      id: 3,
      title: '3. Lorem Ipsum is simply dummy text',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.`,
    },
    {
      id: 4,
      title: '4. Lorem Ipsum is simply dummy text',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.`,
    },
    {
      id: 5,
      title: '5. Lorem Ipsum is simply dummy text',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.`,
    },
    {
      id: 6,
      title: '6. Lorem Ipsum is simply dummy text',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.`,
    },
  ];
  const toggleSection = id => {
    setActiveSection(prevActive => (prevActive === id ? null : id));
  };
  const FAQHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('Nursery')}>
            <Image source={icons.search_icon_back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{Labels.faq}</Text>
        </View>
      </View>
    );
  };
  const renderItem = ({item}) => (
    <View style={styles.container1}>
      <TouchableOpacity
        style={styles.wrapper1}
        onPress={() => toggleSection(item.id)}>
        <Text style={styles.headerText1}>{item.title}</Text>
        <Image
          source={
            activeSection === item.id ? icons.up_icon : icons.drop_down_icon
          }
          style={styles.drop_down_icon}
        />
      </TouchableOpacity>
      <Collapsible collapsed={activeSection !== item.id}>
        <View style={styles.line}></View>
        <View>
          <Text
            style={styles.contentText}
            numberOfLines={5}
            ellipsizeMode="tail">
            {item.content}
          </Text>
        </View>
      </Collapsible>
    </View>
  );

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {FAQHeader()}
      <View style={styles.dropdown}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}

          // ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </View>
  );
};

export default FAQs;
