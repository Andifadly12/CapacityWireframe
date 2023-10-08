import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import HalUtama from "../src/Home/HalUtama";
import Profile from "../src/profil/Profil";
import Chat from "../src/chat/Chat";
import Pencarian from "../src/pencarian/pencarian";
import Lain from "../src/Lain/Lain";
import { View } from "react-native";

const stack=createBottomTabNavigator();
function Home(){
    const focus=false
    return(
        <stack.Navigator 
            tabBarOptions={{
                showLabel:false,
                style:{
                    position:'absolute',
                    height:56,
                    borderTopStartRadius:25,
                    borderTopEndRadius:25,
                    borderWidth:2,
                    borderColor:'black'
                }
            }}
        >
            <stack.Screen name="Profile" component={Profile} 
                options={{
                    tabBarIcon:({focused})=>(
                        <View>
                            <Icons name="people-circle-outline" size={25} color="black"/>
                            <View style={{
                                borderWidth:focused?1:0, borderColor:'black', marginTop:9
                            }}/>
                        </View>
                     
                    )
                  }}
            />
            <stack.Screen name="Chat" component={Chat} 
                options={{
                    tabBarIcon:({focused})=>(
                        <View>
                            <Icons name="chatbubble-outline" size={25} color="black"/>
                            <View style={{
                                borderWidth:focused?1:0, borderColor:'black', marginTop:9
                            }}/>
                        </View>
                     
                    )
                  }}
            />
            <stack.Screen name="Halaman Utama" component={HalUtama}
                options={{
                    tabBarIcon:({focused})=>(
                        <View>
                            <Icons name="home-outline" size={25} color="black"/>
                            <View style={{
                                borderWidth:focused?1:0, borderColor:'black', marginTop:9
                            }}/>
                        </View>
                     
                    )
                  }}
            />
            <stack.Screen name="Pencarian" component={Pencarian}
                options={{
                    tabBarIcon:({focused})=>(
                        <View>
                            <Icons name="search-outline" size={25} color="black"/>
                            <View style={{
                                borderWidth:focused?1:0, borderColor:'black', marginTop:9
                            }}/>
                        </View>
                     
                    )
                  }}
            />
            <stack.Screen name="Lain" component={Lain}
                options={{
                    tabBarIcon:({focused})=>(
                        <View>
                            
                            <Icons name="ellipsis-vertical-outline" size={25} color="black"/>
                            <View style={{
                                borderWidth:focused ?1:0, marginTop:9
                            }}/>
                        </View>
                     
                    )
                  }}
            />
        </stack.Navigator>
    )
}
export default Home