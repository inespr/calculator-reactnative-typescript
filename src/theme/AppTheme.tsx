import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
backgroundApp: {backgroundColor: 'black', flex: 1, },
calculatorContainer:{paddingHorizontal: 20, flex: 1, justifyContent: 'flex-end'},
result: {color: 'white', fontSize: 60, textAlign: 'right', marginBottom: 10},
smallResult: {color: 'grey', fontSize: 30, textAlign: 'right'},

row:{flexDirection:'row', justifyContent: 'center', marginBottom: 18, paddingHorizontal: 10}
})
