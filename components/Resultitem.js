import React from 'react';
import { Image,FlatList, SafeAreaView, StyleSheet, ActivityIndicator,Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const Resultitems = ({title,channelName,imageSource}) => {
   
  return (
      <SafeAreaView style={{marginBottom:30}}>
          <Image
              source={{ uri:imageSource}}
              style={styles.item}
            />
            <View style={{flexDirection:'row',marginTop:5}}>
             <Avatar
                size={64}
                rounded
                source={{ uri:imageSource}}
              />
              <View style={{flex:1,marginStart:5}}>
                <Text numberOfLines={2} style={styles.title}>{title}</Text>
                <Text style={styles.channelName}>{channelName}</Text>
              </View>
            </View>
      </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    item: {
      aspectRatio: 2,
    },
    title : {
        flex:3,
        fontSize:20,
        textAlign:'justify',
        justifyContent:'center'
    },
    channelName:{
        flex:1,
        fontSize:10
    }
  });
  
  export default Resultitems;