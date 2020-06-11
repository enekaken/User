import d3 from 'd3';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import ScatterPlot from './scatter-plot';


const styles = {
  width   : 400,
  height  : 300,
  padding : 1,
};


// The number of data points for the chart.
const numDataPoints = 30;

// A function that returns a random number from 0 to 1000
const randomNum = () => Math.floor(Math.random() * 1000);


// A function that creates an array of 30 elements of (x, y) coordinates.
const randomDataSet = () => {
  return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
}

export default class BarChart extends React.Component{
  constructor(props) {
    super(props);
    this.state = { data: randomDataSet() };
  }

  randomizeData() {
    this.setState({ data: randomDataSet() });
  }

  render() {
    return (
    <View>
      <Text>Playing With React and D3</Text>
      <ScatterPlot {...this.state} {...styles} />
      {/* <View className="controls"> */}
        <Button title="Randomize" onPress={() => this.randomizeData()}>
          Randomize Data
        </Button>
      {/* </View> */}
    </View>)
  }
}
