import { StatusBar } from 'expo-status-bar';
import Greet from './Greet'
import { useEffect, useState } from 'react';
import { StyleSheet,Text, View,Image,ImageBackground,ScrollView,Button ,Pressable,Modal,ActivityIndicator,Alert,Dimensions,SafeAreaView,FlatList,SectionList,TextInput,Switch} from 'react-native';
import pokemonList from '../data.json'
import groupedPokemonList from '../grouped-data.json'
import LoginForm from './Form';
import ListFetch from './ListFetch';
const logo_img=require('../assets/adaptive-icon.png')

export default function Home({navigation}) {
  const [isModalVisiable,setisModalVisiable]=useState(false)
  const [dimentions,setdimentions]=useState({
    window: Dimensions.get('window')
  })
  useEffect(()=>{
    const subscriptions  = Dimensions.addEventListener('change',({window}) => {
      setdimentions({window})
    })
    return () => subscriptions?.remove();
  })

  const {window} = dimentions;
  const windowWidth =window.width
  const windowHeight=window.height


  const[name,setName]=useState('')
  const[isDarkMode,setisDarkMode]=useState(false)
  return (
    <SafeAreaView style={{backgroundColor:'f5f5f5'}}>
    <StatusBar backgroundColor='blue' />


    <ScrollView style={styles.ScrollView}>
    <View style={styles.container}>

    <Button title='login form' onPress={()=>navigation.navigate('login')}/>
    <Button title='list fetch' onPress={()=>navigation.navigate('list')}/>
    {/* <Button title='greet' onPress={()=>navigation.navigate('greet',{name:"mahmoud"})}/> */}
    <Button title='greet' onPress={()=>navigation.navigate('greet')}/>

    <View style={styles.switchcon}>
    <Text style={styles.inputtext}>Dark Mode</Text>
    <Switch  
    value={isDarkMode} 
    onValueChange={()=>setisDarkMode((previosstate)=>!previosstate)} 
    trackColor={{false:'#767577',true:'yellow'}} 
    thumbColor='#f4f3f4' 
    />
    </View>

    {/* <Greet name="mahmoud" /> */}
    <Button title='alert' onPress={()=>Alert.alert('invalid input')} />
      <ImageBackground source={{uri:"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW190Wv?ver=d8db"}} style={{alignItems: 'center',justifyContent: 'center',height:150,width:400}}>
        <Text> native </Text>
      </ImageBackground>
    <Button title='alert' onPress={()=>Alert.alert('invalid input',"incorrect something",[{text:'cancel',onPress:()=>console.log('cancel pressed')},{text:'ok',onPress:()=>console.log('ok pressed')}])} />
      <ActivityIndicator size='large' color='red' animating={true} />
      <Image source={{uri:'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW190Wv?ver=d8db'}} style={{width:400 ,height: 200}}/>
      
      <Pressable onPress={()=>console.log('image clicked')}>
        <Image source={logo_img} style={{width:380 ,height: 300 }}/>
      </Pressable>
      <Pressable onPress={()=>console.log('text clicked')}>
      <Text style={{padding:80}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      </Pressable>
      <Pressable onPress={()=>console.log('my btn clicked')}>
      <Text style={{backgroundColor:"red",borderRadius:0,padding:5,width:80,textAlign:'center'}}>
        My Btn
      </Text>
      </Pressable>
      <Button title='click' onPress={()=>console.log('clicked')} color='midnightblue' />
      <Image source={logo_img} style={{width:380 ,height: 300}}/>



      <Button title='show modal' onPress={()=>setisModalVisiable(true)}/>
      <Modal 
      visible={isModalVisiable}
      onRequestClose={()=>setisModalVisiable(false)}
      animationType='slide'
      presentationStyle='pageSheet'
      >
        {/* <View style={{padding:50,backgroundColor:'hotpink'}}>
          <Text>MY MODAL CONTENT</Text>
          <Button title='close' onPress={()=>setisModalVisiable(false)} color='red'/>
        </View> */}
        
        <View style={styles.ScrollView}>
          <FlatList 
            data={pokemonList}
            renderItem={({item})=>{
              console.log(item.id)
              return(
                    <View style={styles.card}  key={item.id}>
                    <Text style={styles.cardtext}>{item.name}</Text>
                    <Text style={styles.cardtext}>{item.type}</Text>
                    <Button title='close' onPress={()=>setisModalVisiable(false)} color='red'/>
                    </View>
                  )
            }}
            keyExtractor={(item)=>item.id.toString()}
            ItemSeparatorComponent={<View style={{height:16}}/>}
            ListEmptyComponent={<Text style={[styles.card,styles.cardtext]}>No items founds</Text>}
            ListHeaderComponent={<Text style={styles.header}>Pokemon cards</Text>}
            ListFooterComponent={<Text style={styles.footer}>End of list</Text>}
          />
        </View>
      </Modal>


      {/* <Text style={styles.without}>try dimensions without hook</Text> */}
      <Text style={{  
            backgroundColor:windowWidth > 500 ? "red" : "blue",
            width: windowWidth > 500 ? "100%" : "80%",
            // height: windowHeight > 600 ? "20%" : "5%",
            fontSize: windowWidth > 500 ? 30 : 20,
            margin:5,
            color:"white"}}>
            try dimensions without hook
      </Text>
    </View>


    {/* <View>
        {
          pokemonList.map(pokemon=>{
            return(
              <View style={styles.card}  key={pokemon.id}>
              <Text style={styles.cardtext}>{pokemon.name}</Text>
              <Text style={styles.cardtext}>{pokemon.type}</Text>
              </View>
            )
          })
        }
    </View> */}

      <SectionList 
        sections={groupedPokemonList}
        renderItem={({item})=>{
          return(
                    <View style={styles.card}>
                    <Text style={styles.cardtext}>{item}</Text>
                    </View>
                  )
        }}
        renderSectionHeader={({section})=>(
          <Text style={styles.sectionheader}>{section.type}</Text>
        )}
        ItemSeparatorComponent={()=><View style={{height:16}}/>}
        SectionSeparatorComponent={()=><View style={{height:16}}/>}

      />



        <TextInput style={styles.input} value={name} onChangeText={setName}/>
        <Text style={styles.inputtext}>My Name Is : {name}</Text>
        <TextInput style={[styles.input,styles.multiline]} placeholder='email@.com' secureTextEntry={true} keyboardType='email-address' autoCorrect={false} autoCapitalize='none' multiline/>


        {/* <LoginForm /> */}
        {/* <ListFetch /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#Ffc0cb',
    paddingTop:60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScrollView:{
    paddingHorizontal:16
  },
  card:{
    backgroundColor:'white',
    padding:16,
    borderRadius:8,
    borderWidth:1,
    // marginBottom:16
  },
  cardtext:{
    fontSize:25
  },
  header:{
    fontSize:25,
    textAlign:'center',
    marginBottom:12,
    color:'gray',
  },
  footer:{
    fontSize:25,
    textAlign:'center',
    marginTop:12,
    color:'gray',
 },
 sectionheader:{
  backgroundColor:'white',
  fontSize:20,
  fontWeight:'bold'
 },
 input:{
  height:40,
  margin:12,
  padding:10,
  borderWidth:1
 },
 inputtext:{
  fontSize:20,
  marginBottom:20,
  textAlign:'center'
 },
 multiline:{
  minHeight:100,
  textAlignVertical:'top'
 },
 switchcon:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  paddingHorizontal:10,
 },
  // without:{
  //   backgroundColor:windowWidth > 500 ? "red" : "blue",
  //   width: windowWidth > 500 ? "100%" : "80%",
  //   height: windowHeight > 600 ? "100%" : "50%",
  //   fontSize: windowWidth > 500 ? 30 : 20,
  //   margin:5,
  //   color:"white"
  // }
});
