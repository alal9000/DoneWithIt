import React, { useState } from 'react';

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Screen from './components/Screen';

import ImageInputList from './components/ImageInputList';

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Screen>
          <ImageInputList
            imageUris={imageUris}
            onChangeImage={(uri) => setImageUri(uri)}
            onAddImage={handleAdd}
            onRemoveImage={handleRemove}
          />
        </Screen>
        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
