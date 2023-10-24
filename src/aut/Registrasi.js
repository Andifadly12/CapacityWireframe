import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Modal from "react-native-modal";
class Registrasi extends Component {
    constructor(props) {
        super(props);
        this.state={
            modalDate:false,
        }
    }
    render() { 
        return ( 
            <ScrollView style={style.container}>
                <Text style={style.judul}>Daftar</Text>
                <View style={style.containerInput}>
                    <Text style={{fontSize:18, fontWeight:'400', color:'#000000'}}>Nama</Text>
                    <TextInput placeholder='Masukkan Nama' style={style.inputemail} placeholderTextColor={'#000000'}/>
                </View>
                <View style={style.containerInput}>
                    <Text style={{fontSize:18, fontWeight:'400', color:'#000000'}}>Email</Text>
                    <TextInput placeholder='Masukkan Email' style={style.inputemail} placeholderTextColor={'#000000'}/>
                </View>
                <View style={style.containerInput}>
                    <Text style={{fontSize:18, fontWeight:'400', color:'#000000'}}>NIM/NIS</Text>
                    <TextInput placeholder='Masukkan NIM/NIS' style={style.inputemail} placeholderTextColor={'#000000'}/>
                </View>
                <View style={style.containerInput}>
                    <Text style={{fontSize:18, fontWeight:'400', color:'#000000'}}>Password</Text>
                    <TextInput placeholder='Masukkan Password' style={style.inputemail} placeholderTextColor={'#000000'}/>
                </View>
                <View style={style.containerInput}>
                    <Text style={{borderLeftWidth:2, paddingHorizontal:26, fontSize:16, fontWeight:'400', color:'#000000'}}>Gunakan password yang berbeda dengan yang digunakan email Anda.</Text>
                </View>
                <View style={style.containerInput}>
                    <TouchableOpacity style={style.ButtonLanjut}  onPress={()=>this.props.navigation.navigate('Registrasi2')}>
                        <Text style={{fontSize:16, fontWeight:'700', color:'#000000'}}>Lanjut</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', marginTop:24}}>
                    <View style={{height:2, flex:1, backgroundColor:'#D9D9D9', alignSelf:'center'}}></View>
                    <Text style={{fontSize:16, fontWeight:'700', color:'#000000'}}> Or </Text>
                    <View style={{height:2, flex:1, backgroundColor:'#D9D9D9', alignSelf:'center'}}></View>
                </View>
                <View style={style.containerInput}>
                    <TouchableOpacity style={style.ButtonGoogle} onPress={()=>this.setState({modalDate:true})}>
                        <Text style={{fontSize:16, fontWeight:'700', color:'#000000'}}>Daftar dengan akun Google</Text>
                    </TouchableOpacity>
                    <Modal isVisible={this.state.modalDate} style={{flex:1, justifyContent:"center", alignItems:'center'}}>
                        <View style={{backgroundColor:'white', width:350, height:290, justifyContent:"center", alignItems:'center'}}>
                            <Text style={{fontSize:24, fontWeight:'400', color:'#000000'}}>Google Accounts Page</Text>
                        </View>
                    </Modal>
                </View>
                <View style={{marginTop:24, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:16, fontWeight:'400', color:'#000000'}}>Sudah punya akun? <Text style={{fontWeight:'700'}}>Masuk</Text></Text>
                </View>
            </ScrollView>
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
    ButtonLanjut:{
        backgroundColor:'#D9D9D9',
        padding:10,
        borderRadius:16,
        alignItems:'center',
        justifyContent:'center'
    },
    ButtonGoogle:{
        padding:10,
        borderRadius:16,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1
    }
})
 
export default Registrasi;