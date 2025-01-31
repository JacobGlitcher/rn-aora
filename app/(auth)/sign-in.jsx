import {useState} from 'react'
import {View, StyleSheet, ScrollView, Image, Text} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";

import {images} from "../../constants";
import FormField from "../../components/FormField";

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full justify-center px-4 my-6">
          <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]"/>

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>

          <FormField
            title="Email"
            value={form.email}
            handleTextChange={(e) => setForm({...form, email: e})}
            customStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleTextChange={(e) => setForm({...form, password: e})}
            customStyles="mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}

export default SignIn

const styles = StyleSheet.create({
})
