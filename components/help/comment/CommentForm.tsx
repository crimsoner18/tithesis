import { TextInput } from "react-native-paper";

export default function CommentForm({
  title,
  comment,
  onSubmit,
  user,
}: {
  title: string;
  comment: string;
  onSubmit: Function;
  user: any;
}) {
  return (
    <>
      <TextInput label="Title" value={title} mode="outlined" />
    </>
  );
}
