import React, { useState } from 'react'
import { StyleSheet, View, ActivityIndicator, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LinearGradient } from 'expo-linear-gradient'
import GameStartScreen from './src/screens/GameStartScreen'
import ChooseCategoryScreen from './src/screens/ChooseCategoryScreen'
import colors from './src/constants/colors'
import GameScreen from './src/screens/GameScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  const [isLoading, setIsLoading] = useState(false)

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={colors.secondary} size={'large'} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <LinearGradient
        style={styles.rootLayout}
        colors={[colors.accent, colors.background]}>
        <SafeAreaView style={styles.rootLayout}>
          <Stack.Navigator initialRouteName='GameStart'>
            <Stack.Screen name='GameStart' component={GameStartScreen} />
            <Stack.Screen
              name='ChooseCategory'
              component={ChooseCategoryScreen}
            />
            <Stack.Screen
            name="GameScreen"
            component={GameScreen}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </LinearGradient>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  rootLayout: {
    flex: 1
  }
})
