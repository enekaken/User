import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import BarChart from './activityBarChart';

export default class BCData extends Component{
  render(){
    const data = [
      {label: 'Mon', value: 500},
      {label: 'Tue', value: 312},
      {label: 'Wed', value: 0},
      {label: 'Thu', value: 745},
      {label: 'Fri', value: 689},
      {label: 'Sat', value: 200},
      {label: 'Sun', value: 62}
    ]
  const total = (data) =>{

  let total = 0;
  for(let i = 0; i < data.length; i++){
    total+= data[i].value;
  }
  return total;
};


    return (
      <View style={styles.container}>
        <BarChart data={data} total={total(data)} round={10} unit="cals"/>
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