import { useState } from 'react';
import { Button, StyleSheet, View, Text, FlatList, ImageBackground , SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';


export default function App() {

  const [userNumber, setUserNumber] = useState();

  const [gameIsOver, setgameIsOver] = useState(true);

  function gameOverHander(){
    setgameIsOver(true)
  }


  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setgameIsOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHander}/>
  }

  if (gameIsOver && userNumber)
    {
      screen = <GameOverScreen></GameOverScreen>
    }


  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      {/* <ImageBackground source={require('./assets/images/TwoDice.webp')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle = {styles.backgroundImage}>
        
      </ImageBackground> */}
      <SafeAreaView style={styles.rootScreen}>
              {screen}
      </SafeAreaView>
     
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.95
  }
});