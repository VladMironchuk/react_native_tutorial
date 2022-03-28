import { SafeAreaView, FlatList, Text } from "react-native";
import { useState } from "react";
import Header from "./components/header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Buy milk", id: "milk" },
    { text: "Buy apples", id: "apples" },
    { text: "Buy bananas", id: "bananas" },
    { text: "Buy cereal", id: "cereal" },
  ]);

  const onAddItem = (text) => {
    setListOfItems((prevState) => [...prevState, { text, id: Math.random() }]);
  };

  const onRemoveItem = (id) => {
    setListOfItems((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView>
      <Header />
      <Form onAddItem={onAddItem} />
      <FlatList
        data={listOfItems}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => onRemoveItem(item.id)}
            key={item.id}
            text={item.text}
          />
        )}
      />
    </SafeAreaView>
  );
}
