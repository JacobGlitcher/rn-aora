import {View, Text, StyleSheet} from 'react-native'

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
    </View>
  );
}

export default RootLayout

const styles = StyleSheet.create({
  container: {}
})