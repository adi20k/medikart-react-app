import React from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './Navigation';

export default function App() {
  return (
     <SafeAreaView style={styles.safeArea}>
        <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
});
