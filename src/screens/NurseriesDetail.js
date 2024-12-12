import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../assets/Colors.js';
import icons from '../Helper/icons';

import styles from '../Styles/NurseryDetailStyle';
import {useNavigation} from '@react-navigation/native';
import {Rating} from 'react-native-ratings';
import {nursery} from './HomeScreen.js';
import Labels from '../Helper/Labels.js';

const NurseriesDetail = ({route,props}) => {
  // const props = route.params.nursery;
  // // console.log(props);

  const data1 = [
    {id: 1, url: icons.award_icon, name1: 'Awards', navigationplace: ' '},
    {
      id: 2,
      url: icons.review_icon,
      name1: 'Reviews',
      navigationplace: 'Review',
    },
    {id: 3, url: icons.job_icon, name1: 'Jobs', navigationplace: ' '},
    {
      id: 4,
      url: icons.contact_icon,
      name1: 'Contact Us',
      navigationplace: 'Contact',
    },
    {
      id: 5,
      url: icons.news_icon,
      name1: 'News & Events',
      navigationplace: 'News',
    },
    {
      id: 6,
      url: icons.child_icon,
      name1: 'Child Vacancies',
      navigationplace: ' ',
    },
    {
      id: 7,
      url: icons.staff_icon,
      name1: 'Staff',
      navigationplace: 'Counter',
    },
    {
      id: 8,
      url: icons.faq_icon,
      name1: 'FAQs',
      navigationplace: 'FAQs',
    },
  ];
  const [isExpanded, setIsExpanded] = useState(false);
  const fullDescription =
    'A Montessori environment that enables children to develop their potential to the fullest during the formative period. It provides a structured approach to education where children learn through exploration and hands-on activities guided by trained educators.';
  const truncatedDescription =
    'A Montessori environment that enables children to develop their potential to the fullest during the formative period...';
  const navigation = useNavigation();
  const {state} = route.params;

  console.log(state);

  const shouldRenderLine = data => {
    return data && data.length > 0;
  };

  const NurseryDetailHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.search_icon_back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{state?.category1}</Text>
        </View>
      </View>
    );
  };
  const HorizontalCard = () => {
    return (
      <View style={styles.cardContainer1}>
        <View style={styles.card}>
          <Image source={state?.icon} style={styles.nurseryImage1} />
          <Text style={styles.nurseryName1}>{state?.name}</Text>
          <Text style={styles.address} numberOfLines={2} ellipsizeMode="tail">
            {state?.addressline1}
          </Text>
          <Text style={styles.address1} numberOfLines={2} ellipsizeMode="tail">
            {state?.addressline2}
          </Text>
        </View>
        <View style={styles.cardContent}>
          <TouchableOpacity style={styles.openbutton}>
            <Text style={styles.buttonText}>Open</Text>
          </TouchableOpacity>
          <Rating
            type="custom"
            imageSize={15}
            startingValue="4"
            readonly
            style={{marginVertical: 1.5, marginTop: 10}}
          />
          <View style={styles.buttonsContainer1}>
            {/* Phone Button */}
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <View style={styles.phoneButton}>
                <Image source={icons.phone_icon} style={styles.buttonIcon} />
              </View>
            </TouchableOpacity>

            {/* Vertical Line */}
            <View style={styles.line1}></View>

            {/* Map Button */}
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <View style={styles.mapButton}>
                <Image source={icons.map_icon} style={styles.buttonIcon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
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
            {isExpanded ? 'Read Less' : 'Read More'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const VerticalCard = () => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.wrapper1}>
          <Image source={icons.contact_us} style={styles.image1} />
          <Text style={styles.desc1}>{Labels.contact_person_name} </Text>
        </View>
        <View>
          <Text style={styles.detaildesc}>{state?.contact}</Text>
        </View>
        {state?.contact && <View style={styles.line}></View>}
        {shouldRenderLine(state?.features) && (
          <>
            <View style={styles.wrapper1}>
              <Image source={state.image} style={styles.image1} />
              <Text style={styles.desc1}>{state.header} </Text>
            </View>
            <FlatList
              data={state?.features || []}
              renderItem={({item}) => (
                <View style={styles.box1}>
                  <Image source={item.url} style={styles.smallImage} />
                  <Text style={styles.desc2}>{item.Name}</Text>
                </View>
              )}
              // horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.line}></View>
          </>
        )}

        {shouldRenderLine(state?.timings) && (
          <>
            <View style={styles.wrapper1}>
              <Image source={state.image1} style={styles.image1} />
              <Text style={styles.desc1}>{state.header1} </Text>
            </View>
            <FlatList
              data={state?.timings || []}
              renderItem={({item}) => (
                <View style={styles.box1}>
                  <Text style={styles.desc4}>{item.day}</Text>
                  <Text style={styles.desc2}>{item.time}</Text>
                </View>
              )}
              // horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.line}></View>
          </>
        )}
        {shouldRenderLine(state?.desc) && (
          <>
            <View style={styles.wrapper1}>
              <Image source={state.image2} style={styles.image1} />
              <Text style={styles.desc1}>{state.header2} </Text>
            </View>
            <View>
              <Text
                style={styles.detaildesc3}
                numberOfLines={5}
                ellipsizeMode="tail">
                {state.desc}
              </Text>
            </View>
          </>
        )}
      </View>
    );
  };
  const Buttons = () => {
    return (
      <View style={styles.button1}>
        <FlatList
          data={data1}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.navigationplace)}>
              <View style={styles.wrapper2}>
                <Image source={item.url} style={styles.image1} />
                <Text style={styles.buttonName}>{item.name1}</Text>
                <Image source={icons.drop_down_icon} style={styles.drop_icon} />
              </View>
              <View style={styles.line}></View>
            </TouchableOpacity>
          )}
          // horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  const Carousel = () => {
    return (
      <TouchableOpacity
        style={styles.carouselSection}
        onPress={() => navigation.navigate('PhotoGallery')}>
        <FlatList
          data={state.url}
          renderItem={({item}) => (
            <View style={styles.carouselItem}>
              <Image source={item} style={styles.carouselImage} />
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </TouchableOpacity>
    );
  };
  const SubmitButton = () => {
    return (
      <View style={styles.box2}>
        <TouchableOpacity onPress={() => {}} style={styles.button2}>
          <Text style={styles.text}> {Labels.brochure}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.button3}>
          <Text style={styles.text1}>{Labels.email_us}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {NurseryDetailHeader()}
      <ScrollView contentContainerStyle={{flexGrow: 1, marginBottom: 30}}>
        {Carousel()}
        {HorizontalCard()}
        {Description()}
        {VerticalCard()}
        {Buttons() }
      </ScrollView>
      {SubmitButton()}
    </View>
  );
};

export default NurseriesDetail;
