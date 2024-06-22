import { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const[modalIsVisible, setmodalIsVisible] = useState(false);

  function startAddGoalHandler(){
    setmodalIsVisible(true);
  }

  function stopAddGoalHandler(){
    setmodalIsVisible(false);
  }
  //var goals = []
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  };
  function addGoalHander() {
    if (enteredGoalText){
      setCourseGoals([...courseGoals, enteredGoalText])
    }
    setmodalIsVisible(false);
  };

  function clearGoalsHandler() {
    setCourseGoals([])
  }

  function deleteGoalHandler(goalToDelete){
    setCourseGoals(currentCourseGoals=>{
      return currentCourseGoals.filter((goal)=> goal!=goalToDelete)
    })
  }

  return (
    <>
    <StatusBar style="light"></StatusBar>
    <View style={styles.appContainer}>
      <Button title = 'Add new Goal' color="#a065ec" onPress={startAddGoalHandler}></Button>

      {/* {modalIsVisible && <GoalInput onAddGoal={addGoalHander} onTextChange={goalInputHandler} />} */}

      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHander} onTextChange={goalInputHandler} onCancelGoal = {stopAddGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={
            (itemData) => {
              return (
                <GoalItem text={itemData.item} onDeleteItem={deleteGoalHandler}/>
              );
            }
          }
        />
        <Button title="Clear goals" onPress={clearGoalsHandler}></Button>
      </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 50
  }
  ,
  goalsContainer: {
    flex: 4
  }
});