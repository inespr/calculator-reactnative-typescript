import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CalculatorScreen } from "./src/screens/CalculatorScreen";
import { styles } from './src/theme/AppTheme';
import { StatusBar } from "expo-status-bar";
const App = () => {
  return (
    <SafeAreaView style={styles.backgroundApp}>
      <StatusBar
      backgroundColor="black"
      style="light"
      />
      <CalculatorScreen />
    </SafeAreaView>
  );
};
export default App;
