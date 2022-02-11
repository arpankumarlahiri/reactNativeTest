import axios from "../helpers/axios";
import Toast from 'react-native-toast-message';
import {ToastAndroid } from "react-native";

export const search = {
    state: {
        result:[],
        query:'cat',
        pageToken:'',
        refreshVal:false,
      },

    reducers: {
      toggleLoading(state,payload){
        
        return {...state,refreshVal:payload}
      },
      clearResult(state, payload) {
        return {...state,result:[]}
      },
      changeResult(state, payload) {
        
        let {result,pageToken} = payload
        if(!result){
          ToastAndroid.show('Error!', ToastAndroid.LONG)
        }
        return {...state,result:result??[],refreshVal:false,pageToken:pageToken}
      },
      appendResult(state,payload) {
        let {result,pageToken} = payload
        //console.log('appendResult',pageToken)
        return {...state,result:[...state.result,...result??[]],refreshVal:false,pageToken:pageToken}
      },
      changeQuery(state,payload){
        Toast.show({
          type: 'error',
          text1: 'Query Changed Successfully',
          text2: 'This is awesome👋',
          position:'bottom'
        });
        return {...state,query:payload}
      },
      changePageToken(state,payload){
        //console.log(state)
        return {...state,pageToken:payload}
      }

    },
    effects: (dispatch) => ({
      fetchResults(payload, state) {
        let{query} = state.search
        axios.get('/v3/search',{
          params: {
            part:'snippet',
            maxResults:20,
            type:'video',
            key:'AIzaSyC6cC8iJjGmkjPvjK9og626NVDGHtZQRLQ',
            q: query
          }      
        })
        .then(response => this.changeResult({result:response.data.items,pageToken:response.data.nextPageToken}))
      },
      async lazyResults (payload, state) {
        console.log('------------------------------------------------>LazyLoad')
        let {query,pageToken} = state.search
        axios.get('/v3/search',{
          params: {
            part:'snippet',
            maxResults:20,
            pageToken:pageToken,
            type:'video',
            key:'AIzaSyC6cC8iJjGmkjPvjK9og626NVDGHtZQRLQ',
            q: query
          }      
        })
        .then(response => this.appendResult({result:response.data.items,pageToken:response.data.nextPageToken}))
        
        
        
        
        // let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&pageToken=${pageToken}&type=video&key=AIzaSyC6cC8iJjGmkjPvjK9og626NVDGHtZQRLQ`)
        // let data = await res.json()
        // console.log(data)
        // this.appendResult({result:data.items,pageToken:data.nextPageToken})
      },
      })
    };
  
  