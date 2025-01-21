import {View, StyleSheet, Text, ScrollView, Image} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import { useRouter } from 'expo-router';
import {SafeAreaView} from "react-native-safe-area-context";

import {images} from '../constants'
import CustomButton from "../components/CustomButton"

const App = () => {
  const router = useRouter()

  return (
    <SafeAreaView className="bg-primary h-full items-center justify-center">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full min-h-[90vh] items-center justify-center px-4">
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

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light"/>
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
