import {View, Image, Text, StyleSheet} from 'react-native'
import {Tabs} from 'expo-router'
import icons from '../../constants/icons'

const TabIcon = ({icon, color, name, isFocused}) => {
  return (
    <View className="items-center justify-center m-0 w-16 gap-1.5">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${isFocused ? 'font-psemibold' : 'font-pregular'} text-xs text-center`}
        style={{color: color}}
      >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  const tabsInfo = [
    {name: 'Home', icon: icons.home},
    {name: 'Bookmark', icon: icons.bookmark},
    {name: 'Create', icon: icons.plus},
    {name: 'Profile', icon: icons.profile},
  ]

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ffa001',
        tabBarInactiveTintColor: '#cdcde0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          paddingTop: 16,
          height: 70,
        }
      }}
    >
      {tabsInfo.map((item) => (
        <Tabs.Screen
          key={item.name}
          name={item.name.toLowerCase()}
          options={{
            title: item.name,
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                name={item.name}
                icon={item.icon}
                color={color}
                isFocused={focused}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
})
