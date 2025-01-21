import {View, StyleSheet, Text, ScrollView, Image} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

import {images} from '../constants'

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full items-center px-4">
          <Image
            source={images.logo}
            className="w-[130px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] h-[300px] w-full"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center px-2">
              Discover Endless Possibilities with {''}
              <Text className="text-secondary-200">
                Aora
              </Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[11px] absolute -bottom-3 -right-9"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 px-2 text-center">
            Where creativity meets innovation: embark on a journey of limitless exploration with Aora
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
