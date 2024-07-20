//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Pressable} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Greet from './components/Greet';
import LoginForm from './components/Form';
import ListFetch from './components/ListFetch';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
// create a component
export const nestStack=()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen 
    name="greet" 
    component={Greet}  
    initialParams={{name:'rewe'}}
    // options={({route})=>({title:route.params.name})}
    />
    <Stack.Screen 
    name="login" 
    component={LoginForm} 
    options={{
      title:"login title",
      headerStyle:{
        backgroundColor:"#3F22FCD8"
      },
      headerTintColor:'white',
      headerTitleStyle:{fontWeight:'bold'},
      headerRight:()=>(
      <Pressable onPress={()=>{alert('menu pressed')}}>
        <Text style={{color:'white'}}>menu</Text>
      </Pressable>),
      contentStyle:{backgroundColor:'red'}
    }}
    />
    <Stack.Screen name="list" component={ListFetch} />
</Stack.Navigator>
  )
}
const App = () => {

  return (
    // <View style={styles.container}>
    // </View>
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen 
        name="greet" 
        component={Greet}  
        initialParams={{name:'rewe'}}
        // options={({route})=>({title:route.params.name})}
        />
        <Stack.Screen 
        name="login" 
        component={LoginForm} 
        options={{
          title:"login title",
          headerStyle:{
            backgroundColor:"#3F22FCD8"
          },
          headerTintColor:'white',
          headerTitleStyle:{fontWeight:'bold'},
          headerRight:()=>(
          <Pressable onPress={()=>{alert('menu pressed')}}>
            <Text style={{color:'white'}}>menu</Text>
          </Pressable>),
          contentStyle:{backgroundColor:'red'}
        }}
        />
        <Stack.Screen name="list" component={ListFetch} />
    </Stack.Navigator> */}

    {/* <Drawer.Navigator>
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="login" component={LoginForm} />
      <Drawer.Screen name="greet" component={Greet} initialParams={{name:'mmm'}}/>
      <Drawer.Screen name="list" component={ListFetch} 
        options={{
          title:'drawer title',
          drawerLabel:"drawer lbl",
          drawerActiveTintColor:'red',
          drawerActiveBackgroundColor:'lightgreen',
          drawerContentStyle:{backgroundColor:'pink'}
          }}
      />
    </Drawer.Navigator> */}
    <Tab.Navigator 
          screenOptions={{
          tabBarLabelPosition:'below-icon',
          // tabBarShowLabel:false
          tabBarActiveTintColor:'lightgreen',
          tabBarInactiveTintColor:'red',
        }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="list" component={ListFetch} 
          options={{
          tabBarLabel:'label',
          tabBarIcon:({color})=>(<Ionicons name='person' size={20} color={color}/>),
          // tabBarBadge:3
        }}
      />
      <Tab.Screen name="login" component={LoginForm} />
      <Tab.Screen name="greet" component={Greet} initialParams={{name:'mmm'}}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
