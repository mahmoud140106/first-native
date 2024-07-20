import { useNavigation } from "@react-navigation/native";
import { View,Text ,StyleSheet,useWindowDimensions,Button} from "react-native"
import { useLayoutEffect } from 'react';

// const Greet = ({name}) => {

const Greet = ({route,navigation}) => {
    const windowWidth=useWindowDimensions().width;
    const windowHeight=useWindowDimensions().height;

    // const navigation=useNavigation()
    const {name}=route.params

    useLayoutEffect(()=>{
        navigation.setOptions({title:name})
    },[])
  return (
    <View style={styles.mycompo}>
        <Text style={[styles.box,styles.bluebox,{fontSize:windowWidth>500? 30 : 20,width: windowWidth>500? 400:200}]}>1-Hello {name}</Text>
        <Text style={[styles.box,styles.greenbox,{fontSize:windowWidth>500? 30 : 20,width: windowWidth>500? 400:200}]}>2-Hello {name}</Text>
        <Button title="home" onPress={()=>{navigation.navigate('home')}}/>
        <Button title="update name" onPress={()=>{navigation.setParams({name:"ra"})}}/>
        <Button title="list" onPress={()=>{navigation.jumpTo('list')}}/>
        <Button title="drawer" onPress={()=>{navigation.toggleDrawer()}}/>


    </View>
  )
}

export default Greet

const styles=StyleSheet.create({
    mycompo:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:"#000",
        padding:20,
        margin:"auto",
    },
    box:{
        width:200,
        padding:10,
        color:"#fff"
    },
    bluebox:{
        backgroundColor:"blue"
    },
    greenbox:{
        backgroundColor:"green"
    },
})