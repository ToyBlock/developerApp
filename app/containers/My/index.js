import React, { Component } from 'react';
import { Navbar } from 'toy-block';
import { View, StyleSheet, Text } from 'react-native';

const { StackNavigator }  = Navbar;

class My extends Component{
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <View>
                <Text>
                    我的页面
                </Text>

            </View>
        )
    }
}


export default StackNavigator({
    DashBoard: {
        screen: My,
        path: '/',
        navigationOptions: {
            title: '我的',
            headerStyle: {
                backgroundColor: '#323232'
            },
            headerTitleStyle: {
                color: '#fff'
            }
        },
    },
});