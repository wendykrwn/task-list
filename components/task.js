import { StyleSheet, View, Text } from "react-native"
import Button from './button'


const Task = ({ task, onDelete, onFinish, onUndo }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.taskText,
          styles[task.finished ? "finishedTask" : ""]
        ]
        }
      >
        {task.label}
      </Text>
      <View style={styles.buttonContainer}>
        <Button text={"Supprimer"} onPress={onDelete} />
        {task.finished ? (
          <Button text={"Annuler"} onPress={onUndo} />
        ) : (
          <Button text={"Terminé"} onPress={onFinish} />
        )}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 5,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskText: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 5,
  },
  finishedTask: {
    textDecorationLine: "line-through",
    color: "grey"
  }
})

export default Task
