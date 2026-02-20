import React from 'react'
import {View, Text, Image} from 'react-native'

const HomeScreen = () => {
    return (
    <View>

     <Image src = {{url:Image.LOGO}}
        style={{width: 200, height: 200,}}/>

     <Text>homescreen</Text>
    </View>
    )
}

export default HomeScreen;