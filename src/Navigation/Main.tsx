import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Login, Home } from '@/Containers'
import { useAppSelector } from '@/Store'

const LoginStack = createStackNavigator()

const MainNavigator: React.FC<{}> = (): JSX.Element => {
    const token = useAppSelector(state => state.auth.token)

    return (
        <LoginStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={token ? 'HomeScreen' : 'LoginScreen'}
        >
            <LoginStack.Screen name="HomeScreen" component={Home} />
            <LoginStack.Screen name="LoginScreen" component={Login} />
        </LoginStack.Navigator>
    )
}

MainNavigator.defaultProps = {}

export default MainNavigator
