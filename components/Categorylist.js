import React from 'react'
import { View ,Text,FlatList,StyleSheet,TouchableOpacity} from 'react-native'
import { connect } from "react-redux";

function Categorylist({displayList=[],backgroundColor='grey',querySetter,fetchResult,clearResult,toggleLoading}) {
  return (
    <View style={{flex:1, paddingVertical:15}}>
       <FlatList 
        horizontal
        data={displayList} 
        renderItem={({item})=> (
            <TouchableOpacity
                style={[{backgroundColor:backgroundColor},styles.displayItem]}
                onPress={() => {
                  querySetter(item);
                  clearResult();
                  toggleLoading(true);
                  fetchResult()}}
                underlayColor='#fff'>
                <Text>{item}</Text>
            </TouchableOpacity>
    )} />
    </View>
  )
}

const styles = StyleSheet.create({
    
    displayItem: {
        flex:1,
        justifyContent:'center',
        marginRight:10,
        borderRadius:10,
        paddingHorizontal:10
    }
   
  });


  const mapState = state => ({
  
  });
  
  const mapDispatch = (dispatch) => ({
    clearResult: () => dispatch.search.clearResult(),
    toggleLoading: (val) => dispatch.search.toggleLoading(val),
    querySetter: (query) => dispatch.search.changeQuery(query),
    fetchResult: () => dispatch.search.fetchResults(),
  });
  
  export default connect(mapState,mapDispatch)(Categorylist);