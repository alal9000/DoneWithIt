import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Switch } from 'react-native';

import Screen from './components/Screen';

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
        <Switch
          value={isNew}
          onValueChange={(newValue) => setIsNew(newValue)}
        />
      </Screen>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
