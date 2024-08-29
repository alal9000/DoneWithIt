import React from 'react';
import { StyleSheet, View } from 'react-native';

function Screen({ children }) {
  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default Screen;
