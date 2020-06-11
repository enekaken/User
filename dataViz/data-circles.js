import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as d3 from 'd3';
import {G, Circle} from 'react-native-svg';

const renderCircles = (props) => {
  return (coords, index) => {
    const circleProps = {
      cx: props.xScale(coords[0]),
      cy: props.yScale(coords[1]),
      r: 2,
      fill: "rgba(25,158,199,.9)",
      key: index
    };
    return <Circle {...circleProps} />;
  };
};

export default (props) => {
  return <G>{ props.data.map(renderCircles(props)) }</G>
}