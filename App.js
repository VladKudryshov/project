import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <AppNavigator/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
