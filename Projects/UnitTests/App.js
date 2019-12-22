import React, { Component } from 'react'
import Button from './src/Button'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
export default class App extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

const AppNavigator = createStackNavigator({
  Button: Button,
},
{
    initialRouteName: 'Button',
}
);

export default createAppContainer(AppNavigator);
