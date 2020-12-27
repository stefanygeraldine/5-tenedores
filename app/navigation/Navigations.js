import React from 'react'
import { NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BooksStack from "./BooksStack";
import FavoriteStack from "./FavoriteStack";
import TopBooksStack from "./TopBooksStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

/*import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();*/

const Tab = createBottomTabNavigator()
import {Icon} from 'react-native-elements'
const Navigation = ()=>{
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Restaurants"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00A680"
        }}
        screenOptions={({route})=>{
          return(
            {
              tabBarIcon: ({color}) =>{
               return screenOptions(route, color)
              }
            }
          )
        }}
      >
        <Tab.Screen name="Libros" component={BooksStack} options={{title:'Libros'}}/>
        <Tab.Screen name="Favorites" component={FavoriteStack} options={{title:'Favoritos'}}/>
        <Tab.Screen name="TopRestaurants" component={TopBooksStack} options={{title:'Top 5'}}/>


        <Tab.Screen name="Search" component={SearchStack} options={{title:'Buscar'}}/>

        <Tab.Screen name="Account" component={AccountStack} options={{title:'Cuenta'}}/>

      </Tab.Navigator>
    </NavigationContainer>
  )
}

function screenOptions (route, color){
  let iconName
  switch (route.name){
    case "Libros":
      iconName = "book-open-variant";
      break;
    case "Favorites":
      iconName = "heart-outline";
      break;
    case "TopRestaurants":
      iconName = "octagram-outline";
      break;
    case "Search":
      iconName = "magnify";
      break;
    case "Account":
      iconName = "account-outline";
      break;
    default:
      break;
  }

  return <Icon type="material-community" name={iconName} size={22} color={color}/>
}
export default Navigation