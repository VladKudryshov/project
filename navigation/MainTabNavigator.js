import React, {Component} from 'react';
import moment from 'moment';
//import react in our code.
import {View, Image, TouchableOpacity, DatePickerAndroid} from 'react-native';

//For React Navigation 4+
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from '../screens/HomeScreen';
import Screen2 from '../screens/LinksScreen';
import Screen3 from '../screens/SettingsScreen';
import drawerContentComponents from '../screens/drawerContentComponents';
import TabBarIcon from "../components/TabBarIcon";
import DietInfo from "../screens/diet/DietInfo";
import CatalogScreen from "../screens/diet/catalog/CatalogScreen";

class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };

    render() {
        return (

            <View>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <TabBarIcon name="md-menu" color="#fff"/>
                </TouchableOpacity>
            </View>
        );
    }
}

class GoBack extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.goBack();
    };

    render() {
        return (

            <View>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <TabBarIcon name="md-arrow-round-back" color="#fff"/>
                </TouchableOpacity>
            </View>
        );
    }
}

class NavigationDrawerRight extends Component {
    toggleDrawer = () => {
        try {
            const {action, year, month, day} = DatePickerAndroid.open({
                date: new Date(),
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    };

    goToCatalog = () => {
        this.props.navigationProps.navigate('ASD')
    };


    render() {
        return (
            <View style={{flexDirection: 'row', width: 70, justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <TabBarIcon name="md-calendar" color="#fff"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToCatalog.bind(this)}>
                    <TabBarIcon name="md-book" color="#fff"/>
                </TouchableOpacity>
            </View>
        );
    }
}


const FirstActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
        screen: Screen1,
        navigationOptions: ({ navigation }) => ({
            title: 'Demo Screen 1',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            ...defaultStyles
        }),
    },
});


const dietStackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Last: {
        screen: DietInfo,
        navigationOptions: ({ navigation }) => ({
            title:  moment().format("DD/MM/YYYY"),
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerRight: <NavigationDrawerRight navigationProps={navigation} />,
            ...defaultStyles
        }),
    },ASD: {
    screen: CatalogScreen,
        navigationOptions: ({ navigation }) => ({
        title: 'Catalog',
        headerLeft: <GoBack navigationProps={navigation} />,
            ...defaultStyles
    }),
},
});

const Screen2_StackNavigator = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Second: {
        screen: Screen2,
        navigationOptions: ({ navigation }) => ({
            title: 'Demo Screen 2',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            ...defaultStyles

        }),
    },
});

const Screen3_StackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Third: {
        screen: Screen3,
        navigationOptions: ({ navigation }) => ({
            title: 'Demo Screen 3',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            ...defaultStyles

        }),
    }
});

const defaultStyles = {
    headerStyle: {
        backgroundColor: '#394249',
    },
    headerLeftContainerStyle:{
        paddingRight: 10,
        paddingLeft: 10,
    },
    headerRightContainerStyle:{
        paddingRight: 10,
        paddingLeft: 10,
    },
    headerTintColor: '#fff',
}

const DrawerNavigatorExample = createDrawerNavigator({
    //Drawer Optons and indexing
    Diet: {
        screen: dietStackNavigator
    },
    Home: {
        screen: FirstActivity_StackNavigator
    },
    Training: {
        screen: Screen2_StackNavigator
    },
    Chat: {
        screen: Screen2_StackNavigator
    },
    Calendar: {
        screen: Screen2_StackNavigator
    },
    Settings: {
        screen: Screen3_StackNavigator
    },
}, {
    contentComponent: drawerContentComponents
});

export default DrawerNavigatorExample;

