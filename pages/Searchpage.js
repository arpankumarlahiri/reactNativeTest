import React, { useState,useEffect } from 'react'
import {View,StyleSheet,FlatList,ActivityIndicator,Text,Image} from 'react-native'
import SearchBar from '../components/SearchBar'
import Categorylist from '../components/Categorylist'
import Horizontaldisplay from '../components/Horizontaldisplay'
import Resultitems from '../components/Resultitem'
import { connect } from "react-redux";
import Skeletonloader from '../components/Skeletonloader'

function Searchpage({result=[],lazyload,refreshVal,toggleLoading}) {
    
  return (
      
    <View style={styles.container}>
        <View style={styles.searchBar}>
            <SearchBar/>
        </View>
        <View style={styles.categoryBar}>
            <Categorylist backgroundColor={'#FB6D6C'} displayList={['cats','dogs','songs','game','movie','sports','javascript','nature','books']} />
        </View>
        <View style={styles.mainContent}>
            {/* <Horizontaldisplay/> */}
            <View style={styles.Verticaldisplay}>
                {result.length>0 &&
                <>
                  <FlatList
                  data={result}
                  keyExtractor = {(item,index) => index+item.id.videoId}
                  ListFooterComponent = {<Skeletonloader />}
                  onEndReached = {() =>{
                    toggleLoading(true);
                    lazyload();
                  }
                  }
                  //keyExtractor ={(item)=> item.id.videoId??'skeleton'}
                  renderItem={({ item }) => {
                    
                      return  <Resultitems title={item.snippet.title} channelName={item.snippet.channelTitle} imageSource={item.snippet.thumbnails.high.url}/>    
                    
                    
                  }}
                  />
                </>
                  }
              {refreshVal&&<Skeletonloader />} 
              
              {!refreshVal&&result.length<1&&
              <>
                  <Text style={{fontSize:30,alignSelf:'center'}}>Sorry No Result</Text>
                  <Image
                  source={{ uri:'https://source.unsplash.com/random?sig=2'}}
                    style={styles.item}
                  />
                  </>
              } 
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10
    },
    searchBar:{
      flex:1,
      justifyContent:'center',
    },
    categoryBar: {
        flex:1,
    },
    mainContent:{
      flex:8,

    },
    Verticaldisplay:{
        flex:2,
        //backgroundColor:"#FB6D6C"
    },
    item:{
      aspectRatio:2/3,
    }
    
   
  });



const mapState = state => ({
  result: state.search.result,
  refreshVal :state.search.refreshVal
});

const mapDispatch = dispatch => ({
  toggleLoading: (val) => dispatch.search.toggleLoading(val),
  lazyload: () => dispatch.search.lazyResults(),
});

export default connect(mapState, mapDispatch)(Searchpage);
