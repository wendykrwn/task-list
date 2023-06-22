import { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

const TaskList = () => {
  const [newTask, setNewTask] = useState('')
  const [taskList, setTaskList] = useState([])

  const onChangeNewTask = () => {
    console.log("nouvelle tâche")
  }

  const addNewTask = () => {
    if (newTask) {
      setTaskList([...taskList, newTask])
      setNewTask('')
    }
  }


  return (
    <View style={styles.container}>
      <Text>Liste des tâches</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNewTask}
        value={newTask}
        placeholder="Ajouter une nouvelle tâche"
        onSubmitEditing={addNewTask}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={addNewTask}
      >
        <Text>Ajouter</Text>
      </TouchableOpacity>
      {
        taskList?.map((task, index) => <Text key={index}>{task}</Text>)
      }
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    // alignItems: 'center',
    // justifyContent: 'center',
  },

})

export default TaskList