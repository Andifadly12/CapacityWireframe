import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Registrasi from "../src/aut/Registrasi";
import Registrasi2 from "../src/aut/Registrasi2";
import Home from "./home";
const Stack=createStackNavigator();
function AuthRoute(){
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen  name="Registrasi" component={Registrasi}/>
        <Stack.Screen  name="Registrasi2" component={Registrasi2} />
        <Stack.Screen  name="Home" component={Home} />
      </Stack.Navigator>
    )
}
export default AuthRoute