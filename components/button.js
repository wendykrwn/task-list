import { Text, StyleSheet, TouchableOpacity } from "react-native"

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={{...styles.container}} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#3a86ff",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
  },
})

export default Button