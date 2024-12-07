import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';
import styles from '../Styles/AboutUsStyle';
import AutoHeightWebView from 'react-native-autoheight-webview';
const AboutUs = () => {
  const navigation = useNavigation();

  const data =
    '<p style="color:black;margin:20;font-size:14; font-weight:400;text-align:justify;">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th cent ury who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that does not distract from the layout. Practice not without controversy, laying outpages with meaningless filler text can be very useful when the focus is meant to be on design, not content. The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it is seen all around theweb; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n<p style="color:black;margin:20;font-size:14; font-weight:400;text-align:justify;">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th cent ury who is thought to have.</p>';
  const AboutUsHeader = () => {
    return (
      <>
        <View style={styles.header}>
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={icons.search_icon_back} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{Labels.about_us}</Text>
          </View>
        </View>
      </>
    );
  };
  return (
    <View style={styles.container}>
      {AboutUsHeader()}
      <AutoHeightWebView
        customStyle={`
        * {
           background-color:white;
          }
       `}
        style={[
          {
            marginTop: 15,
            width: 'auto',
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

export default AboutUs;
