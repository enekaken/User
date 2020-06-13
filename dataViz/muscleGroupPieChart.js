import React, { Component } from 'react';
import * as d3 from 'd3';
import { Svg, G, Line, Piechart, Text, Path, } from 'react-native-svg';

const Arc = ({ path, index, colors}) => (
  <G key={index} className="arc">
    <Path className="arc" d={path} fill={colors} />
    <Text
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="white"
      fontSize="10"
    >
      Chest
    </Text>
  </G>
);



const PieChart = props => {
  const createPie = d3
    .pie()
    .value((d) => d.workouts)
    .sort(function(a,b){
      return a.workouts.localeCompare(b.workouts);
    });

    let lastDegree = 0;

    const arcArray = props.data.map((workoutInfo, i) => {
      const arcWidth = workoutInfo.workouts * 30;

      const arc = d3
        .arc()
        .startAngle(lastDegree)
        .endAngle(lastDegree + arcWidth)
        .innerRadius(props.innerRadius)
        .outerRadius(props.outerRadius)
        .padAngle(1)
        .cornerRadius(3)
        .padRadius(500);

      lastDegree += arcWidth;
      return arc();
    });

  const colors = ['red', 'blue', 'green', 'yellow'];
  const data = props.data;
  console.log('ArcArray', arcArray);




  return (
    <Svg width={props.width} height={props.height}>
      <G transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
        {arcArray.map((path, i) => (
          <Arc
            key={i}
            path={path}
            index={i}
            colors={colors[i]}
          />
        ))}
      </G>
    </Svg>
  );
};

export default PieChart;