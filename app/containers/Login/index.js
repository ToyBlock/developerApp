import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Label} from 'toy-block';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import loginActions from '../../actions/login';


class Login extends Component {
    handleLogin = () => {

    }
    handleChange = (state) => (value) => {
        this.props.actions.changeValue({
            [state]: value
        });
    }

    render() {
        console.log(this.props);
        let { username, password } = this.props;
        return (
            <View style={styles.container}>
                <Label style={styles.title}>
                    Login
                </Label>
                <View style={styles.item}>
                    <Input
                        value={username}
                        onChange={this.handleChange('username')}
                        placeholder="username"
                    />
                </View>
                <View style={styles.item}>
                    <Input
                        value={password}
                        onChange={this.handleChange('password')}
                        placeholder="password"
                    />
                </View>
                <Button onPress={this.handleLogin} type="primary" shape="full" title="登录"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 34,
        marginBottom: 40,
        marginTop: 100
    },
    item: {
        marginBottom: 20
    }
});



export default connect(
    state => {
        return {
            username: state.login.username,
            password: state.login.password
        }
    }, dispatch => {
        return {
            actions: bindActionCreators(Object.assign({}, loginActions),dispatch)
        };
    })(Login);