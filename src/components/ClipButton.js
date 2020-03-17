import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const ClipButton = ({onPress, enabled}) => {
  const name = enabled ? 'bookmark' : 'bookmark-o';
  console.log('clipButton',onPress, enabled);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome name={name} size={40} color='gray' />
    </TouchableOpacity>
  );
};

const styles= StyleSheet.create({
  container: {
    padding:5,
  },
});
export default ClipButton;