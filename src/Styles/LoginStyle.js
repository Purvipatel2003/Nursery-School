import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: wp(5),
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: wp(20),
    height: wp(20),
  },
  boldText: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginTop: hp(2),
  },
  subText: {
    textAlign: 'center',
    fontSize: wp(3.5),
    color: '#666',
    marginTop: hp(1),
  },
  button: {
    backgroundColor: '#F0F0F0',
    paddingVertical: hp(1.8),
    paddingHorizontal: wp(7),
    borderRadius: wp(6),
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(85),
  },
  loginbutton: {
    backgroundColor: '#708090',
    paddingVertical: hp(2),
    borderRadius: wp(6),
    marginTop: hp(2),
    alignItems: 'center',
    width: wp(85),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(80),
    marginTop: hp(2),
  },
  forgetbuttonText: {
    fontSize: wp(3.5),
    color: '#708090',
    alignSelf: 'flex-end',
    padding: wp(2),
  },
  loginbuttonText: {
    fontSize: wp(4.5),
    color: '#ffffff',
  },
  buttonText: {
    color: '#A9A9A9',
    fontSize: wp(4),
    marginLeft: wp(2),
  },
  otherText: {
    fontSize: wp(4),
    marginVertical: hp(2),
  },
  otherloginText: {
    fontSize: wp(3.8),
    color: '#000',
    marginLeft: wp(2),
  },
  signupButtonText: {
    fontSize: wp(3.8),
    color: '#708090',
    marginRight: wp(20),
  },
  other1Text: {
    fontSize: wp(3.8),
    marginLeft: wp(10),
  },
  icon: {
    width: wp(6),
    height: wp(6),
  },
  icon1: {
    width: wp(6),
    height: wp(5),
    marginLeft: 'auto',
  },
});
