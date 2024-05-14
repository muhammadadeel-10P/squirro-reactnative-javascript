import React from 'react';
import {View, Text} from 'react-native';
import {placeHolderViewStyle} from './PlaceHolderTextViewStyle';

const PlaceHolderTextView = ({message}) => {
  return (
    <View style={placeHolderViewStyle.container}>
      <Text style={placeHolderViewStyle.message}>{message}</Text>
    </View>
  );
};

export default PlaceHolderTextView;
