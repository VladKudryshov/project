import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, Image, Button} from 'react-native'
import { white } from 'ansi-colors';
import TabBarIcon from "../components/TabBarIcon";
import DrawerMenuLink from "../components/DrawerMenuLink";

export default class drawerContentComponents extends Component {

    navigateToScreen = ( route ) =>(
        () => {
            const navigateAction = NavigationActions.navigate({
                routeName: route
            });
            this.props.navigation.dispatch(navigateAction);
        })

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image
                        style={{width: 70, height: 70, borderRadius: 70}}
                        source={{uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}}
                    />

                    <View style={{paddingLeft: 20, justifySelf: 'center', alignSelf: 'center'}}>
                        <Text style = {{fontSize: 24}}>Bobby Sid</Text>
                        <Text style={styles.roleAccount}>trainer</Text>
                    </View>
                </View>
                <View style={styles.screenContainer}>

                   <DrawerMenuLink iconName={"md-globe"}
                                   navigateScreenName={'Home' }
                                   navigateScreen={this.navigateToScreen('Home')}
                                   linkName={"Новости"}/>

                    <DrawerMenuLink iconName={"md-heart"}
                                    navigateScreenName={'Diet' }
                                    navigateScreen={this.navigateToScreen('Diet')}
                                    linkName={"План диеты"}/>

                    <DrawerMenuLink iconName={"ios-fitness"}
                                    navigateScreenName={'Training' }
                                    navigateScreen={this.navigateToScreen('Training')}
                                    linkName={"План тренировок"}/>

                    <DrawerMenuLink iconName={"md-chatbubbles"}
                                    navigateScreenName={'Chat' }
                                    navigateScreen={this.navigateToScreen('Chat')}
                                    linkName={"Сообщения"}/>


                    <DrawerMenuLink iconName={"md-calendar"}
                                    navigateScreenName={'Calendar' }
                                    navigateScreen={this.navigateToScreen('Calendar')}
                                    linkName={"События"}/>

                    <DrawerMenuLink iconName={"md-settings"}
                                    navigateScreenName={'Settings' }
                                    navigateScreen={this.navigateToScreen('Settings')}
                                    linkName={"Найстройки"}/>

                </View>
                <View>
                    <Button title="Выйти" style={{width: '100%'}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        padding: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        borderBottomColor: '#cccccc',
        paddingBottom: 20,
        borderBottomWidth: 1

    },
    roleAccount: {
        color: '#e6dfdf',
    },
    screenContainer: {
        flex: 1,
        paddingTop: 20,
        width: '100%',
    }
});
