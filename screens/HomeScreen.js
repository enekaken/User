import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import axios from 'axios'


const styles = StyleSheet.create({
  signup: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
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
    width: 150,
    height: 26,
    marginTop:110+35,
    marginLeft: 130,
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
  cardStyle:{
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});


export default class HomeScreen extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    name: null,
    initializing : true,
    user: {workouts: 
      [{date: "6/10/2020",
      workoutId: 1,
      calories: Math.ceil(Math.random() * 2000),
      BPM: Math.ceil(Math.random() * (200 - 60) + 60),
      duration: Math.ceil(Math.random() * 600),
      group: "arms"}]}
    ,
    userauth: null,
    subscriber: "",
    email: null,
    password: "",
    view: 'login',
    signupMessage: "",
    confirmpassword: "",
    loginerror: ""
  }
 
  }
  componentDidMount(){
   firebase.auth().onAuthStateChanged(user => {
     //console.log("here", user)
     if (user) {
       this.setState({userauth:user})
     }

   })
   const { currentUser } = firebase.auth()
   this.setState({ currentUser })

   axios
      .get('http://localhost:5000/user/TheTest2020')
      .then((data)=> {
        let user = data.data
        console.log(user.workouts[0].date);
        this.setState({user: user})})
      .catch((error)=>console.error(error))
  }

   handleLearnMorePress() {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
  }

   handleHelpPress() {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
    );

  }
    
render(){
  const workoutView = this.state.user.workouts.map(((workout, index ) => 
  <View key={index} title="Workout Name" style={styles.cardStyle}>
  <Text>Workout Name</Text>
  <Text>{workout.date}</Text>
  <View style={{flex: 1, flexDirection: 'row',  justifyContent: 'space-around',}}>
  <View style={{flex: 1, flexDirection: 'row',  justifyContent: 'flex-start', alignItems: 'center'}}>
  <Image
      style={styles.tinyLogo}
      source = {require('../assets/images/clock.png')}/>
    <Text>{workout.duration} min </Text>
      </View>
    <View style={{flex: 1, flexDirection: 'row',  justifyContent: 'flex-start', alignItems: 'center'}}>
      <Image
      style={styles.tinyLogo}
      source = {require('../assets/images/fire.png')}/>
        
    <Text>{workout.calories} calories </Text>
    </View>
  </View>
  <View style={{flex: 1, flexDirection: 'row',  justifyContent: 'space-around',}}>
    <View style={{flex: 1, flexDirection: 'row',  justifyContent: 'flex-start', alignItems: 'center'}}>
    <Image
      style={styles.tinyLogo}
      source = {require('../assets/images/heart.png')}/>
      <Text>{workout.BPM}  avg bpm </Text>
  </View>
  <View style={{flex: 1, flexDirection: 'row',  justifyContent: 'flex-start', alignItems: 'center'}}>
  <Image
      style={styles.tinyLogo}
      source = {require('../assets/images/workout.png')}/>
    <Text>{workout.group} </Text>
    </View>
  </View>
</View>))


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
          <Text style={styles.userNameBarText}>Welcome {this.state.user.name}!</Text>
        </View>
        </View>

      : <View>
        <Text>Loading</Text>
      </View>}
      <ScrollView style={styles.container} >
        <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>

          <Text style={
            {fontFamily: 'proxima-nova-xbold',
            fontSize: 22,
            color: 'black',
            textAlign: 'center'}}
            > Your Weekly Progress
            </Text>
            <View style={{flex: 1, flexDirection: 'row',  justifyContent: 'space-around', backgroundColor: "#fff",}}>
        <View style={{width: 40, height: 40}}><Image style={styles.tinyLogo} source = {require('../assets/images/starFull.png')}/></View>
        <View style={{width: 40, height: 40}}><Image style={styles.tinyLogo} source = {require('../assets/images/starEmpty.png')}/></View>
        <View style={{width: 40, height: 40}}><Image style={styles.tinyLogo} source = {require('../assets/images/starFull.png')}/></View>
        <View style={{width: 40, height: 40}}><Image style={styles.tinyLogo} source = {require('../assets/images/starFull.png')}/></View>
        <View style={{width: 40, height: 40}}><Image style={styles.tinyLogo} source = {require('../assets/images/starFull.png')}/></View>
        <View style={{width: 40, height: 40}}><Image style={styles.tinyLogo} source = {require('../assets/images/starEmpty.png')}/></View>
        <View style={{width: 40, height: 40}}><Image style={styles.tinyLogo} source = {require('../assets/images/starFull.png')}/></View>
      </View>
        
    
        {workoutView}
      </View>

      <Button
      title = "Logout"
      onPress = {()=> firebase.auth().signOut()
        .then(() => {
          this.setState({loggedIn: false})
        })
        .catch(function(error) {
          // An error happened
        })}/>


      </ScrollView>
    </View>
  );
  }
  }