/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, {id: Math.random(), task}]);
    setTask('');
  };
  const deleteTask = id => {
    // eslint-disable-next-line no-shadow
    setTaskList(taskList.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Escribe la tarea"
          autoFocus
          onChangeText={text => setTask(text)}
          value={task}
        />
        <Button
          onPress={() => addTask()}
          title="Agregar"
          color="#373F51"
          disabled={task.trim().length === 0}
        />
      </View>

      <View style={styles.taskListContainer}>
        <Text style={styles.taskListTitle}>Listado:</Text>
        {taskList.length > 0 ? (
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={taskList}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity onPress={() => deleteTask(item.id)}>
                  <Text style={styles.textDelete}> X</Text>
                </TouchableOpacity>
                <Text style={styles.textList}>{item.task}</Text>
              </View>
            )}
          />
        ) : (
          <Text>Aún no tienes tareas...</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
  },
  textInput: {
    flex: 0.8,
    borderBottomWidth: 1,
    borderBottomColor: '#58A4B0',
  },
  taskListTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#58A4B0',
  },
  textDelete: {
    backgroundColor: '#1B1B1E',
    width: 18,
    height: 18,
    marginHorizontal: 275,
    color: 'white',
    fontWeight: 'bold',
  },
  textList: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#A9BCD0',
    fontSize: 20,
  },
  taskListContainer: {
    paddingHorizontal: 50,
    marginTop: 30,
  },
});

export default App;
