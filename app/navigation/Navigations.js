import React from 'react'
import { NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Restaurants from "../screens/Restaurants";
const Tab = createBottomTabNavigator()

const Navigation = ()=>{
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Restaurants" component={Restaurants}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default Navigation