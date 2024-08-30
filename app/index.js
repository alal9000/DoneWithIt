import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';

import Screen from './components/Screen';
import Button from './components/Button';
import ImageInput from './components/ImageInput';

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library');
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImageUri(result.assets[0].uri);
    } catch (error) {
      console.log('error reading an image', error);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Screen>
          <Button title="Select Image" onPress={selectImage} />
          <Image
            source={{ uri: imageUri }}
            style={{ width: 200, height: 200 }}
          />
          <ImageInput imageUri={imageUri} />
        </Screen>
        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
