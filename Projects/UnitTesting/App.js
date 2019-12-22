/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react'
import Login from './src/Login'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

let AppStack = createStackNavigator({
  login: { screen: Login },
}, {
  initialRouteName: 'login',
})

let Navigation = createAppContainer(AppStack);

class App extends React.Component {
  render() {
    return (
      <Navigation />
    );
  }
}



export default App