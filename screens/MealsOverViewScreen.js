import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/data";

function MealsOverViewScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals OverView Screen</Text>
    </View>
  );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
