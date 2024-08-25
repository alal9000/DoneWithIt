import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput } from 'react-native';

import Screen from './components/Screen';
import AppTextInput from './components/AppTextInput';

export default function App() {
  const [firstName, setFirstName] = useState('');

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={{
        flex: 1
      }}
    >
      <Screen>
        <AppTextInput placeholder="Username" icon="email" />
      </Screen>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
