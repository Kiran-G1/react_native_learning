import { Text, View , StyleSheet, SafeAreaView} from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { Alert } from "react-native";
import {Ionicons} from '@expo/vector-icons'

function generateRandomBetween(min, max,exclude)
{
    const rndNum = Math.floor(Math.random() * (max-min)) + min;

    if (rndNum===exclude)
        {
            return generateRandomBetween(min, max, exclude);
        }
        else{
            return rndNum;
        }
}

let minBoundary = 1;
let maxBoundary = 100;


function GameScreen({userNumber, onGameOver}){
    const initalGuess = generateRandomBetween(1,100, userNumber)
    const [currentGuess , setCurrentGuess] = useState(initalGuess)
    console.log(currentGuess)

    useEffect(()=>{
        if (currentGuess===userNumber)
            {
                onGameOver();
            }
    }, [currentGuess, userNumber, onGameOver]);    

    function nextGuessHandler(direction)
    {
        if ((direction ==='lower' && currentGuess <userNumber) || 
            (direction==='greater' && currentGuess> userNumber) )
            {
            Alert.alert("Don't Lie !", "this is wrong", [{text:'sorry', style :'cancel'}]
            );
            return;
        }
        if(direction==='lower')
            {
                maxBoundary = currentGuess
            }
        else{
            minBoundary = currentGuess + 1
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary , currentGuess)
        setCurrentGuess(newRndNumber)
    }
    return (
        <View style={styles.screen}>

            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text> Higher or lower ?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}> <Ionicons name="add" size={24}
                    color="white"/> 
                    </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}> <Ionicons name="remove" size={24}
                    color="white"/>  </PrimaryButton>
                </View>
            </View>

        </View>
    )
}

export default GameScreen;


const styles = StyleSheet.create({
    screen: {
        flex : 1,
        margin : 4,
        padding : 24
    },

    title:{
        fontSize : 24,
        fontWeight : 'bold',
        color : 'white',
        textAlign : 'center',
        padding : 5,
        borderWidth : 2,
        borderColor : 'white',
        padding: 12
    }
});