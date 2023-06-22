import { useState } from "react"
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native"
import Task from "../components/task"
import Button from "../components/button"

const TaskList = () => {
  const [newTask, setNewTask] = useState()
  const [taskList, setTaskList] = useState([])

  const addNewTask = () => {
    if (newTask) {
      setTaskList([...taskList, {label:newTask, finished: false}])
      setNewTask('')
    }
  }

  const deleteOneTask = (taskIndex) => {
    setTaskList(taskList.filter((value, index) => index !== taskIndex))
  }

  const finishOneTask = (taskIndex) => {
    setTaskList(taskList.map((value,index) => {
      if (index == taskIndex) {
        value.finished = true
      }
      return value
    }))
  }


  const undoFinishedTask = (taskIndex) => {
    console.log("annuler")
    setTaskList(
      taskList.map((value, index) => {
        if (index == taskIndex) {
          value.finished = false
        }
        return value
      })
    )
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des tâches</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={setNewTask}
        value={newTask}
        placeholder="Ajouter une nouvelle tâche"
        onSubmitEditing={addNewTask}
      />
      <Button text={"Ajouter"} style={styles.addButton} onPress={addNewTask} />
      <ScrollView>
        {taskList?.map((task, index) => (
          <Task
            key={index}
            task={task}
            onDelete={() => deleteOneTask(index)}
            onFinish={() => finishOneTask(index)}
            onUndo={() => undoFinishedTask(index)}
          />
        ))}
      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 10,
  },
  inputText: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#8d99ae",
    borderRadius: 5,
  },
})

export default TaskList