import {View, StyleSheet, Text} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import {Link} from "expo-router";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-pbold">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profile">Go To Profile</Link>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});