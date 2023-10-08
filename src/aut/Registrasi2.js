import React, { Component} from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

class Registrasi2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            date:new Date(),
        }
    }
    
    render() { 
        return ( 
            <View style={style.container}>
                <Text style={style.judul}>Daftar</Text>
                <View style={style.containerInput}>
                    <Text style={{fontSize:18, fontWeight:'400', color:'#000000'}}>Umur</Text>
                    <View style={style.containerDate}>
                        <TextInput placeholder='Bulan' style={style.inputDate}  maxLength={2}/>
                        <TextInput placeholder='Tanggal' style={style.inputDate} maxLength={2}/>
                        <TextInput placeholder='Tahun' style={style.inputDate} maxLength={4}/>
                    </View>
                </View>
                <View style={style.containerInput}>
                    <Text style={{fontSize:18, fontWeight:'400', color:'#000000'}}>Telepon</Text>
                    <TextInput placeholder='+62 8** *** ****' style={style.inputemail}/>
                </View>
                <View style={style.containerInput}>
                    <Text style={{fontSize:18, fontWeight:'400', color:'#000000'}}>Minat</Text>
                    <TextInput placeholder='Masukkan Minat' style={style.inputemail} />
                </View>
                <View style={style.containerInput}>
                    <Text style={{fontSize:18, fontWeight:'400', color:'#000000'}}>Bakat</Text>
                    <TextInput placeholder='Masukkan Bakat' style={style.inputemail}/>
                </View>
                <View style={style.containerInput}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <TouchableOpacity style={{borderWidth:1, width: 25, height:25, alignItems:'center', justifyContent:'center'}}>
                            <Text>✔</Text>
                        </TouchableOpacity>
                    <Text style={{fontSize:16,fontWeight:'400', color:'#000000', marginLeft:10, marginRight:16}}>Dengan mengisi formulir ini, saya menyetujui 
                    <Text style={{fontWeight:'700'}}> Terms of Service</Text> dan <Text style={{fontWeight:'700'}}> Privacy Policy</Text></Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={style.ButtonDaftar}>
                        <Text>Daftar</Text>
                    </TouchableOpacity>
                </View>
            </View>
         );
    }
}

const style= StyleSheet.create({
    container:{
        flex:1,
        margin:16
    },
    judul:{
        fontSize:32,
        fontWeight:'700',
        color:'#000000'
    },
    inputemail:{
        borderBottomWidth:1
    },
    containerInput:{
        paddingTop:24
    },
    containerDate:{
        flexDirection:'row',
        alignItems:'center',
    },
    inputDate:{
        borderBottomWidth:1,
        marginRight:15
    },
    modalDate:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    ButtonDaftar:{
        padding:10,
        borderRadius:16,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#D9D9D9',
        marginTop:250
    }
})
 
export default Registrasi2;