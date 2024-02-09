import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Tasks from './components/Tasks';
import React, {useState} from 'react';

export default function App() {

  const [task, setTask] = useState("");
const [taskItems, setTaskItems] = useState([])

const handleAddtask = () => {
  Keyboard.dismiss()
  if (!task) {
    return;
  }
  setTaskItems([...taskItems, task]);
  setTask(""); 
}


const completeTask = (index) =>{
  let ItemCopy = [...taskItems]
  ItemCopy.splice(index, 1);
  setTaskItems(ItemCopy)
}


  return (
    <View style={styles.container}>

      {/* today's task */}
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Today's Task 🔥 🔥 🔥</Text>

        <View style={styles.item}>

{
  taskItems.map((item, index) => (
    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
      <Tasks text={item} />
    </TouchableOpacity>
  ))
}

        </View>

      </View>



      {/* type here */}
      <KeyboardAvoidingView behavior={Platform.OS==="ios" ? "padding" : "height"} style={styles.Writewrapper}>
        <TextInput style={styles.input}  placeholder={"Input your task here 📅"}  onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddtask()}>
          <View style={styles.addWrapper}>
          <Text style={styles.addText}>➕</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
   
  },
  textWrapper:{
    padding: 80,
    paddingHorizontal: 20,
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',

  },
  item:{
marginTop: 30
  },

  Writewrapper:{
      position: 'absolute',
      bottom: 60,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
  },

  input:{
      paddingVertical: 15,
      width: 250,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      borderRadius: 60,
      borderWidth: 1,
      borderColor: "#c0c0c0"
  },

  addWrapper:{
      width: 60,
      height: 60,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 60,
  },

  addText:{

  }
});
