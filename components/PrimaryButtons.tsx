import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const PrimaryButtons = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <View style={styles.buttonOtherContainer}>
      <Pressable
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButtons;

const styles = StyleSheet.create({
  buttonOtherContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
