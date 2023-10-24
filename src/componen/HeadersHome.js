import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, Dimensions} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
const {width, height}=Dimensions.get('screen');

class HeadersHome extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <View style={style.content}>
                <TouchableOpacity>
                    <Icons name="sunny-outline" size={24} color="black"/>
                </TouchableOpacity>
                <Text style={{fontSize:24, fontWeight:'700', color:'black'}}>Capacity</Text>
                <View style={style.contentRight}>
                <TouchableOpacity>
                    <Icons name="notifications-outline" size={24} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/Lufy.jpg')} style={{width:32, height:32, borderRadius:32, marginLeft:16}}/>
                </TouchableOpacity>
                </View>
            </View>
         );
    }
}
const style=StyleSheet.create({
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'3%',
        paddingVertical:'5%',
        borderWidth:1,
        borderBottomEndRadius:24,
        borderBottomLeftRadius:24
    },
    contentRight:{
        flexDirection:'row',

    },
})
 
export default HeadersHome;