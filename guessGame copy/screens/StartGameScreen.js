import { TextInput, View, StyleSheet, Alert , Text} from 'react-native';
import { useState } from 'react';

import PrimaryButton from '../components/PrimaryButton';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import Colors from '../constants/colors';
import Title from '../components/Title';

function StartGameScreen({onPickNumber}) {

    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(text){
        setEnteredNumber(text)
    }
    
    function resetTheNumber(){
        setEnteredNumber('')
    }

    function confirmInputHandler(text)
    {
        const chosenNumber = parseInt(enteredNumber)
        if(isNaN(chosenNumber) || chosenNumber<=10 || chosenNumber>98)
            {
                Alert.alert('invalid number !', 'entered text is not a number or not in range (0-98)',
                    [{text:'Okay', onPress:resetTheNumber}]
                )
                return ;
            }
        onPickNumber(chosenNumber)
    }
    return (
        <View style = {styles.rootContainer}>
            <Title>Guess my number !</Title>
        <View style={styles.inputContainer}>
            <Text style = {styles.instructionText}>enter a number</Text>
            <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType='number-pad' 
            autoCapitalize='none'
            onChangeText={numberInputHandler}
            value = {enteredNumber}
            >
            </TextInput>

            <View style={styles.buttonsContainer}>

                <View style={styles.buttonContainer}>
                    <PrimaryButton>reset</PrimaryButton>
                </View>


                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress = {confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>

        </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer:{
          flex : 1,
          marginTop:100,
          alignItems : 'center'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 1
    }
    ,
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instructionText:{
        color : Colors.accent500,
        fontSize : 24
    }
});