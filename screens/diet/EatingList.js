import React from 'react';
import {ScrollView, Text, View} from "react-native";
import TabBarIcon from "../../components/TabBarIcon";
import DietStat from "./DietStat";
import EatingCard from "./EatingCard";

export default function EatingList() {
    return <ScrollView style={{padding: 15}}>
            <EatingCard/>
            <EatingCard/>
            <EatingCard/>
        </ScrollView>
        ;
}


