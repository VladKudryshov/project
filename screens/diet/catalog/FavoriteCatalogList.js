import React, {Component} from 'react';
import {ScrollView} from "react-native";
import EatingCard from "../EatingCard";

export default class  FavoriteCatalogList extends Component{
    render(){
        return <ScrollView style={{padding: 15}}>
            <EatingCard/>
            <EatingCard/>
            <EatingCard/>
        </ScrollView>;
    }
}


