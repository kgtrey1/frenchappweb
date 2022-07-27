import React from 'react'
import {
    Pressable, StyleSheet, Text, View,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { useAppDispatch } from '@/store'
import { disconnect } from '@/store/slice-auth'
import { LoginStackParams } from '@/navigation/main'

type HomeParams = StackNavigationProp<LoginStackParams, 'HomeScreen'>

const Home: React.FC<{}> = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const { navigate } = useNavigation<HomeParams>()

    const onDisconnect = (): void => {
        dispatch(disconnect())
        navigate('LoginScreen')
    }

    return (
        <View style={style.container}>
            <Text>You are connected</Text>
            <Pressable onPress={onDisconnect}>
                <Text>Press here to disconnect</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

Home.defaultProps = {}

export default Home
