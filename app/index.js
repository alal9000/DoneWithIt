import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import colors from './config/colors';
import ListingsScreen from './screens/ListingsScreen';

export default function App() {
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <ListingsScreen />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    paddingLeft: 10,
    paddingRight: 10
  }
});
