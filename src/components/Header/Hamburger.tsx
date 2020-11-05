import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const Hamburger = () => (
  <TouchableOpacity onPress={() => console.log('누름')}>
    <Image
      style={styles.hamburger}
      resizeMode="contain"
      source={require('./icon_hamburger.png')}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  hamburger: {
    width: 31,
    height: 22,
  },
});

export default Hamburger;
