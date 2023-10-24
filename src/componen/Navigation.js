import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class Navigator extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <View style={{
                height:hp(8),
                flexDirection:'row',
                marginTop:10, 
                borderWidth:1, 
                borderTopLeftRadius:30, 
                borderTopRightRadius:30, 
                }}>
               <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}}>
               <View>
                    <Icons name="people-circle-outline" size={25} color="black"/>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}}>
               <View>
                    <Icons name="chatbubble-outline" size={25} color="black"/>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}}>
               <View>
                    <Icons name="home-outline" size={25} color="black"/>
                        
                    </View>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}}>
               <View>
                    <Icons name="search-outline" size={25} color="black"/>
                        
                    </View>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}}>
               <View>
                    <Icons name="ellipsis-vertical-outline" size={25} color="black"/>
                       
                    </View>
               </TouchableOpacity>
               </View >
         );
    }
}
 
export default Navigator;