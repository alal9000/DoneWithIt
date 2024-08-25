import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput } from 'react-native';

import Screen from './components/Screen';

export default function App() {
  const [firstName, setFirstName] = useState('');

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <Screen>
        <Text>{firstName}</Text>
        <TextInput
          clearButtonMode="always"
          secureTextEntry
          onChangeText={(text) => setFirstName(text)}
          placeholder="First Name"
          placeholderTextColor="black"
          style={{
            borderBottomColor: '#ccc',
            borderBottomWidth: 1
          }}
        />
      </Screen>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
