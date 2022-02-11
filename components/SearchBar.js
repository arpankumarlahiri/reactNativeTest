import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TextInput,Keyboard,ToastAndroid } from "react-native";
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import Toast from 'react-native-toast-message';
const SearchBar = ({ height = 50 ,query,querySetter,fetchResult,clearResult,toggleLoading}) => {
  const [text, onChangeText] = useState("");
  return (
    <SafeAreaView>
      <View style={[{ height: height}, styles.container]}>
        
        <View>
            <Icon
                name='modx'
                type='font-awesome'
                color='#FB6D6C'
                iconStyle={{marginRight:10}}
                size={height}
                />
          </View>

        <View style={styles.input}>

          <TextInput
          style={{flex:3,color:'black'}}
            onChangeText={querySetter}
            placeholder="Search"
            placeholderTextColor="grey"
            value={query}
          />
          
          <Icon
            name='search'
            type='font-awesome'
            color='#FB6D6C'
            iconStyle={{marginBottom:5}}
            onPress={() => {
              querySetter(query);
              // clearResult();
              // toggleLoading(true);
              // fetchResult();
              //ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
              Keyboard.dismiss()}} />
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row' ,
  },
  input: {
    flex:6,
    backgroundColor:"white",
    borderRadius:50,
    flexDirection:'row',
    alignItems:'center',
    paddingEnd:25,
    paddingStart:15,
  }
  
 
});


const mapState = state => ({
  query: state.search.query
});

const mapDispatch = (dispatch) => ({
  clearResult: () => dispatch.search.clearResult(),
  toggleLoading: (val) => dispatch.search.toggleLoading(val),
  querySetter: (query) => dispatch.search.changeQuery(query),
  fetchResult: () => dispatch.search.fetchResults(),
});

export default connect(mapState,mapDispatch)(SearchBar);