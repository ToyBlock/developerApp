import { Navbar } from 'toy-block';
import { ScrollView, Button, StatusBar} from 'react-native';
const { SafeAreaView } = Navbar;
import SampleText from './SampleText';
import React from 'react';

const MyNavScreen = ({ navigation, banner }) => (
    <ScrollView>
        <SafeAreaView forceInset={{ horizontal: 'always' }}>
            <SampleText>{banner}</SampleText>
            <Button
                onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
                title="Open profile screen"
            />
            <Button
                onPress={() => navigation.navigate('NotifSettings')}
                title="Open notifications screen"
            />
            <Button
                onPress={() => navigation.navigate('SettingsTab')}
                title="Go to settings tab"
            />
            <Button onPress={() => navigation.goBack(null)} title="Go back" />
        </SafeAreaView>

        <StatusBar barStyle="default" />
    </ScrollView>
);

export default MyNavScreen;