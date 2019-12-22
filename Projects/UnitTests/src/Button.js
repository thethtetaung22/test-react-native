import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class Button extends Component {

    onPressHandler = () => {
        console.log("Button clicked!")
    }

    render() {
        const { buttonStyle, textStyle } = styles;
        return (
            <View>
                <Text> Button Component </Text>
                <TouchableOpacity onPress={this.onPressHandler} style={buttonStyle}>
                    <Text style={textStyle}>
                        Button
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonStyle: {
        height: 45,
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#38ba7d',
        borderBottomWidth: 6,
        borderBottomColor: '#1e6343',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15
    }
};