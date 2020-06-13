import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

import Friend from '../components/Friend.js';

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
  userFriendsContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 40,

  },
  friendsText:{
    fontFamily: 'proxima-nova-xbold',
    fontSize: 22,
    color: 'black',
    position: 'absolute',
    marginLeft: 40,
    marginTop: 200,
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default class FriendsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      user: null,
      friendsCount: 32,
      friends: friends,

    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/user/TheTest2020')
      .then((data)=> {
        let user = data.data
        //console.log(user);
        this.setState({user: user})})
      .catch((error)=>console.error(error))
  }

  render(){
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {this.state.user ?
        <ScrollView>
          <Image style={styles.userHeader}
            source={{uri: `${this.state.user.profileHeaderImage}`, }}/>

          <Image style={styles.userImage}
            source={{
              uri:`${this.state.user.profileImage}`}} />
          <View style={styles.userNameBar}>
            <Text style={styles.userNameBarText}>{this.state.user.userName}</Text>
          </View>

          <Text style={styles.friendsText}>{this.state.friendsCount} FRIENDS</Text>
          <View style={styles.userFriendsContainer}>




            {this.state.friends.map((friend, index)=>{
             return  <Friend key={index} index={index} friend={friend} style={styles.friendBox}/>
            })}
          </View>


        </ScrollView>

      : <View>
        <Text>Loading</Text>
      </View>}
      </ScrollView>
    )
  }
}

const friends = [
  {name: 'JDaddy24',
  image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24',
  image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},{name: 'JDaddy24',
  image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24',
  image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24',
  image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},{name: 'JDaddy24',
  image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24',
  image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24',
  image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},{name: 'JDaddy24',
  image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24',
  image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24',
  image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},{name: 'JDaddy24',
  image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
  {name: 'JDaddy24', image: `https://m.media-amazon.com/images/M/MV5BMWY5ZmIwOGQtYTJkYS00N2JlLWEyYzMtZjE0ZTAyZDc4M2Q4XkEyXkFqcGdeQXVyNDcyNzEyNTQ@._V1_UX477_CR0,0,477,268_AL_.jpg`},
]