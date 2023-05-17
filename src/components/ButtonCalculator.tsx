import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  text: string;
  color?: string;
  witdh?: boolean;
  action: ( act: string ) => void;
}

export const ButtonCalculator = ({
  text,
  color = "#2D2D2D",
  witdh = false,
  action
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: witdh ? 160 : 70,
        }}
      >
        <Text
          style={{
            ...styles.buttonText,
            color: color === "#9B9B9B" ? "black" : "white",
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2D2D2D",
    height: 70,
    width: 70,
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "400",
    fontSize: 25,
    textAlign: "center",
  },
});
