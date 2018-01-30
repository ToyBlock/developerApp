import React, { Component } from 'react';
import { Navbar, Theme, Search, ListRow } from 'toy-block';
import { View, StyleSheet, Text, StatusBar, ScrollView } from 'react-native';
import Icon from '../../components/Icon';
import SearchLeft from '../../components/SearchLeft';
import SearchPage from '../../components/SearchPage'
import AppCard from '../../components/AppCard';

const { StackNavigator }  = Navbar;

class AppManager extends Component{
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <View>
                <StatusBar
                    barStyle="light-content"
                />
                <ListRow detail={
                    <Search style={{width: 350}} placeholder='搜索应用' clearButtonMode='while-editing' />
                } topSeparator='full' bottomSeparator='full' />
                <ScrollView style={styles.appList}>
                    <AppCard />
                    <AppCard />
                    <AppCard />
                    <AppCard />
                    <AppCard />
                    <AppCard />
                    <AppCard />
                    <AppCard />
                    <AppCard />
                    <AppCard />
                    <AppCard />
                    <AppCard />

                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    appList: {
        marginBottom: 47
    }
})


export default StackNavigator({
    DashBoard: {
        screen: AppManager,
        path: '/',
        navigationOptions: {
            title: '应用管理',
            headerStyle: {
                backgroundColor: '#323232'
            },
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <SearchLeft />,
            headerRight: <Icon name='filter' size={18} style={{ color: '#fff', marginRight: 10 }} />
        },

    },
    Search: {
        screen: SearchPage,
        path: 'search'
    }
});