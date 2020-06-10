import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
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
  friendsPane:{
    flex: 1,
    height: 130,
    width: 184,
    marginTop: 29,
    marginRight: 17,
    marginLeft: 17,
    opacity: .8,
  },
  friendsPaneTextPosition:{
    position: 'absolute',
    top: 35,
    left: 25,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  friendsPaneText:{
    fontFamily: 'proxima-nova-xbold',
    fontSize: 22,
    color: 'white',
  },
  workoutsPane:{
    flex: 1,
    height: 130,
    width: 184,
    marginTop: 29,
    marginRight: 17,
    opacity: .8,
  },
  workoutsPaneTextPosition:{
    position: 'absolute',
    top: 0,
    left: 158,
    right: 0,
    bottom: 527,
    justifyContent: 'center',
    alignItems: 'center',
  },
  workoutsPaneText:{
    fontFamily: 'proxima-nova-xbold',
    fontSize: 22,
    color: 'white',
  },
  performancePane:{
    height: 244,
    width: 385,
    marginLeft: 14,
    marginRight: 18,
    marginTop: 18,
    marginBottom: 18,
    opacity: .9,
  },
  performancePaneTextPosition:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 225,
    justifyContent: 'center',
    alignItems: 'center',
  },
  performancePaneText:{
    fontFamily: 'proxima-nova-xbold',
    fontSize: 22,
    color: 'white',
  },
  userFeed:{
    height: 190,
    width: 386,
    marginLeft: 14,
    marginRight: 18,
    opacity: .9,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
  },

});

export default class UserScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      user: null,
    }
  }

  ComponentDidMount(){
    axios
      .get('http://localhost:5000/user/TheTest2020')
      .then((data)=> {
        console.log(data, '/n', '/n');
        this.setState({user: data})})
        .catch((error)=>console.error(error))
  }

  optionButton({ icon, label, onPress, isLastOption }) {
    return (
      <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>{label}</Text>
          </View>
        </View>
      </RectButton>
    );
  }

  render(){
    return (
      <View style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View >
        <Image style={styles.userHeader}
          source={{uri: "https://cdn.pixabay.com/photo/2018/02/02/04/32/red-3124617_960_720.png", }}/>


        <Image style={styles.userImage}
          source={{uri:"https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv"}} />
        <View style={styles.userNameBar}>
          <Text style={styles.userNameBarText}>Username</Text>
        </View>

        </View>


        <View style={styles.userLinksContainer}>
          <Image
            style={styles.friendsPane}
            source={require('../assets/images/friendsPane.jpg')}
            onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
          />
          <View style={styles.friendsPaneTextPosition}>
            <Text style={styles.friendsPaneText}>FRIENDS</Text>
          </View>

          <Image
            style={styles.workoutsPane}
            source={require('../assets/images/workoutsPane.jpg')}
            onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
          />
          <View style={styles.workoutsPaneTextPosition}>
            <Text style={styles.workoutsPaneText}>WORKOUTS</Text>
          </View>

          <Image
            style={styles.performancePane}
            source={require('../assets/images/performancePane.jpg')}
          />
          <View style={styles.performancePaneTextPosition}>
            <Text style={styles.performancePaneText}>PERFORMANCE</Text>
          </View>

          <View style={styles.userFeed}>

          </View>

        </View>
      </View>
    );
  }
}