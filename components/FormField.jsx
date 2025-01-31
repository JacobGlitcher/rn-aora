import {useState} from 'react'
import {View, StyleSheet, Text, TextInput} from 'react-native'

const FormField = ({title, value, placeholder, handleTextChange, customStyles}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${customStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-xl focus:border-secondary items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleTextChange}
          secureTextEntry={title === 'Password' && !showPassword}
        />
      </View>
    </View>
  );
}

export default FormField

const styles = StyleSheet.create({
});
