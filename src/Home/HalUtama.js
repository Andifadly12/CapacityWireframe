
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { datapeserta } from '../Data_Damy/Homedamy';
import Icons from 'react-native-vector-icons/Ionicons';
import HeadersHome from '../componen/HeadersHome';
import Navigator from '../componen/Navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class HalUtama extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <View style={{flex:1}}>
                <HeadersHome/>
                <View style={{alignItems:'center', flex:1 }}>
                    <FlatList 
                    data={datapeserta}
                    renderItem={({item, index})=>(
                        <View style={{alignItems:'center', flex:1, width:wp(100) }}>
                        <View style={style.contentStaatus}>
                            <View style={style.StatusHeader}>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={item.gambar} style={style.Statusprofile}/>
                                    <View style={{marginLeft:10}}>
                                        <Text style={{fontSize:16,fontWeight:'700', color:'#000000'}}>{item.nama}</Text>
                                        <Text>{item.waktu}</Text>
                                    </View>
                                </View>
                                <Icons name="ellipsis-vertical" size={24} color="black"/>
                            </View>
                            <View style={style.StatusText}>
                                <Text style={{fontSize:16, fontWeight:'400', color:'#000000'}}>{item.status}</Text>
                            </View>
                            <View style={style.StatusImage}>
                                <Image source={item.gambar} style={{height:hp(48), width:wp(85), borderRadius:25, position:'relative'}}/>
                            </View>
                            <View style={style.StatusNavbar}>
                                <View style={style.StatusIcon}>
                                    <View style={style.love}>
                                        <TouchableOpacity>
                                            <Icons name="heart-outline" size={24} color="black"/>
                                        </TouchableOpacity>
                                        <Text style={style.IconText}>1k</Text>
                                    </View>
                                    <View style={style.chat}>
                                        <TouchableOpacity>
                                            <Icons name="chatbubble-ellipses-outline" size={24} color="black"/>
                                        </TouchableOpacity>
                                        <Text style={style.IconText}>521</Text>
                                    </View>
                                    <View style={style.share}>
                                        <TouchableOpacity>
                                            <Icons name="arrow-redo-outline" size={24} color="black"/>
                                        </TouchableOpacity>
                                        <Text style={style.IconText}>123</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        </View>
                    )
                }
                horizontal
                pagingEnabled
                snapToAlignment='center'
                showsVerticalScrollIndicator={false}
                keyExtractor={(item)=>item.id.toString()}
                    />    
                    <View style={{position:'absolute', marginTop:hp(74)}}>
                        <TouchableOpacity>
                            <View style={style.pencil}>
                                <Image source={require('../../assets/Vector.png')} style={{width:wp(6), height:hp(3)}}/>
                            </View>
                        </TouchableOpacity> 
                    </View>
                </View>
                <Navigator />
            </View>
         );
    }   
}
const style=StyleSheet.create({
    container:{
        flex:1
    },
    contentStaatus:{
        width:wp(90),
        height:648,
        borderWidth:1,
        marginTop:20,
        flex:1,
        borderRadius:25
    },
    StatusHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:10
    },
    Statusprofile:{
        width:40,
        height:40,
        borderRadius:50,
    },
    StatusText:{
        marginHorizontal:10,
    },
    StatusImage:{
        flex:1,
        marginVertical:16,
       alignSelf:'center'
    },
    StatusNavbar:{
        flexDirection:'row',
        height:hp(8),
        marginHorizontal:16,
        justifyContent:'space-between',
        borderTopWidth:1
    },
    StatusIcon:{
        flexDirection:'row',
        marginTop:16,
    },
    love:{
        flexDirection:'row',
        marginRight:10
    },
    chat:{
        flexDirection:'row',
        marginRight:10
    },
    share:{
        flexDirection:'row',
    },
    IconText:{
        fontSize:16,
        fontWeight:'400',
        color:'#000000',
        marginLeft:10
    },
    pencil:{
        marginLeft:wp(70),
        borderWidth:1,
        padding:10,
        borderRadius:100,
        
    }
})
 
export default HalUtama;