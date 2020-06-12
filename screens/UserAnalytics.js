import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

import BCData from '../dataViz/dailyActivityBCData.js';
import PieData from '../dataViz/pieChartData.js';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  userHeader:{
    marginTop: 35,
    height: 141,
  },
  userImage:{
    position: 'absolute',
    marginTop:14+35,
    marginLeft: 162,
    height:91,
    width:90,
    borderRadius: 50,
  },
  userNameBar:{
    position: 'absolute',
    backgroundColor: 'white',
    width: 96,
    height: 26,
    marginTop:110+35,
    marginLeft: 159,
    marginRight: 159,
    marginBottom: 5,
    borderRadius: 25,
  },
  userNameBarText:{
    fontFamily: 'proxima-nova-bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: 6.5,
    bottom: 6.5,
  },
  userLinksContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  performancePaneText:{
    fontFamily: 'proxima-nova-xbold',
    fontSize: 22,
    color: 'black',
    position: 'absolute',
    marginLeft: 92,
    marginTop: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  barChart:{
    marginTop: 120+35,
    marginLeft: 70,
    backgroundColor: 'white',
    marginBottom: 30,

  },

  pieChart:{
    marginTop: 140,
    marginLeft: 70,
  },
  pieChartDesc:{
    fontFamily: 'proxima-nova-xbold',
    fontSize: 22,
    color: 'black',
    position: 'absolute',
    marginLeft: 110,
    marginTop: 280,
    alignItems: 'center',
    textAlign: 'center',
  }
});

export default class UserScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      user: null,
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/user/TheTest2020')
      .then((data)=> {
        let user = data.data
        console.log(user);
        this.setState({user: user})})
      .catch((error)=>console.error(error))
  }

  render(){
    return (
      <View style={styles.container} contentContainerStyle={styles.contentContainer}>
        {this.state.user ?
        <View>
          <Image style={styles.userHeader}
            source={{uri: `${this.state.user.profileHeaderImage}`, }}/>

          <Image style={styles.userImage}
            source={{
              uri:`${this.state.user.profileImage}`}} />
          <View style={styles.userNameBar}>
          <Text style={styles.userNameBarText}>{this.state.user.userName}</Text>
        </View>

          <View style={styles.userLinksContainer}>
            <Text style={styles.performancePaneText}>CALORIES THIS WEEK</Text>
            <View style={styles.barChart}>
              <BCData />
            </View>

            <Text style={styles.pieChartDesc}>MUSCLE GROUPS</Text>
            <View style={styles.pieChart}>
              <PieData />
            </View>
          </View>
        </View>

      : <View>
        <Text>Loading</Text>
      </View>}
      </View>
    );
  }
}