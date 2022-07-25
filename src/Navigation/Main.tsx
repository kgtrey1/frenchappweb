import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '@/Containers'

const LoginStack = createStackNavigator()

const MainNavigator: React.FC<{}> = (): JSX.Element => {
    return (
        <LoginStack.Navigator screenOptions={{ headerShown: false }}>
            <LoginStack.Screen name="LoginScreen" component={Login} />
        </LoginStack.Navigator>
    )
}

MainNavigator.defaultProps = {}

export default MainNavigator
