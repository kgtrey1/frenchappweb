import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar, View } from 'react-native'
import MainNavigator from '@/navigation/main'

const Stack = createStackNavigator()

const ApplicationNavigator: React.FC<{}> = (): JSX.Element => (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1 }}>
        <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={MainNavigator}
                    options={{
                        animationEnabled: false,
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </View>
)

ApplicationNavigator.defaultProps = {}

export default ApplicationNavigator
