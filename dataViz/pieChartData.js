import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PieChart from './muscleGroupPieChart.js';

export default class PieData extends Component{
  render(){
    const muscleGroupWorkouts = [
      {muscle: 'Chest', workouts: 4},
      {muscle: 'Arms', workouts: 2},
      {muscle: 'Legs', workouts: 1},
      {muscle: 'Back', workouts: 5},
    ];

return (
  <View styles={styles.container}>
    <PieChart data={muscleGroupWorkouts}
              width={200}
              height={200}
              innerRadius={60}
              outerRadius={100} />
  </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});