import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.icon, { backgroundColor: item.color }]}>
        <MaterialCommunityIcons name={item.icon} color="white" size={40} />
      </View>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default PickerItem;
