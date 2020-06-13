import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';


const style = StyleSheet.create({
  friendBox:{
    backgroundColor: "black",
    height: 100,
    width: '25%',
    borderRadius: 25,
    marginTop: 30,
    marginLeft: 20,

  },

  friendImage:{
    justifyContent: 'center',
    height:56,
    width:55,
    top: 10,
    left: 25,
    padding: 5,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',

  },
  friendName:{
    fontFamily: 'proxima-nova-xbold',
    fontSize: 15,
    top: 10,
    left: 0,
    color: 'white',
    textAlign: 'center',
  },
  mutualFriendText:{
    fontFamily: 'proxima-nova-bold',
    fontSize:10,
    color: 'white',
    top: 12,
    left: 8,
  }
})

export default class Friend extends React.Component{
  constructor(props){
  super(props);
  this.state ={
    friend: this.props,
  };
  }


  render(){
    console.log(this.state.friend.index, 'is index')
    return (
            <View style={style.friendBox}>
              <Image style={style.friendImage}
                source={{uri: this.props.friend.image}} />
              <Text style={style.friendName}>{this.props.friend.name}</Text>
              <Text style={style.mutualFriendText}> 13 Mutual Friends</Text>
            </View>
            )
  }
}
