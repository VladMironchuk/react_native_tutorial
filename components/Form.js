import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import { useState } from "react";

export default function Form({ onAddItem }) {
  const [text, setText] = useState("");

  const onChangeText = (enteredText) => {
    setText(enteredText);
  };

  const onPress = () => {
    setText("");
    return onAddItem(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter a todo..."
        value={text}
      />
      <View style={styles.button}>
        <Button title="Add todo" onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    backgroundColor: "silver",
  },
  button: {
    width: "45%",
    color: "black",
    margin: "auto",
  },
});
