import React, { Component } from 'react';
import * as d3 from 'd3';
import { Svg, G, Line, Piechart, Text, Path, } from 'react-native-svg';

const Arc = ({ data, index, createArc, colors, format }) => (
  <G key={index} className="arc">
    <Path className="arc" d={createArc(data)} fill={colors(index)} />
    <Text
      transform={`translate(${createArc.centroid(data)})`}
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="white"
      fontSize="10"
    >
      {(data)}
    </Text>
  </G>
);



const PieChart = props => {
  const createPie = d3
    .pie()
    .value((d) => d.muscle)
    .sort(function(a,b){
      return a.muscle.localeCompare(b.muscle);
    });

  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius)
    .startAngle(0)
    .endAngle(.25* Math.PI)
    .padAngle(.02)
    .cornerRadius(3)
    .padRadius(100);
  const colors = d3.scaleOrdinal(d3.schemeCategory10);
  const data = props.data;

  return (
    <Svg width={props.width} height={props.height}>
      <G transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
        {data.map((d, i) => (
          <Arc
            key={i}
            data={d.muscle}
            index={i}
            createArc={createArc}
            colors={colors}
          />
        ))}
      </G>
    </Svg>
  );
};

export default PieChart;