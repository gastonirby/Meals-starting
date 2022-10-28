import { View, Text, StyleSheet } from 'react-native';

function MealDetails({route}) {
    const mealId = route.params.mealId;
    return(
        <Text>MEAL DETAIL SCREEN{mealId}</Text>
    );
}

export default MealDetails;

const styles = StyleSheet.create({

});