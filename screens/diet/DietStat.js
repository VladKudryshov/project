import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export default function DietStat() {
    return <View style={{
        height: 170,
        backgroundColor: '#373F46',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
        paddingBottom: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'space-between'
    }}>
        <View style={styles.container}>
            <View
                style={styles.infoItem}>
                <View style={styles.infoItemBar}>
                    <View style={styles.infoItemBarProgress}/>
                </View>
                <Text style={styles.infoItemText}>Белки</Text>
                <Text style={styles.infoItemCurrentValue}>30</Text>
                <Text style={styles.infoItemFinishValue}>100</Text>
            </View>
            <View
                style={styles.infoItem}>
                <View style={styles.infoItemBar}>
                    <View style={styles.infoItemBarProgress}/>
                </View>
                <Text style={styles.infoItemText}>Жиры</Text>
                <Text style={styles.infoItemCurrentValue}>30</Text>
                <Text style={styles.infoItemFinishValue}>100</Text>
            </View>
            <View
                style={styles.infoItem}>

                <View style={styles.infoItemBar}>
                    <View style={styles.infoItemBarProgress}/>
                </View>
                <Text style={styles.infoItemText}>Углеводы</Text>
                <Text style={styles.infoItemCurrentValue}>30</Text>
                <Text style={styles.infoItemFinishValue}>100</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View
                style={styles.infoItemLong}>
                <View style={styles.infoItemBar}>
                    <View style={styles.infoItemBarProgress}/>
                </View>
                <Text style={styles.infoItemText}>Калории</Text>
                <Text style={styles.infoItemCurrentValue}>30</Text>
                <Text style={styles.infoItemFinishValue}>100</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View
                style={styles.infoItemLong}>
                <View style={styles.infoItemBar}>
                    <View style={styles.infoItemBarProgress}/>
                </View>
                <Text style={styles.infoItemText}>Вода</Text>
                <Text style={styles.infoItemCurrentValue}>30</Text>
                <Text style={styles.infoItemFinishValue}>100</Text>
            </View>
        </View>
    </View>

}

const styles = StyleSheet.create({
    container: {flex: 1, flexDirection: 'row', justifyContent: 'space-between'},
    infoItem: {width: '30%', height: 5, backgroundColor: "#6e6e6e", borderRadius: 5, position: 'relative'},
    infoItemLong: {width: '100%', height: 5, backgroundColor: "#6e6e6e", borderRadius: 5, position: 'relative'},
    infoItemText: {position: 'absolute', width: '100%', textAlign: 'center', bottom: -20, color: '#fff', fontSize: 12},
    infoItemCurrentValue: {position: 'absolute', left: '30%', top: -20, color: '#fff', fontSize: 12},
    infoItemFinishValue: {position: 'absolute', right: 0, bottom: -20, color: '#fff', fontSize: 12},
    infoItemBar: {borderRadius: 5, overflow: 'hidden'},
    infoItemBarProgress: {width: '30%', height: 5, backgroundColor: '#66ff8b'}
});
