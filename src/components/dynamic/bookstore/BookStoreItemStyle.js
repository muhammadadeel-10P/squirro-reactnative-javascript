import {Colors} from '@/utils/Colors';
import {StyleSheet} from 'react-native';

export const bookStoreItemStyle = StyleSheet.create({
  mainContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.gray,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flexDirection: 'row',
  },
  logoContainer: {
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  content: {
    flex: 1,
    marginVertical: 10,
    marginRight: 15,
    marginLeft: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rating: {
    backgroundColor: '#f0f',
  },
  subheader: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 2,
  },
  bookList: {
    marginVertical: 10,
    borderColor: Colors.gray,
    borderWidth: 1,
  },
  bookItemContainer: {
    fontSize: 14,
    borderTopColor: Colors.gray,
    borderBottomColor: Colors.gray,
    borderTopWidth: 0.5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookText: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 5,
    textAlignVertical: 'center',
  },
  bookAuthorContainer: {
    flex: 0.5,
    borderLeftColor: Colors.gray,
    borderLeftWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 5,
  },
  footer: {
    marginHorizontal: 15,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 12,
    marginTop: 5,
  },
  ratingContainer: {
    paddingLeft: 20,
  },
  flagContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flag: {
    flex: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  flagUnicode: {
    fontSize: 20,
    width: 25,
    height: 25,
  },
  noDataText: {
    flex: 1,
    fontSize: 14,
    padding: 2,
    textAlignVertical: 'center',
  },
});
