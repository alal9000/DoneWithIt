import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AccountScreen from './screens/AccountScreen';
import colors from './config/colors';

export default function App() {
  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={{ flex: 1, backgroundColor: colors.light }}
    >
      <GestureHandlerRootView>
        <AccountScreen />
      </GestureHandlerRootView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
