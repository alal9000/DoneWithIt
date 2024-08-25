import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function Screen({ children }) {
  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light
  }
});

export default Screen;
