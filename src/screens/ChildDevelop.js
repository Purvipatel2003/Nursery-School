import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from '../Styles/ChildDevelopStyles';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import Labels from '../Helper/Labels';
const ChildDevelop = () => {
  const navigation = useNavigation();
  const ChildDevelopHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.search_icon_back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{Labels.child_develop}</Text>
        </View>
      </View>
    );
  };
  const data =
    '<p style="font-size:16px; font-weight:600;font-color:black;margin-left:15px;">Child Developmental Milestones</p>\r\n<p style="margin:15 15px; font-size:14px;font-weight:400; text-align:justify; color:gray1">How your child plays, speaks, and moves tell us a lot about their development. Developmental milestones are things that most children can do at a certain stage. These developmental milestones can be broken down into five stages:</p>\r\n<p style="font-size:14px;font-weight:400;color:gray1;margin-left:30px; margin-top:-8px;">Newborn (0-3 months)</p>\r\n<p style="font-size:14px;font-weight:400;color:gray1;margin-left:30px; margin-top:-8px;">Infant (3-12 months)</p>\r\n<p style="font-size:14px;font-weight:400;color:gray1;margin-left:30px; margin-top:-8px;"> Toddler (1-3 years) </p>\r\n<p style="font-size:14px;font-weight:400;color:gray1;margin-left:30px; margin-top:-8px;">Nursery age (3-4 years) </p>\r\n<p style="font-size:14px;font-weight:400;color:gray1;margin-left:30px; margin-top:-8px;">School age (4-5 years)</p>\r\n<p style="font-size:14px;font-weight:400;color:gray1;margin:15px;text-align:justify; ">The following milestones for each age group can serve as an indicator as to how your child is developing in their early years:</p>\r\n<p style="font-size:14px;font-weight:400;color:gray1;margin-left:15px; ">By 3 months:</p>\r\n<p style="font-size:14px;font-weight:400;color:gray1;margin-left:30px; margin-top:-8px;">Can control their head</p>\r\n<p style="font-size:14px;font-weight:400;color:gray1;margin-left:30px; margin-top:-8px;">Makes energetic arm and leg movements </p>\r\n<p style="font-size:14px;font-weight:400;color:gray1;margin-left:30px; margin-top:-8px;">Opens and shuts hands</p>\r\n<p style="font-size:14px;font-weight:400;color:gray1;margin-left:30px; margin-top:-8px;">Grabs blankets or fingers</p>';
  return (
    <View style={styles.container}>
      {ChildDevelopHeader()}
      <Image
        source={require('../assets/Images/photos/MaskGroup14.png')}
        style={styles.image}
      />

      <AutoHeightWebView
        customStyle={`
        * {
           
           border-radius:10px;
           margin-top:10;
           margin-left:2;
           background-color:white;
          }
       `}
        style={[
          {
            marginTop: 8,
            marginLeft: 20,
            width: 350,
          },
        ]}
        source={{
          html: data,
        }}
        scalesPageToFit={true}
        viewportContent={'width=device-width, user-scalable=no'}
        onContentSizeChange={(contentWidth, contentHeight) => {}}
      />
    </View>
  );
};

export default ChildDevelop;
