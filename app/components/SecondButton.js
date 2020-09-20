import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

const SecondButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SecondButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    width: '100%',
    borderRadius: 25,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
