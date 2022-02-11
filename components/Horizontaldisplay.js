import React from 'react';
import { Image,FlatList, SafeAreaView, StyleSheet, ActivityIndicator,Text } from 'react-native';


const BASE_URI = 'https://source.unsplash.com/random?sig=';

const Horizontaldisplay = ({displayData=[...new Array(10)].map((_, i) => i.toString())}) => {
  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <FlatList
          horizontal
          //data={[...new Array(10)].map((_, i) => i.toString())}
          data={displayData}
          keyExtractor={(e) => e}
          renderItem={({ item }) => (
            <Image
              //source={{ uri: BASE_URI + item }}
              source={{ uri:"https://i.ytimg.com/vi/LRHwAmduANM/hqdefault.jpg"}}
              style={styles.item}
              //PlaceholderContent={<ActivityIndicator />}
            />
            // <Text>{item}</Text>
          )}
        />
      </SafeAreaView>
    </>
  );
};


const styles = StyleSheet.create({
    item: {
      aspectRatio: 2/3,
      marginRight:10,
      borderRadius:20,
      //height:180,
    },
  });
  
  export default Horizontaldisplay;