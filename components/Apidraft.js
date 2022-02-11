import React,{useState,useEffect} from 'react';
import {View,Button,Text,FlatList,ActivityIndicator} from 'react-native'


const Apidraft = ({navigation}) => {
  const [contentText, setContentText] = useState([]);
  const [slicer, setSlicer] = useState(5);
  const [refreshVal, setRefreshVal] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  
  const refresher =() =>{
    if(!refreshVal)
    {setRefreshVal(true)
    setTimeout(() => {
      setSlicer(slicer+1)
      setRefreshVal(false)    
    }, 2000);}
    
  }
  const fetchData = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setContentText(json))

  }

  
  return (
    <>
     <Button
        title="Layout"
        onPress={() => navigation.navigate('Layout')}
      />
    <FlatList 
    //horizontal
    // onRefresh={refresher}
    refreshing={refreshVal}
    onEndReached = {refresher}
    data={contentText.slice(0,slicer)} 
    renderItem={({item})=> (
      <View style={{flex:1,justifyContent:'center',alignItems:'center',height:500,margin:10,backgroundColor:'grey',borderWidth:1,borderRadius:10,paddingHorizontal:10}}>
      <Text>{item.username}</Text>
      </View>
    )} />
    {refreshVal&&<ActivityIndicator size={100} />}
    </>
  );
};

//contentText.map(({username}) => <Text>{username}</Text>)

export default Apidraft