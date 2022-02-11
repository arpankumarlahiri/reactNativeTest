import { genericTypeAnnotation } from '@babel/types';
import React,{useState,useEffect} from 'react';
import {View,Button,StyleSheet,TextInput,Text,ScrollView} from 'react-native';

function Layout({ navigation }) {
  const [text, onChangeText] = useState("Uselessness Text");
  const [data, setData] = useState([]);

  const fetchData = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setData(json))

  }


  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <View style={styles.container}>
    
    <View style={styles.searchBox} >
    <View style={styles.icon} />
    <View style={styles.searchBar}>
      <TextInput  
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
      />
    </View>
    <View style={styles.searchIcon} ><Text>🔍</Text></View>
    </View>
    <Button title="Go back" onPress={() => navigation.goBack()} />
    <View style={styles.mainBox} >
      <ScrollView style={{minHeight:'80%'}}>
      {/* {[...Array(3)].map((items,values)=><View key={values} style={styles.thumbnail} />)} */}
      {data.map((item,values)=> {return (<View  key={values} style={styles.thumbnail}>
        <View style={styles.thumbnailImage}></View>
        <View style={styles.thumbnailContent}>
          <Text style={styles.thumbnailTitle}>
              {item.company.catchPhrase}
          </Text>
          <View style={styles.thumbnailChannel}>
            <Text>{item.email}</Text>
          </View>
        </View>
      </View>)})
      }
      <ScrollView horizontal={true} style={{minHeight:200,paddingVertical:10,}}>
        {[...Array(10)].map((items,values)=> <View key={values} style={styles.horizontalImage}></View>)}
      </ScrollView>

      {[...Array(2)].map((items,values)=> {return (<View  key={values} style={styles.thumbnail}>
        <View style={styles.thumbnailImage}></View>
        <View style={styles.thumbnailContent}>
          <Text style={styles.thumbnailTitle}>
            Hi
          </Text>
          <View style={styles.thumbnailChannel}></View>
        </View>
      </View>)})
      }
      </ScrollView>
    </View>
    

    
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',
  },
  searchBox:{
    height:70,
    flexDirection:'row',
    backgroundColor:'black',
    borderWidth:2,
    borderColor:'grey',
  },
  mainBox:{
    flex:9,
    backgroundColor:'black',
  },
  thumbnail: {
    flex:1,
    margin:2,
    flexDirection:'row',
    alignItems:'flex-start',
    padding:5,
    backgroundColor:'grey',
    borderWidth:1,
    borderRadius:10,
    minHeight:150,
    maxHeight:'25%',
  },
  icon:{
    flex:3,
    backgroundColor:'grey',
    margin:1,
    borderWidth:1,
    borderRadius:10,
  },
  searchBar:{
    flex:10,
    backgroundColor:'grey',
    margin:1,
    marginVertical:10,
    borderWidth:1,
    borderRadius:20,
  },
  searchIcon:{
    flex:2,
    backgroundColor:'grey',
    margin:1,
    borderWidth:1,
    marginVertical:10,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
  },
  thumbnailImage:{
    flex:1,
    flexGrow:1,
    backgroundColor:'black',
    borderWidth:1,
    borderRadius:5,
    height:'100%',
  },
  thumbnailContent:{
    flex:2,
    backgroundColor:'grey',
    marginStart:5,
  },
  thumbnailTitle:{
    flex:2,
    backgroundColor:'black',
    marginBottom:2,
    borderWidth:1,
    borderRadius:10,
    padding:5,
  },
  thumbnailChannel:{
    flex:1,
    backgroundColor:'black',
    borderWidth:1,
    borderRadius:10,
    padding:5,
    justifyContent:'flex-end',
  },
  input:{
    marginStart:10,
  },
  horizontalImage:{
    height:'100%',
    width:150,
    marginStart:10,
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'grey',
  }

});






export default Layout;
