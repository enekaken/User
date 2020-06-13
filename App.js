import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TextInput, Button } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import * as firebase from 'firebase';

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

   function onAuthStateChange(callback) {
    return 
  }



const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'proxima-nova': require('./assets/fonts/Proxima-Nova.ttf'),
    'proxima-nova-bold': require('./assets/fonts/Proxima-Nova-Bold.ttf'),
    'proxima-nova-xbold': require('./assets/fonts/Proxima-Nova-Xbold.ttf'),
  });
};

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [userauth, setuserAuth] = useState(false)
  const [view, setView] = useState('login')
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmpassword, setConfirmPassword] = useState(null)
  const [loginerror, setLoginmessage] = useState("")
  const [name, setName] = useState(null)
  const [signupMessage, setsignupMessage] = useState(null)

 useEffect(() => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setuserAuth({loggedIn: true, email: user.email});
    } else {
      setuserAuth({loggedIn: false});
    }
  });
  }, []);

  
  
  if(!dataLoaded){
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  if (!isLoadingComplete) {
    return null;
  }
  if (!userauth.loggedIn){
    if (view === 'login')
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
      onChangeText={text => setEmail(text)}
      placeholder = "Username"/>

      <TextInput style={{
        height: 30,
        width: 100,
        borderColor: 'gray',
        borderWidth: 1
      }}
      onChangeText = {text => setPassword(text)}
      secureTextEntry = {true}
      placeholder = "Password"/>

      <View style={styles.fixToText}>
        <Text style={{ color: 'red' }}>{loginerror}</Text>
      <Button
      title = "Login"
      onPress = {()=> {
        if (email === null){
          setLoginmessage("username field cannot be empty")
        }
        
        
        else {firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(error =>{
          var errorCode = error.code;
            var errorMessage = error.message;
              setLoginmessage(error.message)
            })}
          }
        }
      />
      <Button
      title = "Signup"
      onPress = { () => setView("signup")}
      />
      <Button
      title = "Forgot Password"
      onPress = {() =>
        firebase
        .auth()
        .sendPasswordResetEmail(
          email)
          .then(() => {
            setLoginmessage('password reset link sent')
            // Password reset email sent.
          })
          .catch(error =>{
            var errorCode = error.code;
              var errorMessage = error.message;
                setLoginmessage( error.message)
              })
      }/>
      </View>
    </View>
    )
    if (view === 'signup')
      return (
        <View style={styles.signup}>
          <TextInput style={{
              height: 30,
              width: 100,
              borderColor: 'gray',
              borderWidth: 1
            }}
            onChangeText={text => setName(text)}
            placeholder = "Name"/>
          <TextInput style={{
              height: 30,
              width: 100,
              borderColor: 'gray',
              borderWidth: 1
            }}
            onChangeText={text => setEmail(text)}
            placeholder = "email"/>
          <TextInput style={{
              height: 30,
              width: 100,
              borderColor: 'gray',
              borderWidth: 1
            }}
            secureTextEntry = {true}
            onChangeText={text => setPassword(text)}
            placeholder = "password"/>
          <TextInput style={{
              height: 30,
              width: 100,
              borderColor: 'gray',
              borderWidth: 1
            }}
            secureTextEntry = {true}
            onChangeText={text => setConfirmPassword(text)}
            placeholder = "confirm password"/>
            <Text style={{ color: 'red' }}>{signupMessage}</Text>
            <View style={styles.fixToText}>
            <Button
            title = "Submit"
            onPress = { () => {

              if (password != confirmpassword){
                setsignupMessage('Passwords do not match')
            }
            else if( name === null){
              setsignupMessage('Name field cannot be blank')
            }
            else if( email === null){
              setsignupMessage('Email field cannot be blank')
            }
            else {

                firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              
              .catch(error =>{
                var errorCode = error.code;
                var errorMessage = error.message;
                setsignupMessage(error.message)
              })
              .then (()=>{
                firebase.auth().currentUser.updateProfile({
                  displayName: name,
                  photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(function() {
                
                }).catch(function(error) {
                  // An error happened.
                });

              })
            }
          }
          }
            />

            <Button
            title = "Go Back"
            onPress = {() => setView( "login")}
            />
            </View>
        </View>
      )

  }
  

  
  
  else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="root" component={BottomTabNavigator}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  signup: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
