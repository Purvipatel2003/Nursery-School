import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import {SelectList} from 'react-native-dropdown-select-list';
import {useNavigation} from '@react-navigation/native';
import icons from '../Helper/icons';
import styles from '../Styles/AddReviewStyle';
import Colors from '../assets/Colors';
import Labels from '../Helper/Labels';

const AddReview = () => {
  const [selected, setSelected] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false); // Track form submission

  const navigation = useNavigation();

  const data1 = [
    {key: '1', value: 'Student'},
    {key: '2', value: 'Tutor'},
    {key: '3', value: 'Company'},
  ];

  const data = [
    {id: 1, name: 'Overall Standard', reviews: 0},
    {id: 2, name: 'Core', reviews: 0},
    {id: 3, name: 'Learning', reviews: 0},
    {id: 4, name: 'Staff', reviews: 0},
    {id: 5, name: 'Safe Guarding', reviews: 0},
    {id: 6, name: 'Facilities', reviews: 0},
    {id: 7, name: 'Resources', reviews: 0},
    {id: 8, name: 'Cleanliness', reviews: 0},
    {id: 9, name: 'Activities', reviews: 0},
    {id: 10, name: 'Food', reviews: 0},
    {id: 11, name: 'Value for Money', reviews: 0},
    {id: 12, name: 'Outdoor Learning', reviews: 0},
    {id: 13, name: 'Extracurricular Activities', reviews: 0},
    {id: 14, name: 'Parents Partnership', reviews: 0},
  ];

  const validateForm = () => {
    let isValid = true;
    let errorMessages = {
      name: '',
      email: '',
      message: '',
      selected: '',
    };

    if (!name.trim()) {
      errorMessages.name = 'Name is required';
      isValid = false;
    }

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

    if (!selected) {
      errorMessages.selected = 'Please select an option';
      isValid = false;
    }

    if (!message.trim()) {
      errorMessages.message = 'Message is required';
      isValid = false;
    }

    setErrors(errorMessages);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setSubmitted(true); // Mark the form as submitted
      Alert.alert('Form Submitted', 'Your message has been sent successfully!');
    } else {
      Alert.alert('Validation Failed', 'Please check your input fields.');
    }
  };

  const handleBackToReview = () => {
    navigation.navigate('Review');
  };
  const AddReviewHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('Nursery')}>
            <Image source={icons.search_icon_back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.haederText}>
            {submitted ? 'Submit Review' : Labels.add_review}
          </Text>
        </View>
      </View>
    );
  };
  const SubmitReview = () => {
    return (
      <TouchableOpacity
        onPress={submitted ? handleBackToReview : handleSubmit}
        style={styles.button3}>
        <Text style={styles.text1}>
          {submitted ? 'Back to Review' : Labels.submit_review}
        </Text>
      </TouchableOpacity>
    );
  };
  const Selectlist = () => {
    return (
      <>
        <View style={styles.dropdown}>
          <SelectList
            data={data1}
            setSelected={value => setSelected(value)}
            dropdownStyles={{
              backgroundColor: Colors.white,
              borderColor: Colors.white,
            }}
            dropdownTextStyles={{color: Colors.darkgrey}}
            placeholder="Select an Option"
            boxStyles={{
              borderColor: Colors.white,
              borderRadius: 10,
            }}
            inputStyles={{color: Colors.darkgrey}}
          />
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {AddReviewHeader()}
      <ScrollView style={{bottom: 10}}>
        <View style={styles.box}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={styles.button1}>
                <View>
                  <Text style={styles.nurseryName}>{item.name}</Text>
                  <Rating
                    type="custom"
                    imageSize={20}
                    startingValue={item.reviews}
                    tintColor="white"
                    ratingBackgroundColor="#93A4BF"
                    style={{
                      marginTop: -20,
                      marginLeft: 270,
                     
                    }}
                  />
                  <View style={styles.line}></View>
                </View>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={styles.textname}>{Labels.name}</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Your Name"
          placeholderTextColor={Colors.darkgrey}
          value={name}
          onChangeText={text => setName(text)}
        />
        {errors.name ? (
          <Text style={styles.errorText}>{errors.name}</Text>
        ) : null}

        <Text style={styles.textname}>{Labels.email}</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Your Email"
          placeholderTextColor={Colors.darkgrey}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}

        <Text style={styles.textname}>{Labels.who}</Text>
        {Selectlist()}
        {errors.selected ? (
          <Text style={styles.errorText}>{errors.selected}</Text>
        ) : null}

        <Text style={styles.textname}>{Labels.message}</Text>
        <TextInput
          style={[styles.searchInput, {height: 100, textAlignVertical: 'top'}]}
          placeholder="Type Here..."
          placeholderTextColor={Colors.darkgrey}
          multiline
          value={message}
          onChangeText={text => setMessage(text)}
        />
        {errors.message ? (
          <Text style={styles.errorText}>{errors.message}</Text>
        ) : null}

        {SubmitReview()}
      </ScrollView>
    </View>
  );
};

export default AddReview;
