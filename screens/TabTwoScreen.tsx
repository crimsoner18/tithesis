import {
  StyleSheet,
  ScrollView,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import CommentCard from "../components/help/comment/CommentCard";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import uuid from "react-native-uuid";
export default function TabTwoScreen() {
  const DATA: any = [];
  const [posts, setPosts] = useState(DATA);
  const [currentUser, setCurrentUser] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [postData, setPostData] = useState({ title: "", body: "" });
  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");

      if (user) {
        return user;
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getPosts = async () => {
    try {
      const posts = await fetch("https://physics-session.herokuapp.com/posts");

      if (posts) {
        const json = await posts.json();
        setPosts(json);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addPost = async () => {
    try {
      const post = await fetch("https://physics-session.herokuapp.com/posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      const json = await post.json();
      setPosts([...posts, json]);
      setModalVisible(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser().then((user) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    const dataInterval = setInterval(() => {
      getPosts();
    }, 2000);

    return () => clearInterval(dataInterval);
  }, []);
  return (
    <>
      <Modal
        visible={modalVisible}
        animationType="slide"
        style={{ justifyContent: "center", alignItems: "center" }}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <Text>Title</Text>
          <TextInput
            placeholder="Enter Title"
            value={postData.title}
            onChangeText={(value) => {
              setPostData({ ...postData, title: value });
            }}
          />
          <Text>Body</Text>
          <TextInput
            placeholder="Enter Comment"
            value={postData.body}
            onChangeText={(value) => {
              setPostData({ ...postData, body: value });
            }}
          />
        </View>
        <Button
          style={styles.button}
          onPress={() => {
            addPost();
            setModalVisible(!modalVisible);
          }}
        >
          Submit
        </Button>
        <Button
          style={styles.button}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Close
        </Button>
      </Modal>
      <View style={styles.container}>
        <Text style={styles.title}>Posts</Text>
        <Button onPress={() => setModalVisible(true)}>
          <Text>Add Post</Text>
        </Button>

        <FlatList
          extraData={posts}
          data={posts}
          ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <CommentCard
              title={item.title}
              comment={item.body}
              postedBy={item.postedBy}
              body={item.body}
            />
          )}
        />
      </View>
    </>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});
