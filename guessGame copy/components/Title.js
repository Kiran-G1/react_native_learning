import { Text, View , StyleSheet, SafeAreaView} from "react-native";

function Title({children}){

    return (
        <View style={styles.screen}>
            <Text style = {styles.title}>{children}</Text>
        </View>
    )

}

export default Title;


const styles = StyleSheet.create({
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