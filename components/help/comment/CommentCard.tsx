import { TouchableOpacity, View, Text } from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import React, { useState } from "react";
export default function CommentCard({
  comment,
  title,
  postedBy,
  body,
  comments,
  openComments,
  selectedPost,
  setSelectedPost,
  id,
  commentData,
  setCommentData,
  getComments,
}: {
  comment: string;
  title: string;
  postedBy: string;
  body: string;
  comments: boolean;
  openComments: any;
  selectedPost: String;
  setSelectedPost: any;
  id: string;
  commentData: Object;
  setCommentData: any;
  getComments: any;
}) {
  return (
    <>
      <Card
        style={{
          maxHeight: 500,
          width: 300,
          marginBottom: 5,
        }}
      >
        <Card.Title title={title} subtitle={`Posted By: ${postedBy}`} />
        <Card.Content style={{ maxHeight: "70%" }}>
          <Paragraph>{body} </Paragraph>
        </Card.Content>
        <Card.Actions
          style={{
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          <Button
            onPress={() => {
              openComments(true),
                setSelectedPost(id),
                setCommentData({ ...commentData, post: id });
              getComments(id);
            }}
          >
            Comment
          </Button>
        </Card.Actions>
      </Card>
    </>
  );
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    borderRadius: 10,
    // backgroundColor: "#fff",
    shadowColor: "#000",
  },
};
