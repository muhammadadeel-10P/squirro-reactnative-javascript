import {Colors} from '@/utils/Colors';
import {Dimensions, StyleSheet} from 'react-native';

export const placeHolderViewStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    maxHeight: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginTop: Dimensions.get('screen').height / 2.5,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.iron,
  },
});
