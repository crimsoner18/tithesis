import { TouchableOpacity, View, Text } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

export default function CommentCard({
  comment,
  title,
  postedBy,
  body,
}: {
  comment: string;
  title: string;
  postedBy: string;
  body: string;
}) {
  return (
    <TouchableOpacity>
      <Card style={{ height: 200, width: 300 }}>
        <Card.Title title={title} subtitle={`Posted By: ${postedBy}`} />
        <Card.Content>
          <Paragraph>{body}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
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
