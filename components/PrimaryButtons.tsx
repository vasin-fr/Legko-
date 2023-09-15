import { View, Text } from "react-native";

const PrimaryButtons = ({ title }: { title: string }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default PrimaryButtons;
