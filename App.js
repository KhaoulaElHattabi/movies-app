import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View , Button} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Press Me!</Text>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "crimson",
    alignItems: "center",
    justifyContent: "center",
  },
});
