import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import Books from "../screens/Books";

const Stack = createStackNavigator()
const BooksStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Libros" component={Books} options={{title:'Libros'}}/>
    </Stack.Navigator>
  )
}

export default BooksStack