import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const nombre = 'L&J';

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => alert('Presionaste')}>
        <Text>¡{nombre}!</Text>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
