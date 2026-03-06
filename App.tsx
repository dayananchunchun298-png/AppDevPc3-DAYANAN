import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Nav from './src/navigations';

const styles = StyleSheet.create({
  root: { flex: 1 },
});

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <View style={styles.root}>
          <Nav />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;