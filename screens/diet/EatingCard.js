import React from 'react';
import {ScrollView, Text, View} from "react-native";
import TabBarIcon from "../../components/TabBarIcon";
import DietStat from "./DietStat";
import DietStatV2 from "./DietStatV2";

export default function EatingCard() {
    return <View style={{borderRadius: 5,
        marginBottom: 10}}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            padding: 10
        }}>
            <View>
                <Text>Прием пищи</Text>
                <Text>13:38, продуктов: 1</Text>
            </View>
            <TabBarIcon name="md-more" size='12'/>
        </View>
        <DietStatV2/>
    </View>;
}


