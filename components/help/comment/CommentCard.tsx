import { TouchableOpacity, View, Text } from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";

export default function CommentCard({
  comment,
  title,
  postedBy,
  body,
  comments,
  openComments,
}: {
  comment: string;
  title: string;
  postedBy: string;
  body: string;
  comments: boolean;
  openComments: any;
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
          <Button>Like</Button>
          <Button onPress={() => openComments(true)}>Comment</Button>
          <Button>Share</Button>
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
