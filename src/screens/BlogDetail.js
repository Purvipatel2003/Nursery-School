import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';
import styles from '../Styles/BlogDetailStyle';
import AutoHeightWebView from 'react-native-autoheight-webview';
const BlogDetail = () => {
  const navigation = useNavigation();
  
  const BlogDetailHeader = () => {
    return (
      <>
        <View style={styles.header}>
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={icons.search_icon_back} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{Labels.blog_detail}</Text>
          </View>
        </View>
      </>
    );
  };
  const data =
    '<p style="color:gray1;margin-left:10; font-size:12px;font-weight:500;">By ketty piller</p>\r\n<p style="color:black;margin-top:10;margin-left:10; font-size:16px;font-weight:600;">Tips for Transitioning from Early Years Settings to School</p>\r\n<p style="color:gray1; font-size:14px; font-weight:400;margin:10 12 0 10;   text-align:justify;">Transitioning from early years settings to school can be a stressful time for children, parents, and practitioners. It is important that this transition runs as smoothly as possible to support children’s emotional wellbeing and maintain the progression of their learning and development.</p>\r\n<p style="color:gray1;margin:10 12 0 10; font-size:14px;font-weight:400;   text-align:justify;"> With the necessary steps in place, it is possible for this time to be a smooth process. With that in mind, we have compiled our top tips to help during this time.</p>\r\n<p style="color:gray1;margin:10 12 0 10;font-size:14px;font-weight:400;  font-family:regular; text-align:justify;">Doing a trial run of the first day including getting up, getting dressed, eating breakfast, etc. can be a great way to familiarise children with what their new routine will look like and prepare them for what is going to be expected from them.</p>';
  return (
    <View style={styles.container}>
      {BlogDetailHeader()}

      <Image
        source={require('../assets/Images/photos/MaskGroup11.png')}
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

export default BlogDetail;
