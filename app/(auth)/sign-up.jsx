import {useState} from 'react'
import {View, StyleSheet, ScrollView, Image, Text} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {Link} from 'expo-router'

import {images} from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignIn = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[90vh] justify-center px-4 my-6">
          <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]"/>

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign up to Aora</Text>

          <FormField
            title="Email"
            value={form.email}
            handleTextChange={(e) => setForm({...form, email: e})}
            customStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Username"
            value={form.username}
            handleTextChange={(e) => setForm({...form, username: e})}
            customStyles="mt-7"
          />

          <FormField
            title="Password"
            value={form.password}
            handleTextChange={(e) => setForm({...form, password: e})}
            customStyles="mt-7"
            keyboardType="password"
          />

          <CustomButton
            title="Sign Up"
            containerStyles="mt-7"
            isLoading={isSubmitting}
            handlePress={handleSubmit}
          />

          <View className="justify-center mt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link href="/sign-in" className="font-psemibold text-lg text-secondary">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}

export default SignIn

const styles = StyleSheet.create({

})
