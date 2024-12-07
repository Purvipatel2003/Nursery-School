import {StyleSheet} from 'react-native';
import fonts from '../assets/font.js';
import Colors from '../assets/Colors.js';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    flex: 1,
  },
  header: {
    backgroundColor: Colors.primary1,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    padding: wp(5),
  },
  headerText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '500',
    marginBottom: hp(0.5),
    fontFamily: fonts.regular,
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
    fontFamily: fonts.regular,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
    backgroundColor: Colors.primary,
    opacity: 1.9,
    borderRadius: 10,
    paddingHorizontal: wp(4),
    height: 50,
    elevation: 3,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: wp(3),
  },
  searchInput: {
    flex: 1,
    color: Colors.white,
    fontSize: 12,
    fontFamily: fonts.regular,
  },
  carouselSection: {
    marginTop: hp(2),
    marginLeft: wp(5),
  },
  carouselItem: {
    marginRight: wp(3),
    overflow: 'hidden',
    borderRadius: 15,
    elevation: 3,
    backgroundColor: Colors.white,
  },
  carouselImage: {
    width: wp(85),
    height: hp(18),
    resizeMode: 'cover',
    alignSelf: 'center',
  },
 
});