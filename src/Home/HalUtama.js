
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { datapeserta } from '../Data_Damy/Homedamy';
import Icons from 'react-native-vector-icons/Ionicons';
class HalUtama extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <View style={style.container}>
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
                <View style={{height:700}}>
                    <FlatList 
                    data={datapeserta}
                    renderItem={({item, index})=>(
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
                                <Image source={item.gambar} style={{height:415, width:310, borderRadius:25, position:'relative'}}/>
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
                                <TouchableOpacity>
                                    <View style={style.pencil}>
                                        <Image source={require('../../assets/Vector.png')} style={{width:24, height:24}}/>
                                    </View>
                                </TouchableOpacity> 
                            </View>
                        </View>
                    )
                }
                keyExtractor={(item)=>item.id.toString()}
                    />    
                </View>
            </View>
         );
    }
}
const style=StyleSheet.create({
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16,
        paddingVertical:20,
        borderWidth:1,
        borderBottomEndRadius:24,
        borderBottomLeftRadius:24
    },
    contentRight:{
        flexDirection:'row',

    },
    contentStaatus:{
        width:330,
        height:648,
        borderWidth:1,
        marginTop:20,
        flex:1,
        alignSelf:'center',
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
        marginVertical:16,
        alignSelf:'center'
    },
    StatusNavbar:{
        flexDirection:'row',
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
        borderWidth:1,
        padding:10,
        borderRadius:100,
        marginTop:5
    }
})
 
export default HalUtama;