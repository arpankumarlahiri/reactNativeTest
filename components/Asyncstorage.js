import React,{useState} from 'react'
import {Appearance, Button, Text} from 'react-native'
//import AsyncStorage from '@react-native-async-storage/async-storage'
import AsyncStorage from 'react-native-encrypted-storage'

function Asyncstorage() {
    const [value, setValue] = useState(1)
    const [storageValue, setStorageValue] = useState('')

    const setStringValue = async (value) => {
        try {
          await AsyncStorage.setItem('keyNew', value.toString())
          console.log('Done.')
        } catch(e) {
          console.log(e)
        }
      
      }


    const getMyStringValue = async () => {
        try {
            let val =  await AsyncStorage.getItem('keyNew')
            setStorageValue(val);
        } catch(e) {
            console.log(e)
        }
      
      
      }

    const demoJSON = {
        data: "Arpan",
        value: 2
    }

    const setObjectValue = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('key', jsonValue)
        } catch(e) {
            console.log(e)
        }
      
        console.log('Done.')
      }

      const mergeObjectValue = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.mergeItem('key', JSON.stringify(value))
        } catch(e) {
          // save error
          console.log(e)
        }
      
        console.log('Done.')
      }

    const getMyObject = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('key')
        let re  = await jsonValue != null ? JSON.parse(jsonValue) : {}
        console.log(re)
        setStorageValue(re.value-10)

      } catch(e) {
        console.log(e)
      }
    
      console.log('Done.')
    
    }
  return (
    <>
    <Text>storageValue:{storageValue}</Text>
    <Text>value:{value}</Text>
    <Button
        title="Increase Counter"
        onPress={() => setValue(value+1) }
      />
    <Button
        title="Set Item"
        onPress={() => setObjectValue({...demoJSON,value:value}) }
      />
      <Button
        title="Merge Item"
        onPress={() => mergeObjectValue({data:"Appearance",day:'tuesday'}) }
      />
      <Button
        title="Get Item"
        onPress={() => getMyObject()}
      />
    </>
  )
}

export default Asyncstorage