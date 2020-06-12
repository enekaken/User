import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import BarChart from './activityBarChart';

export default class BCData extends Component{
  render(){
    const data = [
      {label: 'Mon', calories: 500, minutes: 45},
      {label: 'Tue', calories: 312, minutes: 30},
      {label: 'Wed', calories: 0, minutes: 5},
      {label: 'Thu', calories: 745, minutes: 30},
      {label: 'Fri', calories: 689, minutes: 100},
      {label: 'Sat', calories: 200, minutes: 60},
      {label: 'Sun', calories: 62, minutes: 15}
    ]
  const total = (data) =>{

  let total = 0;
  for(let i = 0; i < data.length; i++){
    total+= data[i].calories;
  }
  return total;
};


    return (
      <View style={styles.container}>
        <BarChart data={data} total={total(data)} round={120} unit="cals"/>
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