import React from 'react';
import {ScrollView, Text, View} from "react-native";
import TabBarIcon from "../../components/TabBarIcon";
import DietStat from "./DietStat";
import EatingList from "./EatingList";

export default function DietInfo() {
    return <View style={{flex: 1, backgroundColor: '#eeeeee'}}>
        <DietStat/>
        <EatingList/>
        <View style={{position: 'absolute', bottom: 20, right: 20, height: 120, justifyContent: 'space-between'}}>
            <View style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: '#ffa048',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TabBarIcon name="md-restaurant" color="#fff"/>
            </View>
            <View style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: "blue",
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TabBarIcon name="md-water" color="#fff"/>
            </View>
        </View>
    </View>;
}

DietInfo.navigationOptions = {
    title: 'app.json',

};

