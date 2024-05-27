import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import colors from '../constants/colors'
import { Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const GameStartScreen = () => {
  const navigation = useNavigation()

  const handleStart = () => {
    navigation.navigate('ChooseCategory')
  }
  return (
    <View style={styles.screen}>
      <View style={styles.centerContainer}>
        <Text style={styles.textStyle}>Quiz</Text>
        <PrimaryButton onPress={handleStart}>Start Quiz</PrimaryButton>
      </View>
    </View>
  )
}

export default GameStartScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.background
  },
  centerContainer: {
    width: '80%',
    backgroundColor: colors.accent,
    padding: 30,
    paddingVertical: 50,
    marginHorizontal: 12,
    borderRadius: 10,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

//? Shadow elavation - android
//? Shadow for ios - shadowColor shadowOffset shadowOpacity shadowRadiusi
