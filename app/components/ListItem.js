import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevron = false,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={3}>
                {subTitle}
              </AppText>
            )}
          </View>
          {showChevron && (
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color={colors.medium}
              />
            </View>
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '500',
  },
});

export default ListItem;
