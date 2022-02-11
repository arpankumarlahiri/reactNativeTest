
import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const Skeletonloader = () => {
  return (
      
    <SkeletonPlaceholder  backgroundColor={'#666F80'} highlightColor={'#C3C8D3'} speed={1000}>
        {[...Array(2)].map((item,index)=>{return(
          <View key={index}>
            <View style={{height:175, width:'100%'}} />
            <View style={{flexDirection:'row',marginTop:5,marginBottom:10}} >
                <View style={{height:64, width:64,borderRadius:100}}/>
                <View style={{flex:1,marginStart:5,justifyContent:'center'}} >
                <View style={{height:35, width:"100%",borderRadius:10,marginBottom:10}}/>
                <View style={{height:10, width:"25%",borderRadius:10}}/>
                </View>

            </View>
        </View>
        )})}


    </SkeletonPlaceholder>
  );
};
export default Skeletonloader


