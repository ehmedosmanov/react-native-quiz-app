import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const PrimaryButton = ({ onPress, style, textStyle, children }) => {
  return (
    <TouchableOpacity  style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.textStyle, textStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    elevation: 8,
    borderRadius: 20
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary
  }
})
