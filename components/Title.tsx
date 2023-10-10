import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Title = ({ text }: { text: string }) => {
  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
