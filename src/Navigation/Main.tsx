import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Login, Home, Onboarding } from '@/screens'
import { useAppSelector } from '@/store'

export type LoginStackParams = {
    HomeScreen: undefined,
    LoginScreen: undefined,
    Onboarding: undefined,
}

const LoginStack = createStackNavigator<LoginStackParams>()

const MainNavigator: React.FC<{}> = (): JSX.Element => {
    const token = useAppSelector((state) => state.auth.token)

    return (
        <LoginStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Onboarding"
        >
            <LoginStack.Screen name="Onboarding" component={Onboarding} />
            <LoginStack.Screen name="HomeScreen" component={Home} />
            <LoginStack.Screen name="LoginScreen" component={Login} />
        </LoginStack.Navigator>
    )
}

MainNavigator.defaultProps = {}

export default MainNavigator
