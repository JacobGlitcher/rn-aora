import {View, Image, StyleSheet} from 'react-native'
import {Tabs} from 'expo-router'

import icons from '../../constants/icons'

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused}) => {
              return <TabIcon
                name="Home"
                icon={icons.home}
                color={color}
                focused={focused}
              />
            },
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
})
