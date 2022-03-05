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
      title: "Sample Title",
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
              title: "Sample Title",
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
            // lightColor="#eee"
            // darkColor="rgba(255,255,255,0.1)"
          />
        )}
        renderItem={({ item }) => <CommentCard title={item.title} comment={""} />}
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
