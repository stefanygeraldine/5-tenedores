import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import Account from "../screens/Account/Account";
import Login from '../screens/Account/Login'
import {styles} from "./styles";
const Stack = createStackNavigator()
const AccountStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={
          {
            title:'Account',
            headerStyle: styles.header,
            headerTitleStyle: styles.title
          }
        }

      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={
          {
            title:'Login',
            headerStyle: styles.header,
            headerTitleStyle: styles.title
          }
        }

      />
    </Stack.Navigator>
  )
}

export default AccountStack