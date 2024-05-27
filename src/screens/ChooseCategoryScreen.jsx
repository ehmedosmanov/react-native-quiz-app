import { FlatList, StyleSheet, View } from 'react-native'
import quiz from '../constants/quiz.json'
import colors from '../constants/colors'
import { Text } from 'react-native-paper'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
const ChooseCategoryScreen = () => {
  const navigation = useNavigation()

  const renderCategories = ({ item }) => {
    return (
      <View style={styles.categoryItem}>
        <PrimaryButton
          onPress={() =>
            navigation.navigate('GameScreen', { questions: item.questions })
          }
          style={styles.btnStyle}>
          {item.category}
        </PrimaryButton>
      </View>
    )
  }

  return (
    <View style={styles.rootLayout}>
      <View style={styles.categoryContainer}>
        <Text style={styles.textStyle}>Choose Category</Text>
        <View style={styles.chooseContainer}>
          <FlatList
            data={quiz}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderCategories}
          />
        </View>
      </View>
    </View>
  )
}

export default ChooseCategoryScreen

const styles = StyleSheet.create({
  rootLayout: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.accent
  },
  categoryItem: {
    marginVertical: 10
  },
  textStyle: {
    fontSize: 25,
    marginBottom: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  chooseContainer: {
    borderRadius: 40
  },
  btnStyle: {
    color: '#fff',
    elevation: 5,
    backgroundColor: colors.textSecondary
  },
  categoryContainer: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: colors.background,
    padding: 20
  }
})
