import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ListItem({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 20,
    width: "60%",
    margin: "auto",
  },
});
