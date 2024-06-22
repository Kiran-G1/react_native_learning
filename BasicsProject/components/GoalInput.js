import { StyleSheet, View, TextInput, Button, Modal , Image} from "react-native";


function GoalInput(props) {

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput style={styles.textStyle} placeholder="Your course goal"
                    onChangeText={props.onTextChange}>
                </TextInput>

                <View style={styles.buttonContainer}>
                    
                    <View style={styles.button}>
                    <Button title="Cancel goal" onPress={props.onCancelGoal} color="#f31282"></Button>
                    </View>

                    <View style={styles.button}>
                    <Button title="Add goal" onPress={props.onAddGoal} color="#b180f0"></Button>
                    </View>
                    
                </View>

            </View>

        </Modal>
    );

};

export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding : 16,
        backgroundColor : '#311b6b'
    },
    image:{
        width: 100,
        height : 100,
        margin: 20
    },
    textStyle: {
        color: '#120438',
        fontWeight : 'bold',
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius : 6,
        width: '80%',
        marginRight: 8,
        padding: 16
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    button:{
        width: '40%',
        marginHorizontal: 8
    }
});