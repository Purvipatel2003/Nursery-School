import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNavigation from './src/navigations/MainNavigation';
import StackNavigator from './src/navigations/MainNavigation';
import store from '../myDemo/src/Store/store';
import {Provider} from 'react-redux';

import SplashScreen from 'react-native-splash-screen';
const App = props => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );

  // return (
  //   <View>
  //     <Text>Hi</Text>
  //   </View>
  // );
};

export default App;

const styles = StyleSheet.create({});
