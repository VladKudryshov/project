import React from "react";
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems } from 'react-navigation-drawer';
import {ScrollView, StyleSheet, View} from "react-native";

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}
        >
            <View style={{flex: 1, backgroundColor: 'black', height: 20, width: 100}}></View>
            {/*<DrawerItems {...props} />*/}
        </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default CustomDrawerContentComponent
