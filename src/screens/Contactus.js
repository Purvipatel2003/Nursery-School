import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import styles from '../Styles/ContactusStyle';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';
import Colors from '../assets/Colors';
import {SelectList} from 'react-native-dropdown-select-list';
import Labels from '../Helper/Labels';
const Contactus = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const data1 = [
    {key: '1', value: 'Student'},
    {key: '2', value: 'Tutor'},
    {key: '3', value: 'Company'},
  ];
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

    // Dropdown validation
    if (!selected) {
      errorMessages.selected = 'Please select an option';
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
      setEmail('');
      setSelected('');
      setMessage('');
      navigation.goBack('');
    } else {
      Alert.alert('Validation Failed', 'Please check your input fields.');
    }
  };
  const contactHeader = () => {
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
  const selectlist = () => {
    return (
      <View style={styles.dropdown}>
        <SelectList
          data={data1}
          setSelected={setSelected}
          dropdownStyles={{
            backgroundColor: Colors.white,
            borderColor: Colors.white,
          }}
          dropdownTextStyles={{color: Colors.darkgrey}}
          placeholder="Parent"
          placeholderTextColor={{color: Colors.gray}}
          boxStyles={{
            borderColor: Colors.white,
            borderRadius: 10,
          }}
          inputStyles={{color: Colors.gray1, marginLeft: -10}}
        />
      </View>
    );
  };
  const submitbutton = () => {
    return (
      <TouchableOpacity onPress={handleSubmit} style={styles.button3}>
        <Text style={styles.text1}> {Labels.submit}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={StyleSheet.conatiner}>
      {contactHeader()}
      <Text style={styles.textname}>{Labels.name}</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Your Name"
        placeholderTextColor={Colors.gray1}
        onChangeText={setName}
      />
      {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
      <Text style={styles.textname}>{Labels.email}</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Your Email"
        placeholderTextColor={Colors.gray1}
        onChangeText={setEmail}
      />
      {errors.email ? (
        <Text style={styles.errorText}>{errors.email}</Text>
      ) : null}
      <Text style={styles.textname}>{Labels.who}</Text>
      {selectlist()}
      {errors.selected ? (
        <Text style={styles.errorText}>{errors.selected}</Text>
      ) : null}
      <Text style={styles.textname}>{Labels.message}</Text>
      <View style={styles.searchInput}>
        <TextInput
          multiline={true}
          numberOfLines={6}
          placeholder="Type Here..."
          placeholderTextColor={Colors.gray1}
          onChangeText={setMessage}
          style={{
            textAlignVertical: 'top',
            color: Colors.gray1,
          }}
        />
      </View>
      {errors.message ? (
        <Text style={styles.errorText}>{errors.message}</Text>
      ) : null}
      {submitbutton()}
    </View>
  );
};

export default Contactus;
