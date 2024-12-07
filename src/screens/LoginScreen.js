import {View, Text, Image, StyleSheet, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import icons from '../Helper/icons';
import styles from '../Styles/LoginStyle';


const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={icons.logo_icon} style={styles.logo} />
        <Text style={styles.boldText}>Welcome Back</Text>
        <Text style={styles.subText}>
          Log in to your account using E-mail or social networks
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Image source={icons.email_icon} style={styles.icon} />
          <Text style={styles.buttonText}>Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Image source={icons.password_icon} style={styles.icon} />
          <Text style={styles.buttonText}>Password</Text>
          <Image source={icons.protected_icon} style={styles.icon1} />
        </TouchableOpacity>
        <Text style={styles.forgetbuttonText}> Forget Password?</Text>
        <TouchableOpacity style={styles.loginbutton} onPress={() => {}}>
          <Text style={styles.loginbuttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.otherText}>Or login with</Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Image source={icons.google_icon} style={styles.icon} />
          <Text style={styles.otherloginText}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Image source={icons.facebook_icon} style={styles.icon} />
          <Text style={styles.otherloginText}>Login with Facebook</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Text style={styles.other1Text}>First time here?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signupButtonText}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
