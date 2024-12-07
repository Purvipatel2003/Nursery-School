import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNavigation from './src/navigations/MainNavigation';
import StackNavigator from './src/navigations/MainNavigation';

import SplashScreen from 'react-native-splash-screen';
const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return <StackNavigator />;

  // return (
  //   <View>
  //     <Text>Hi</Text>
  //   </View>
  // );
};

export default App;

const styles = StyleSheet.create({});
