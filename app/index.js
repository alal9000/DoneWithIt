import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Switch } from 'react-native';

import Screen from './components/Screen';
import AppPicker from './components/AppPicker';
import AppTextInput from './components/AppTextInput';

export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={{
        flex: 1
      }}
    >
      <Screen>
        {/* Write your implementation here */}

        <AppPicker icon="apps" placeholder="Category" />
        <AppTextInput icon="email" placeholder="Email" />
      </Screen>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
