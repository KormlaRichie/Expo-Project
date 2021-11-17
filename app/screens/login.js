import { Entypo, AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import {
    Text,
    ScrollView,
    ImageBackground,
    Dimensions, 
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    } from "react-native";


const LoginScreen=({navigation})=>{
    const nextScren=()=>{
        alert("Go to the Signup page from here");
    }
    const newPage=()=>{
        navigation.navigate("Home");
    }
    return(
        <ScrollView 
        style={{flex:1, backgroundColor:"00FFFF"}}
        showsVerticalScrollIndicator={false}>
           <ImageBackground 
           source={require("../images/bkg.jpg")}
           style={{
               height:Dimensions.get("window").height/2.5,
           }}>
               <View style={styles.login1}>
                 
               {/* <AntDesign name="laptop" size={24} color="black" /> */}
                   <Text style={{fontSize:24, color:"white", fontWeight:"bold"}}>SHOP HERE</Text>   
               </View>

           </ImageBackground>
           <View style={styles.bottonview}>
                <View style={{padding:40}}>
                    <Text style={{color:"#4632a1", fontSize:24, fontWeight:"bold"}}>Login</Text>
                    <View style={{flexDirection:"row"}}>
                    <Text>Don't have an account?</Text>
                        <TouchableOpacity onPress={nextScren}>
                        <Text style={{color:"blue"}}> Signup</Text> 
                        </TouchableOpacity>
                    </View>
                   
                   <View style={{marginTop:30}}>
                       <View>    
                            <TextInput placeholder="enter email address" keyboardType="email-address" style={{borderBottomWidth:1, width:"100%", paddingTop:30}}/>
                       </View>
                       <View  style={{ marginTop:20, flexDirection:"row",}}>
                            <TextInput secureTextEntry placeholder="enter password" style={{borderBottomWidth:1, width:"100%", }}/>
                            <Feather name="eye" size={24} color="black" style={{right:20}}/>
                       </View> 
                   </View>
                   <View style={styles.forgot}>
                        <View style={{flex:1, marginLeft:-20}}>
                           <TouchableOpacity style={{marginLeft:20}}><Text style={{color:"blue" }}>Forgot Password?</Text></TouchableOpacity> 
                           
                        </View>
                   </View>
                   <View style={{
                       height:100,
                       justifyContent:"center",
                       alignItems:"center",
                   }}>
                       <TouchableOpacity onPress={newPage} style={{top:-25,borderRadius:20,backgroundColor:"#4632a1", width:180, height:45, alignItems:"center", justifyContent:"center"}}>
                           <Text style={{fontSize:24, color:"silver"}}>Login</Text>
                       </TouchableOpacity>
                   </View>
                   <View style={{flex:1}}>
                       <Text style={{textAlign:"center", top:-28, fontSize:20, color:"#4632a1"}}>Sign in with other account</Text>
                       <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                           <TouchableOpacity><MaterialCommunityIcons name="gmail" size={40} color="#db3236" /></TouchableOpacity>
                           <TouchableOpacity><MaterialCommunityIcons name="apple" size={40} color="black" /></TouchableOpacity>
                           <TouchableOpacity><Entypo name="facebook-with-circle" size={40} color="#3b5998" /></TouchableOpacity>
                           
                       </View>
                   </View>
                </View>
           </View>
        </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    login1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    bottonview:
    {
        flex:1.5,
        backgroundColor:"white",
        bottom:50,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
    },
    forgot:{
        height:50,
        marginTop:20,
        flexDirection:"row"
    }
});