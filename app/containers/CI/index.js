import React, { Component } from 'react';
import { Navbar } from 'toy-block';
import { View, StyleSheet, Text } from 'react-native';

const { StackNavigator }  = Navbar;

class CI extends Component{
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <View>
                <Text>
                    持续集成页面
                </Text>

            </View>
        )
    }
}


export default StackNavigator({
    DashBoard: {
        screen: CI,
        path: '/',
        navigationOptions: {
            title: '持续集成',
            headerStyle: {
                backgroundColor: '#323232'
            },
            headerTitleStyle: {
                color: '#fff'
            }
        },
    },
});