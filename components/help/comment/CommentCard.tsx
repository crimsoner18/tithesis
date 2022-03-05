import { TouchableOpacity, View, Text } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

export default function CommentCard({
  comment,
  title,
}: {
  comment: string;
  title: string;
}) {
  return (
    <TouchableOpacity>
      <Card style={{ height: 200, width: 300 }}>
        <Card.Title title={title} subtitle="Sample post" />
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>Sample</Paragraph>
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
