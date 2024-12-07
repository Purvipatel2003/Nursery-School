import {StyleSheet} from 'react-native';
import Colors from '../assets/Colors';
import fonts from '../assets/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
 container:{
    flex:1,
    backgroundColor:Colors.gray,
 },
 container: {
    flex: 1,
    backgroundColor: Colors.gray,
    fontFamily: fonts.medium,
  },
  header: {
    backgroundColor: Colors.primary1,
    width: wp(100),
    height: Platform.OS === 'ios' ? hp(10) : hp(7),

    color: Colors.white,
  },
  wrapper: {
    flexDirection: 'row',
  },
  backIcon: {
    marginTop: hp(1.5),
    width: wp(5),
    height: hp(4),
    marginLeft: wp(5),
  },

  headerText: {
    marginTop: hp(1.5),
    color: Colors.white,
    fontWeight: '500',
    fontSize: 20,
    fontFamily: fonts.regular,
    marginLeft: wp(28),
  },
  wrapper1:{
    backgroundColor:Colors.white,
    marginTop:wp(5),
    width:wp(100),
    height:hp(100),
  },
  text:{
    color:Colors.gray1,
    fontSize:14,
    fontWeight:'400',
    fontFamily:fonts.regular,
    marginHorizontal:wp(7),
     textAlign:'justify',
    marginVertical:hp(2),
  }
});