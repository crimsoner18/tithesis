import { StyleSheet, ScrollView, FlatList, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import CommentCard from "../components/help/comment/CommentCard";
import React, { useEffect, useState } from "react";
import { Button, Card, FAB, TextInput } from "react-native-paper";
export default function TabTwoScreen() {
  const DATA: any = [];
  const [posts, setPosts] = useState(DATA);
  const [currentUser, setCurrentUser] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [commentData, setCommentData] = useState({
    commentedBy: "",
    content: "",
    post: "",
  });
  const [postData, setPostData] = useState({
    title: "",
    body: "",
    postedBy: "",
  });
  const [selectedPost, setSelectedPost] = useState();
  const [comments, setComments] = useState([]);

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
    setPostData({ ...postData, postedBy: currentUser });
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
  const addComment = async () => {
    setCommentData({
      ...commentData,
      commentedBy: currentUser,
    });
    try {
      const response = await fetch(
        "https://physics-session.herokuapp.com/comments",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentData),
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const getComments = async (postId) => {
    try {
      const response = await fetch(
        `https://physics-session.herokuapp.com/comments/${postId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setComments(json);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(comments);
  useEffect(() => {
    getUser().then((user) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    const dataInterval = setInterval(() => {
      selectedPost && getComments(selectedPost);
    }, 2000);

    return () => clearInterval(dataInterval);
  }, [selectedPost]);
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <Modal
        visible={commentModal}
        animationType="slide"
        onRequestClose={() => setCommentModal(false)}
      >
        <View style={{ justifyContent: "flex-end", height: "100%" }}>
          <FlatList
            data={comments}
            renderItem={({ item }) => {
              return (
                <View style={{ margin: 10 }}>
                  <Card>
                    <Card.Title
                      title={item.commentedBy}
                      subtitle={item.datePosted}
                    />
                    <Card.Content>
                      <Text>{item.content}</Text>
                    </Card.Content>
                  </Card>
                </View>
              );
            }}
          />
          <Button onPress={() => setCommentModal(false)}>Close</Button>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <TextInput
              onChangeText={(value) => {
                setCommentData({ ...commentData, content: value });
              }}
              label="Comment"
              style={{ width: "80%" }}
            />
            <Button
              style={{ width: "10%" }}
              icon="send"
              onPress={() => addComment()}
            ></Button>
          </View>
        </View>
      </Modal>
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

        <FlatList
          extraData={posts}
          data={posts}
          ItemSeparatorComponent={() => <View style={{ margin: "2%" }}></View>}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <CommentCard
              id={item._id}
              title={item.title}
              comment={item.body}
              postedBy={item.postedBy}
              body={item.body}
              comments={commentModal}
              openComments={setCommentModal}
              selectedPost={selectedPost}
              setSelectedPost={setSelectedPost}
              commentData={commentData}
              setCommentData={setCommentData}
              getComments={getComments}
            />
          )}
        />
      </View>
      <FAB
        icon={"plus"}
        style={{
          position: "absolute",
          margin: 16,
          right: 0,
          bottom: 0,
        }}
        onPress={() => {
          setModalVisible(true);
        }}
      />
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
