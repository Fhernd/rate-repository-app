import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';

export default function App() {
  return <NativeRouter><Main /></NativeRouter>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
