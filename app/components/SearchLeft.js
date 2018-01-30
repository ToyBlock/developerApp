import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from './Icon';

export default class SearchLeft extends Component{

    handlePress = () => {
        const { onPress } = this.props;
        this.props.navigation.navigate('search');
        onPress && onPress();
    }
    render() {
        return (
            <View onPress={this.handlePress}>
                <Icon name='search' size={18} style={{ color: '#fff', marginLeft: 10 }} />
            </View>
        )
    }
}