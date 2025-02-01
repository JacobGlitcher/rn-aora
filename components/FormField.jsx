import {useState} from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Image} from 'react-native'

import {icons} from '../constants'

const FormField = ({title, value, placeholder, handleTextChange, customStyles, keyboardType}) => {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = title === 'Password'

  return (
    <View className={`space-y-2 ${customStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="h-16 bg-gray-800 rounded-xl items-center relative">
        <TextInput
          className={`flex-1 px-4 rounded-xl text-white font-psemibold text-base border-2 border-gray-700 focus:border-secondary w-full ${isPassword && 'pr-12'}`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleTextChange}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && !showPassword}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={() => setShowPassword((prevState) => !prevState)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <Image
              source={showPassword ? icons.eyeHide : icons.eye }
              className="w-7 h-7"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View >
    </View>
  );
}

export default FormField

const styles = StyleSheet.create({
});
