import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Text } from 'react-native-paper'
import PrimaryButton from '../components/ui/PrimaryButton'
import colors from '../constants/colors'
import { useNavigation } from '@react-navigation/native'

const GameScreen = ({ route }) => {
  const { questions } = route.params

  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [visibleAnswer, setVisibleAnswer] = useState(null)
  const navigate = useNavigation()

  const answerHandler = option => {
    const question = questions[questionIndex]
    if (option === question.answer) {
      setScore(score + 1)
      setQuestionIndex(questionIndex + 1)
      setVisibleAnswer(true)
      if (questionIndex === questions.length - 1) {
        navigate.navigate('GameStart')
        Alert.alert('Finish', `Your score is: ${score}`, [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ])
      }
    } else {
      setVisibleAnswer(false)
    }
  }

  const currQuestion = questions[questionIndex]

  return (
    <View style={styles.rootLayout}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionTitle}>{currQuestion.question}</Text>
        {visibleAnswer !== null && (
          <Text style={styles.questionTitle}>
            {visibleAnswer ? 'Correct' : 'Wrong'}
          </Text>
        )}
        <View style={styles.answersContainer}>
          {currQuestion &&
            currQuestion.options.map((item, index) => (
              <PrimaryButton
                onPress={() => answerHandler(item)}
                style={styles.answerBtn}
                key={index}>
                {item}
              </PrimaryButton>
            ))}
        </View>
        <Text style={styles.scoreText}>{score}</Text>
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  rootLayout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.accent
  },
  scoreText: {
    fontSize: 25,
    marginTop: 20,
    padding: 12,
    backgroundColor: colors.background,
    fontWeight: 'bold',
    color: colors.textSecondary,
    textAlign: 'center'
  },
  answerBtn: {
    backgroundColor: colors.textSecondary,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center'
  },
  questionTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 18
  },
  questionContainer: {}
})
