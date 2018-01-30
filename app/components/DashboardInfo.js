import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DashboardInfo extends Component{
    render() {
        let { count, title, onPress } = this.props;
        return (
            <View onPress={onPress}>
                <Text style={styles.infoCount}>
                    { count }
                </Text>
                <Text style={styles.infoTitle}>
                    { title }
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    infoCount: {
        color: '#fff',
        fontSize: 20,
        height: 30,
        textAlign: 'center',
        marginBottom: 10
    },
    infoTitle: {
        color: '#fff',
        height: 30
    }
})