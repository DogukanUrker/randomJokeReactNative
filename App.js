import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [setup, setSetup] = useState(null);
  const [punchline, setPunchline] = useState(null);
  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setSetup(data.setup);
        setPunchline(data.punchline);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.setup}>{setup}</Text>
      <Text style={styles.punchline}>{punchline}</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  setup: {
    textAlign: "center",
    fontSize: 16,
    padding: 4,
    color: "#fff",
  },
  punchline: {
    textAlign: "center",
    marginTop: 4,
    fontSize: 18,
    padding: 4,
    color: "#fff",
  },
});
