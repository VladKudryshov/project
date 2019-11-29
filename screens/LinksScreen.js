import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import TabBarIcon from "../components/TabBarIcon";

export default class LinksScreen extends React.Component{
    constructor(props){
        super(props)

    }
    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

LinksScreen.navigationOptions = {
    title: 'Links',
    headerLeft: <TouchableHighlight
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
    >
        <TabBarIcon name={'md-menu'}/>
    </TouchableHighlight>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: 'red',
    },
});
