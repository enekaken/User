import React, { PureComponent } from 'react';
import { Svg, G, Line, Rect, Text } from 'react-native-svg';
import * as d3 from 'd3';

const GRAPH_MARGIN = 15;
const GRAPH_BAR_WIDTH = 8;
const colors = {
  axis: '#000',
  bars: '#15AD13'
}

export default class BarChart extends PureComponent {
  render() {
    //dimensions
    const SVGHeight = 165;
    const SVGWidth = 300;
    const graphHeight = SVGHeight -2 * GRAPH_MARGIN;
    const graphWidth = SVGWidth -2 * GRAPH_MARGIN;
    const data = this.props.data;
    const total = this.props.total;

    //X Scale Point
    const xDomain = data.map((item) => item.label);
    const xRange = [0, graphWidth];
    const x = d3.scalePoint()
          .domain(xDomain)
          .range(xRange)
          .padding(1)

    //Y Scale Linear
    const maxValue = d3.max(data, d => d.value);
    const topValue = Math.ceil(maxValue);
    const yDomain = [0, d3.max(data , d => d.value)];
    const yRange = [0, graphHeight];
    const y = d3.scaleLinear()
          .domain(yDomain)
          .range(yRange)

    //Top and Middle Axis
    const middleValue = topValue / 2;

    return (
      <Svg width={SVGWidth} height={SVGHeight}>
        <G y={graphHeight + GRAPH_MARGIN + 2}>
          {/* top axis */}
          <Line
            x1="0"
            y1={y(topValue) * -1}
            x2={graphWidth}
            y2={y(topValue) * -1}
            stroke={colors.axis}
            strokeDasharray={[10,5]}
            strokeWidth=".7"
          />

          {/* middle axis */}
          <Line
            x1="0"
            y1={y(middleValue) * -1}
            x2={graphWidth}
            y2={y(middleValue) * -1}
            stroke={colors.axis}
            strokeDasharray={[3, 3]}
            strokeWidth="0.4"
          />
          {/* labels */}


          {/* bottom axis */}
          <Line
            x1="0"
            y1="2"
            x2={graphWidth}
            y2="2"
            stroke={colors.axis}
            strokeWidth="0.5"
          />

           {/* bars */}
           {data.map(item => (
            <Rect
              key={'bar' + item.label}
              x={x(item.label) - (GRAPH_BAR_WIDTH / 2)}
              y={y(item.value) * -1}
              rx={3}
              width={GRAPH_BAR_WIDTH}
              height={y(item.value)}
              fill={colors.bars}
            />
          ))}

          {/*labels for day */}
          {data.map(item => (
              <Text
                key={item.label}
                fontSize={12}
                x={x(item.label) - (GRAPH_BAR_WIDTH / 2) - 5}
                y={12}
                fill='black'
              >
                {item.label}
              </Text>
          ))}

          {data.map(item => (
              <Text
                key={item.label}
                fontSize={11}
                x={x(item.label) - (GRAPH_BAR_WIDTH / 2) - 7}
                y={y(topValue) * -1 - 3}
                fill='black'
                fontWeight='bold'
              >
                {item.value}
              </Text>
          ))}


        </G>
      </Svg>
    )
  }
}