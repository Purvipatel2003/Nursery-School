import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {USER_LIST} from '../Store/Constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const userList = () => {
  const dispatch = useDispatch();

  const users = useSelector(state => state.reducerFile.users || []);
  useEffect(() => {
    dispatch({type: USER_LIST});
  }, [dispatch]);
  console.warn('in', userList);

  return (
    <View style={styles.container}>
      {users.length > 0 ? (
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.name}>First Name:{item.firstName}</Text>
              <Text style={styles.name}>Last Name:{item.lastName}</Text>
              <Text style={styles.name}>Email:{item.email}</Text>
              <View style={styles.line}></View>
            </View>
          )}
        />
      ) : (
        <Text>No data found</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(2),
  },
  name: {
    marginLeft: wp(5),
    
  },
  line: {
    width: wp(80),
    height: hp(0.1),
    marginLeft: wp(5),
    backgroundColor: 'blue',
  },
  
});
export default userList;
