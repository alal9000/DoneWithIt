import React, { useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Screen from './components/Screen';
import AppPicker from './components/AppPicker';
import AppTextInput from './components/AppTextInput';

export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Screen>
          <AppPicker icon="apps" placeholder="Category" />
          <AppTextInput icon="email" placeholder="Email" hidden={false} />
        </Screen>
        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
