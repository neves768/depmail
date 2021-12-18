import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { WebView } from "react-native-webview";
import {FontAwesome5} from '@expo/vector-icons';

export default function MailContent({route, item}) {
    const {id} =  route.params;

    const [data, setEmailData] = useState([])

    useEffect(function(){
        async function getData(){
            const ftc = await fetch("https://mobile.ect.ufrn.br:3002/emails/"+ id)
            const r = await ftc.json()
            console.log(r)
            setEmailData(r)
        }
        getData()
    }, [])
    return (
        <>
        <View data={data} style={styles.title}>
            <Text style={{color: "white"}}>{data.tittle}</Text>
        </View>
        <View data={data} style={styles.mailItem}>
            <View style={styles.mailHeaderLeft}>
                <Image style={styles.mailAuthorImg} source={{uri:data.picture}} />
            </View>
            <View style={styles.mailHeader}>
                <View style={styles.mailHeader2}>
                    <Text style={styles.t1}><Text style={{fontWeight: "bold"}}>{data.from}</Text></Text>
                    <Text style={styles.t2}>{data.time}</Text>
                </View>
                <View style={styles.mailHeader2}>
                    <Text style={styles.t1}>{data.to}</Text>
                    <FontAwesome5 name="star" size={16} color="white" solid={ data.star ? true : false}></FontAwesome5>
                </View>
            </View>
        </View>
        <WebView data={data} style={styles.WVStyle} originWhitelist={['*']} source={{html: `<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><div>${data.body}</div></body></html>`}}/>
        </>
    );
}


const styles = StyleSheet.create({
    t1: {
        color: "white",
    },
    t2: {
        color: "#006adc",
        fontWeight: "bold"
    },
    container: {
        backgroundColor: '#696a6b',
        height: 60,
    },
    title: {
      flexDirection: "row",
      alignItems:"center",
      backgroundColor: "#000",
      height: 30,
    },
    mailItem: {
        borderColor: "blue",
        borderRadius: 2,
        height: 60,
        flexDirection: "row",
        backgroundColor: "black",
        borderBottomColor: "white",
    },
    mailHeader: {
        flex: 1,
        marginLeft: 5,
    },
    mailHeader2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "40%",
        marginLeft: 5,
    },
    mailHeaderLeft: {
        flexDirection: "row",
        alignItems: "center",    
    },
    mailAuthorImg: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginLeft: 10
    },
    WVStyle: {
        flex: 1,
        backgroundColor: "#576879"
    }
});