import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Icon from './components/Icon';
import ListItem from './components/ListItem';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={{ flex: 1 }}>
      <GestureHandlerRootView>
        <ListItem title="my title" ImageComponent={<Icon name="email" />} />
      </GestureHandlerRootView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
