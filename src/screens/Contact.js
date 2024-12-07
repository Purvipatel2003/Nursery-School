import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';
import React from 'react';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';
import Colors from '../assets/Colors';
import styles from '../Styles/ContactStyle';
import Labels from '../Helper/Labels';
const Contact = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState('');
  const [name, setName] = React.useState('');
  const [companyname, setCompanyName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const validateForm = () => {
    let isValid = true;
    let errorMessages = {
      name: '',
      email: '',
      message: '',
      selected: '',
    };
    // Check if name is empty
    if (!name.trim()) {
      errorMessages.name = 'Name is required';
      isValid = false;
    }
    // check if company name is empty
    if (!companyname.trim()) {
      errorMessages.companyname = 'Company Name is required';
      isValid = false;
    }
    // Email validation
    if (!email.trim()) {
      errorMessages.email = 'Email is required';
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errorMessages.email = 'Please enter a valid email';
        isValid = false;
      }
    }

    //Phone validation
    if (!phone.trim()) {
      errorMessages.phone = 'Phone Number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      errorMessages.phone = 'Phone Number must be exactly 10 digits';
      isValid = false;
    }

    // Message validation
    if (!message.trim()) {
      errorMessages.message = 'Message is required';
      isValid = false;
    }

    setErrors(errorMessages); // Set the error messages state
    return isValid;
  };
  const handleSubmit = () => {
    if (validateForm()) {
      // Proceed with form submission
      Alert.alert('Form Submitted', 'Your message has been sent successfully!');
      // Reset the form if necessary
      setName('');
      setPhone('');
      setCompanyName('');
      setEmail('');
      setSelected('');
      setMessage('');
      navigation.goBack('');
    } else {
      Alert.alert('Validation Failed', 'Please check your input fields.');
    }
  };
  const ContactHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('Nursery')}>
            <Image source={icons.search_icon_back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.haederText}>{Labels.contact_us}</Text>
        </View>
      </View>
    );
  };
  const SubmitButtom = () => {
    return (
      <TouchableOpacity onPress={handleSubmit} style={styles.button3}>
        <Text style={styles.text1}> {Labels.submit}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={StyleSheet.conatiner}>
      {ContactHeader()}
      <Text style={styles.textname}>{Labels.name}</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Your Name"
        placeholderTextColor={Colors.darkgrey}
        onChangeText={setName}
      />
      {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
      <Text style={styles.textname}>{Labels.company_name}</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Company Name"
        placeholderTextColor={Colors.darkgrey}
        onChangeText={setCompanyName}
      />
      {errors.companyname ? (
        <Text style={styles.errorText}>{errors.companyname}</Text>
      ) : null}
      <Text style={styles.textname}>{Labels.email}</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Your Email"
        placeholderTextColor={Colors.darkgrey}
        onChangeText={setEmail}
      />
      {errors.email ? (
        <Text style={styles.errorText}>{errors.email}</Text>
      ) : null}
      <Text style={styles.textname}>{Labels.phone_number}</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Your Phone Number"
        placeholderTextColor={Colors.darkgrey}
        onChangeText={setPhone}
      />
      {errors.phone ? (
        <Text style={styles.errorText}>{errors.phone}</Text>
      ) : null}

      <Text style={styles.textname}>{Labels.message}</Text>
      <View style={styles.searchInput}>
        <TextInput
          multiline={true}
          numberOfLines={6}
          placeholder="Type Here..."
          placeholderTextColor={Colors.darkgrey}
          onChangeText={setMessage}
          style={{
            textAlignVertical: 'top',
            color: Colors.black,
          }}
        />
      </View>
      {errors.message ? (
        <Text style={styles.errorText}>{errors.message}</Text>
      ) : null}
      {SubmitButtom()}
    </View>
  );
};

export default Contact;
