import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, Text, View} from "react-native";
import TabBarIcon from "./TabBarIcon";


export default function DrawerMenuLink(props) {
  return (
      <View style={[styles.screenStyle]}>
          <TabBarIcon name={props.iconName}/>
          <Text style={[styles.screenTextStyle, (props.activeItemKey===props.navigateScreenName) ? styles.selectedTextStyle : null]} onPress={props.navigateScreen}>{props.linkName}</Text>
      </View>
  );
}
const styles = StyleSheet.create({
    screenStyle: {
        height: 30,
        marginTop: 20,
        flexDirection: 'row',
        width: '100%'
    },
    screenTextStyle: {
        fontWeight: '300',
        fontSize: 20,
        marginLeft: 30,
        textAlign: 'center'
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: '#00adff'
    }
});
