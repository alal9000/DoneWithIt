import React, { useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Screen from './components/Screen';
import AppPicker from './components/AppPicker';
import AppTextInput from './components/AppTextInput';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 }
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Screen>
          <AppPicker
            selectedItem={category}
            onSelectItem={(item) => setCategory(item)}
            items={categories}
            icon="apps"
            placeholder="Category"
          />
          <AppTextInput icon="email" placeholder="Email" hidden={false} />
        </Screen>
        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
