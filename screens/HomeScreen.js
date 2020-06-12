import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

import { MonoText } from '../components/StyledText';

const firebaseConfig = {
      apiKey: "AIzaSyD-LXBYHztZ0-yhAcP7v5dALaoeOrRy_l4",
      authDomain: "hr-mvp-74f84.firebaseapp.com",
      databaseURL: "https://hr-mvp-74f84.firebaseio.com",
      projectId: "hr-mvp-74f84",
      storageBucket: "hr-mvp-74f84.appspot.com",
      messagingSenderId: "737251384820",
      appId: "1:737251384820:web:2db932b1c20fb753806da1",
      measurementId: "G-XK6R1H55D0"
    };

   firebase.initializeApp(firebaseConfig);


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
});


export default class HomeScreen extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    initializing : true,
    user: null,
    subscriber: "",
    email: "",
    password: "",
    view: 'login',
    signupMessage: "",
    confirmpassword: "",
    loginerror: ""
  }
  this.handleemailinput = this.handleemailinput.bind(this);
  this.passwordinput = this.passwordinput.bind(this);
  this.handlenameinput = this.handlenameinput.bind(this)
  this.handleconfirmpassword = this.handleconfirmpassword.bind(this)
  }
  componentDidMount(){
   firebase.auth().onAuthStateChanged(user => {
     console.log("here", user)
     if (user) {
       this.setState({user:user})
       console.log(user)
     }

   })
   const { currentUser } = firebase.auth()
   this.setState({ currentUser })
  }

   handleLearnMorePress() {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
  }

   handleHelpPress() {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
    );

  }
    handleemailinput(e){
      this.setState({
        email: e
      })
    }
    passwordinput(e){
      this.setState({
        password: e
      })
    }
    handlenameinput(e){
      this.setState({
        name: e
      })
    }
    handleconfirmpassword(e){
      this.setState({
        confirmpassword: e
      })
    }

  // useEffect(() => {
  //   const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);




render(){

  //if (this.initializing) return null;
  if (!this.state.user){
    if (this.state.view === 'login')
    return (
      //<View style={styles.container}>
      <View style={styles.signup}>
      <Text>Welcome to the RCJ Fitness App!</Text>
      <Text> Please login or signup to continue</Text>
      <Text></Text>
      <TextInput style={{
        height: 30,
        width: 100,
        borderColor: 'gray',
        borderWidth: 1
      }}
      onChangeText={text => this.handleemailinput(text)}
      placeholder = "Username"/>

      <TextInput style={{
        height: 30,
        width: 100,
        borderColor: 'gray',
        borderWidth: 1
      }}
      onChangeText = {text => this.passwordinput(text)}
      secureTextEntry = {true}
      placeholder = "Password"/>

      <View style={styles.fixToText}>
        <Text>{this.state.loginerror}</Text>
      <Button
      title = "Login"
      onPress = {()=> firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error) {
          var errorCode = error.code;
            var errorMessage = error.message;
        //{() => this.setState({loginerror : errorMessage})}
        console.log(error.message)
      })}
      />
      <Button
      title = "Signup"
      onPress = { () => this.setState({ view: "signup"})}
      />
      </View>
    </View>
      //</View>
    )
    if (this.state.view === 'signup')
return (
    <View style={styles.signup}>
      <Text></Text>
      <TextInput style={{
          height: 30,
          width: 100,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText={text => this.handlenameinput(text)}
        placeholder = "Name"/>
      <TextInput style={{
          height: 30,
          width: 100,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText={text => this.handleemailinput(text)}
        placeholder = "email"/>
      <TextInput style={{
          height: 30,
          width: 100,
          borderColor: 'gray',
          borderWidth: 1
        }}
        secureTextEntry = {true}
        onChangeText={text => this.passwordinput(text)}
        placeholder = "password"/>
      <TextInput style={{
          height: 30,
          width: 100,
          borderColor: 'gray',
          borderWidth: 1
        }}
        secureTextEntry = {true}
        onChangeText={text => this.handleconfirmpassword(text)}
        placeholder = "confirm password"/>
        <Text>{this.state.signupMessage}</Text>
        <View style={styles.fixToText}>
        <Button
        title = "Submit"
        onPress = {() => firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .catch(function(error) {
            var errorCode = error.code;
              var errorMessage = error.message;
          //{() => this.setState({signupMessage : error.message})}
          console.log(error.message)
        })}
        />

        <Button
        title = "Go Back"
        onPress = {() => this.setState({ view: "login"})}
        />
        </View>
    </View>
)

  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
        <Button
      title = "Logout"
      onPress = {()=> firebase.auth().signOut()
        .then(function() {
            this.setState({user:null})
        })
        .catch(function(error) {
            // An error happened
        })}/>


          <Text style={styles.getStartedText}>Open up the code for this screen:</Text>

          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Change any of the text, save the file, and your app will automatically reload.
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={this.handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
        </View>
      </View>
    </View>
  );
  }



  }