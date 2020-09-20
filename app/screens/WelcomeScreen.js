import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';

import AppButton from '../components/AppButton';
import SecondButton from '../components/SecondButton';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="login" onPress={() => console.log('tapped')} />
        <AppButton
          title="login"
          color="secondary"
          onPress={() => console.log('tapped')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});
