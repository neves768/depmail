import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Mails({navigation}) {
    const [mailss, setMailList] = useState([{"id":"d6eb0466-544a-11ec-bf63-0242ac130002","to":"Martin","tittle":"Send me news","time":"Dez, 21","star":true,"picture":"https://mediaslide-europe.storage.googleapis.com/iconic/pictures/917/3867/large-1613474919-b9debebee41f0325d4f567259d66eb53.jpg"}])

    useEffect(function(){
        async function getData(){
            const ftc = await fetch("https://mobile.ect.ufrn.br:3002/emails")
            const r = await ftc.json()
            setMailList(r)
        }
        getData()
    }, [])

    function renderItem({item}){
        return (
            <View style={styles.mailItem} onStartShouldSetResponder={() => navigation.navigate("MailContent", {id: item.id})}>
                <View style={styles.mailHeaderLeft}>
                    <Image style={styles.mailAuthorImg} source={{uri:item.picture}} />
                </View>
                <View style={styles.mailHeader}>
                    <View style={styles.mailHeader2}>
                        <Text style={styles.t1}>{item.to}</Text>
                        <Text style={styles.t2}>{item.time}</Text>
                    </View>
                    <View style={styles.mailHeader2}>
                      <Text style={styles.t1}>{item.tittle}</Text>
                        <FontAwesome5 name="star" size={16} color="white" solid={ item.star ? true : false}></FontAwesome5>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.mailsList}>
            <View style={styles.stories}>
              <FlatList data={mailss} renderItem={renderItem} keyExtractor={item => item.id} showsVerticalScrollIndicator={false}/>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    t1: {
      color: "white",
    },
    t2: {
      color: "#006adc",
      fontWeight: "bold"
    },
    mailsList: {
      flex: 1,
      backgroundColor: "black",
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
    mailImg: {
      height: undefined,
      width: "100%"
    },
    mailFooter: {
      height: 50,
      backgroundColor: "black",
      flexDirection: "row",
      alignItems: "center"
    }
  });