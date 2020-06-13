import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import * as d3 from 'd3';
import { Surface, Group, Shape, ART } from '@react-native-community/art';

export default class PieChart extends React.Component{
render(){
const muscleGroupWorkouts = [
      {muscle: 'Chest', workouts: 4},
      {muscle: 'Arms', workouts: 2},
      {muscle: 'Legs', workouts: 1},
      {muscle: 'Back', workouts: 5},
    ];

const width = 250;
const height =250;

const sectionAngles = d3.pie().value(d=> d.workouts)(muscleGroupWorkouts);
const path = d3.arc().outerRadius(100).padAngle(.05).innerRadius(60);
const colors = d3.scaleLinear()
  .domain([0, muscleGroupWorkouts.length]).range([0, 255])

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


    return (
      <Surface width={width} height={height}>
      <Group x={width/2} y={height/2}>
        {console.log(sectionAngles, ' IN RETURN STATEMENT')}
          {sectionAngles.map((section) => (
            <Shape
                key={section.index}
                d={path(section)}
                stroke="#000"
                fill={`rgb(0,0,255)`}
                strokeWidth={1}
              />
          ))
          }
        </Group>
      </Surface>
    );
  }
}

