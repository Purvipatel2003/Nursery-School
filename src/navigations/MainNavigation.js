import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import Signup from '../screens/Signup';
import HomeScreen from '../screens/HomeScreen';

import Search from '../screens/Search';
import More from '../screens/More';
import TabNavigator from './TabNavigator';
import Filter from '../screens/Filter';
import NurseriesDetail from '../screens/NurseriesDetail';
import Nurseries from '../screens/Nurseries';
import Reviews from '../screens/Reviews';

import Contactus from '../screens/Contactus';
import News from '../screens/News';

import FAQs from '../screens/FAQs';
import Photogallery from '../screens/Photogallery';
import AddReview from '../screens/AddReview';
import AboutUs from '../screens/AboutUs';
import Blogs from '../screens/Blogs';
import Events from '../screens/Events';
import Testimonials from '../screens/Testimonials';
import ParentsGuide from '../screens/ParentsGuide';
import LatestReview from '../screens/LatestReview';
import BlogDetail from '../screens/BlogDetail';
import EventDetail from '../screens/EventDetail';
import Contact from '../screens/Contact';
import ChildDevelop from '../screens/ChildDevelop';
import NewsEvents from '../screens/NewsEvents';
import VerticalCard from '../Component/VerticalCard';
import HorizontalScroll from '../Component/HorizontalScroll';
import Vertical from '../Component/Vertical';
import NewsCard from '../Component/NewsCard';
import Reviewpart from '../Component/Reviewpart';

import userList from '../Redux/userList';
import NewsData from '../Redux/NewsData';
import Product from '../Redux/Product';
import Headerforcart from '../Redux/Headerforcart';
import Counter from '../Redux/Counter';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

const UserAuthFlow = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Signup" component={Signup} />
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="Nursery" component={Nurseries} />
      <Stack.Screen name="Counter" component={Counter} />
      {/* <Stack.Screen name="Nannies" component={Nannies} /> */}
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="Headerforcart" component={Headerforcart} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="NurseyDetail" component={NurseriesDetail} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="ReviewPart" component={Reviewpart} />
      <Stack.Screen name="Review" component={Reviews} />
      <Stack.Screen name="NewsCard" component={NewsCard} />
      <Stack.Screen name="Contact" component={Contactus} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="NewsEvents" component={NewsEvents} />
      <Stack.Screen name="FAQs" component={FAQs} />
      <Stack.Screen name="PhotoGallery" component={Photogallery} />
      <Stack.Screen name="AddReview" component={AddReview} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="Blogs" component={Blogs} />
      <Stack.Screen name="ParentsGuide" component={ParentsGuide} />
      <Stack.Screen name="Event" component={Events} />
      <Stack.Screen name="LatestReview" component={LatestReview} />
      <Stack.Screen name="Testimonials" component={Testimonials} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
      <Stack.Screen name="EventDetail" component={EventDetail} />
      <Stack.Screen name="contact" component={Contact} />
      <Stack.Screen name="ChildDevelop" component={ChildDevelop} />
      <Stack.Screen name="VerticalCard" component={VerticalCard} />
      <Stack.Screen name="Vertical" component={Vertical} />
      <Stack.Screen name="userList" component={userList} />
      <Stack.Screen name="NewsData" component={NewsData} />
      <Stack.Screen name="HorizontalScroll" component={HorizontalScroll} />
    </Stack.Navigator>
  );
};

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="UserAuthFlow" component={UserAuthFlow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
