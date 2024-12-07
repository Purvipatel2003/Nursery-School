import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Search from '../screens/Search';
import Colors from '../assets/Colors';
import fonts from '../assets/font';
import More from '../screens/More';
import icons from '../Helper/icons';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false),
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderRadius: 25,
          height: 55,
          marginBottom: -10,
          width: '100%',
          marginTop: 20,

          display: isKeyboardVisible ? 'none' : 'flex',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <Image
                    source={icons.Home_icon}
                    style={{
                      width: 40,
                      height: 40,
                      marginTop: 15,
                      marginLeft: 30,
                    }}
                    resizeMode="contain"
                  />
                ) : (
                  <Image
                    source={icons.Home_icon}
                    style={{
                      width: 40,
                      height: 40,
                      marginTop: 15,
                      marginLeft: 30,
                    }}
                    resizeMode="contain"
                  />
                )}
              </View>
            );
          },
          tabBarButton: props => (
            <TouchableWithoutFeedback {...props}>
              <View {...props} />
            </TouchableWithoutFeedback>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="search "
        component={Search}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <Image
                  source={icons.Search_icon}
                  style={{width: 70, height: 45, marginTop: -15}}
                  resizeMode="contain"
                />
              </View>
            );
          },
          tabBarButton: props => (
            <TouchableWithoutFeedback {...props}>
              <View {...props} />
            </TouchableWithoutFeedback>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name=" More"
        component={More}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <Image
                  source={icons.more_icon}
                  style={{
                    width: 30,
                    height: 30,
                    marginTop: 1.5,
                    marginRight: 25,
                  }}
                  resizeMode="contain"
                />
              </View>
            );
          },
          tabBarButton: props => (
            <TouchableWithoutFeedback {...props}>
              <View {...props} />
            </TouchableWithoutFeedback>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
