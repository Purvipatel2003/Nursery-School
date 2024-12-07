import Colors from '../assets/Colors';
import fonts from '../assets/font';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gray,
        fontFamily: fonts.medium,
      },
      header: {
        backgroundColor: Colors.primary1,
        width: wp('100%'),
        height: Platform.OS === 'ios' ? hp('10%') : hp('7%'),
    
        color: Colors.white,
      },
      wrapper: {
        flexDirection: 'row',
      },
      backIcon: {
        marginTop: hp('1.5%'),
        width: wp('5%'),
        height: hp('4%'),
        marginLeft: wp('5%'),
      },
    
      headerText: {
        marginTop: hp('1.5%'),
        color: Colors.white,
        fontWeight: '500',
        fontSize: 20,
        fontFamily: fonts.regular,
        marginLeft: wp('28%'),
      },
      
});