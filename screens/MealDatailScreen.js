import { Text, View } from "react-native";

function MealDatailScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>This Meal detail screen (MEAL ID: {mealId})</Text>
    </View>
  );
}

export default MealDatailScreen;
