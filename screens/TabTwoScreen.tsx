import { StyleSheet, ScrollView, FlatList } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import CommentCard from "../components/help/comment/CommentCard";
import { useState } from "react";
import { Button } from "react-native-paper";
export default function TabTwoScreen() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  const [posts, setPosts] = useState(DATA);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>

      <Button
        onPress={() => {
          setPosts([
            ...posts,
            {
              id: "58694a0f-3da1-471f-bd96-145571e29d72",
              title: "Third Item",
            },
          ]);
        }}
      >
        Add post
      </Button>
      <FlatList
        data={posts}
        ItemSeparatorComponent={() => (
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
        )}
        renderItem={({ item }) => <CommentCard title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
