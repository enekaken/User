import React, { Component } from 'react'
import { G, Rect, Text } from 'react-native-svg'

export default class BarChartLegend extends Component {

  render () {
    let {names, colors, x, y} = this.props
    return (
      <G fill='none'>
         {names.map(
             (name, i) => <Text
                            key={name}
                            fill={colors[i % colors.length]}
                            stroke={colors[i % colors.length]}
                            fontSize='12'
                            x={x}
                            y={(y + 17 + (i * 28))}
                           >
                            {name}
                          </Text>
           )}
      </G>
    )
  }
}